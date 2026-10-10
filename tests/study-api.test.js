const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const apiSource = fs.readFileSync(path.join(__dirname, "..", "functions", "api", "study.js"), "utf8")
  .replace("export async function onRequestGet", "async function onRequestGet")
  .replace("export async function onRequestPost", "async function onRequestPost");
const context = vm.createContext({
  Response,
  Request,
  TextDecoder,
  URL,
  Map,
  Date,
  JSON,
  console,
  globalThis: {}
});
vm.runInContext(`${apiSource}\nglobalThis.handlers = { onRequestGet, onRequestPost };`, context);
const handlers = context.globalThis.handlers;
const baseUrl = "https://reviewer.example/api/study";
const validNotes = "A primary key uniquely identifies each row in a relational database table. A foreign key references a related key.";

function request(body, ip = "198.51.100.20", extraHeaders = {}) {
  return new Request(baseUrl, {
    method: "POST",
    headers: {
      Origin: "https://reviewer.example",
      "Content-Type": "application/json",
      "CF-Connecting-IP": ip,
      ...extraHeaders
    },
    body: typeof body === "string" ? body : JSON.stringify(body)
  });
}

test("AI status reports whether the Pages AI binding exists", async () => {
  const disabled = await handlers.onRequestGet({ env: {} });
  assert.equal(disabled.status, 200);
  assert.deepEqual(await disabled.json(), { available: false });

  const enabled = await handlers.onRequestGet({ env: { AI: {} } });
  assert.deepEqual(await enabled.json(), { available: true });
});

test("study API rejects cross-origin, unsupported, and oversized requests", async () => {
  const crossOrigin = await handlers.onRequestPost({
    request: request({ mode: "tutor", notes: validNotes, question: "What is a primary key?" }, "198.51.100.21", {
      Origin: "https://attacker.example"
    }),
    env: { AI: { run: async () => ({ response: "No" }) } }
  });
  assert.equal(crossOrigin.status, 403);

  const unsupported = await handlers.onRequestPost({
    request: request({ mode: "unknown", notes: validNotes }, "198.51.100.22"),
    env: { AI: { run: async () => ({ response: "No" }) } }
  });
  assert.equal(unsupported.status, 400);

  const oversized = await handlers.onRequestPost({
    request: request({ mode: "tutor", notes: "x".repeat(60000), question: "Question" }, "198.51.100.23"),
    env: { AI: { run: async () => ({ response: "No" }) } }
  });
  assert.equal(oversized.status, 413);
});

test("AI module output is schema-checked and generation stays grounded in provided notes", async () => {
  let receivedMessages;
  const response = await handlers.onRequestPost({
    request: request({ mode: "module", subject: "Database Management", notes: validNotes }, "198.51.100.24"),
    env: {
      AI: {
        run: async (model, input) => {
          assert.equal(model, "@cf/meta/llama-3.2-1b-instruct");
          receivedMessages = input.messages;
          return { response: JSON.stringify({
            title: "Keys in a relational table",
            summary: "Review how primary and foreign keys relate records.",
            notes: [validNotes, "A primary key is unique within its table.", "A foreign key links related records."],
            cards: [
              { question: "What uniquely identifies a row?", answer: "A primary key." },
              { question: "What does a foreign key reference?", answer: "A related key." },
              { question: "What do keys help represent?", answer: "Identity and relationships between records." }
            ]
          }) };
        }
      }
    }
  });
  assert.equal(response.status, 200);
  const result = await response.json();
  assert.equal(result.module.title, "Keys in a relational table");
  assert.equal(result.module.cards.length, 3);
  assert.match(receivedMessages[0].content, /only claims supported by those notes/);
  assert.match(receivedMessages[1].content, /<student_notes>/);
});

test("AI tutor receives the question and source notes and returns text only", async () => {
  const response = await handlers.onRequestPost({
    request: request({ mode: "tutor", subject: "Database Management", notes: validNotes, question: "What identifies each row?" }, "198.51.100.25"),
    env: {
      AI: {
        run: async (_model, input) => {
          assert.match(input.messages[0].content, /answer only from the supplied notes/i);
          assert.match(input.messages[1].content, /What identifies each row/);
          return { response: "The notes say that a primary key identifies each row." };
        }
      }
    }
  });
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { answer: "The notes say that a primary key identifies each row." });
});

test("AI requests are throttled per client address within an isolate", async () => {
  const ip = "198.51.100.99";
  const env = { AI: { run: async () => ({ response: "Answer from notes." }) } };
  for (let index = 0; index < 12; index += 1) {
    const response = await handlers.onRequestPost({
      request: request({ mode: "tutor", notes: validNotes, question: "What is a primary key?" }, ip),
      env
    });
    assert.equal(response.status, 200);
  }
  const limited = await handlers.onRequestPost({
    request: request({ mode: "tutor", notes: validNotes, question: "What is a primary key?" }, ip),
    env
  });
  assert.equal(limited.status, 429);
});
