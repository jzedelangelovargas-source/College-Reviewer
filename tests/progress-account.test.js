const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const root = path.join(__dirname, "..");
const source = fs.readFileSync(path.join(root, "functions", "api", "auth-config.js"), "utf8")
  .replace("export async function onRequestGet", "async function onRequestGet");
const context = vm.createContext({ Response, URL, globalThis: {} });
vm.runInContext(`${source}\nglobalThis.handler = onRequestGet;`, context);

test("auth config only exposes a public key when an HTTPS project URL is configured", async () => {
  const missing = await context.globalThis.handler({ env: {} });
  assert.deepEqual(await missing.json(), { configured: false, url: "", anonKey: "" });

  const insecure = await context.globalThis.handler({
    env: { SUPABASE_URL: "http://example.test", SUPABASE_ANON_KEY: "not-returned" }
  });
  assert.deepEqual(await insecure.json(), { configured: false, url: "", anonKey: "" });

  const configured = await context.globalThis.handler({
    env: { SUPABASE_URL: "https://sample.supabase.co/", SUPABASE_ANON_KEY: "public-anon-key" }
  });
  assert.deepEqual(await configured.json(), {
    configured: true,
    url: "https://sample.supabase.co",
    anonKey: "public-anon-key"
  });
});

test("account progress table restricts reads and writes to the signed-in owner", () => {
  const schema = fs.readFileSync(path.join(root, "supabase", "schema.sql"), "utf8");
  assert.match(schema, /enable row level security/i);
  assert.match(schema, /grant select, insert, update on table public\.study_progress to authenticated/i);
  assert.match(schema, /using \(\(select auth\.uid\(\)\) = user_id\)/i);
  assert.match(schema, /with check \(\(select auth\.uid\(\)\) = user_id\)/i);
  assert.doesNotMatch(schema, /service_role/i);
});

test("account UI is wired to sign-up, sign-in, and progress sync without collecting study notes", () => {
  const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
  const client = fs.readFileSync(path.join(root, "progress-account.js"), "utf8");
  assert.match(html, /id="open-account"[^>]*>Sign up \/ Sign in/);
  assert.match(html, /data-account-action="signup"/);
  assert.match(html, /data-account-action="signin"/);
  assert.match(client, /signUp\(\{/);
  assert.match(client, /signInWithPassword/);
  assert.match(client, /study_progress/);
  assert.doesNotMatch(client, /studio-notes|study-notes/i);
});
