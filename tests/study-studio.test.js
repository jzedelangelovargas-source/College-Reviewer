const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

class FakeElement {
  constructor(selector) {
    this.selector = selector;
    this.children = [];
    this.attributes = new Map();
    this.listeners = new Map();
    this.hidden = false;
    this.disabled = false;
    this.value = "";
    this.textContent = "";
    this.open = false;
  }

  append(...children) { this.children.push(...children); }
  replaceChildren(...children) { this.children = children; }
  addEventListener(name, listener) {
    if (!this.listeners.has(name)) this.listeners.set(name, []);
    this.listeners.get(name).push(listener);
  }
  setAttribute(name, value) { this.attributes.set(name, value); }
  getAttribute(name) { return this.attributes.get(name) || null; }
  showModal() { this.open = true; }
  focus() {}
  scrollIntoView() {}
}

const root = path.join(__dirname, "..");
const values = new Map();
const elements = new Map();
const window = {
  localStorage: {
    getItem: key => values.get(key) || null,
    setItem: (key, value) => values.set(key, value)
  },
  fetch: undefined
};
const document = {
  querySelector(selector) {
    if (!elements.has(selector)) elements.set(selector, new FakeElement(selector));
    return elements.get(selector);
  },
  querySelectorAll(selector) {
    if (selector === ".studio-review-controls [data-rating]") {
      return ["again", "hard", "good", "easy"].map(rating => {
        const button = new FakeElement(rating);
        button.setAttribute("data-rating", rating);
        return button;
      });
    }
    return [];
  },
  createElement: tag => new FakeElement(tag),
  createTextNode: text => Object.assign(new FakeElement("text"), { textContent: text })
};
const context = vm.createContext({ window, document });
vm.runInContext(fs.readFileSync(path.join(root, "study-modules.js"), "utf8"), context);
vm.runInContext(fs.readFileSync(path.join(root, "study-studio.js"), "utf8"), context);

test("the learning hub provides ten distinct, readable modules for all learners", () => {
  const modules = window.KursoStudyStudio.getModules();
  assert.equal(modules.length, 10);
  assert.equal(new Set(modules.map(module => module.id)).size, 10);
  assert.equal(new Set(modules.map(module => module.title)).size, 10);
  for (const module of modules) {
    assert.ok(module.summary.length > 20);
    assert.ok(module.lessons.length >= 3);
    assert.ok(module.lessons.every(lesson => lesson.length > 80));
    assert.ok(module.activity.length > 30);
    assert.ok(module.question.length > 10);
    assert.ok(module.answer.length > 30);
  }
  assert.equal(document.querySelector("#learning-modules").children.length, 10);
  assert.equal(document.querySelector("#module-completion").textContent, "0 of 10 completed");
});

test("offline flashcards quote only the learner's note sentences and cap the deck", () => {
  const notes = [
    "Active recall means retrieving information from memory before checking the source.",
    "Compare an answer with course materials and correct gaps instead of trusting confidence alone.",
    "Return to difficult material in separate sessions over time."
  ].join("\n");
  const cards = window.KursoStudyStudio.buildCards(notes, "biology");
  assert.equal(cards.length, 3);
  assert.ok(cards.every(card => notes.includes(card.answer)));
  assert.equal(new Set(cards.map(card => card.id)).size, cards.length);
  assert.ok(cards.every(card => card.question.startsWith("Recall the key point")));

  const longDeck = window.KursoStudyStudio.buildCards(
    Array.from({ length: 25 }, (_, index) => `Point ${index + 1} describes a sufficiently long study note for a flashcard.`).join("\n"),
    "subject"
  );
  assert.equal(longDeck.length, 20);
});

test("offline tutor finds relevant note lines without inventing an answer", () => {
  const notes = "A primary key uniquely identifies a row in a table. A foreign key refers to a related table.";
  assert.match(window.KursoStudyStudio.findAnswer("What identifies a row?", notes), /primary key uniquely identifies a row/);
  assert.equal(window.KursoStudyStudio.findAnswer("How does photosynthesis work?", notes), "");
});

test("spaced-review ratings schedule short retries and progressively later reviews", () => {
  const now = 1_800_000_000_000;
  const again = window.KursoStudyStudio.scheduleFor("card-one", "again", now);
  assert.equal(again.dueAt, now + 10 * 60 * 1000);
  assert.equal(again.repetitions, 0);

  const firstGood = window.KursoStudyStudio.scheduleFor("card-two", "good", now);
  assert.equal(firstGood.intervalDays, 1);
  const secondGood = window.KursoStudyStudio.scheduleFor("card-two", "good", now);
  assert.equal(secondGood.intervalDays, 3);
  const easy = window.KursoStudyStudio.scheduleFor("card-three", "easy", now);
  assert.equal(easy.intervalDays, 4);
  assert.ok(values.has("kursokatha-spaced-review"));
});

test("the interface discloses AI service and privacy requirements", () => {
  const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
  const readme = fs.readFileSync(path.join(root, "README.md"), "utf8");
  assert.match(html, /study-modules\.js/);
  assert.match(html, /study-studio\.js/);
  assert.match(html, /Do not paste private, identifying, or restricted material/);
  assert.match(html, /Cloudflare AI/);
  assert.match(readme, /Settings → Bindings → Add → Workers AI/);
  assert.match(readme, /not a billing guarantee/);
});
