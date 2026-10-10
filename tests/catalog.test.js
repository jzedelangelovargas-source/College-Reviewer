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
    this.value = selector === "#program-filter" ? "all" : "";
    this.textContent = "";
    this.hidden = false;
    this.open = false;
    this.content = "";
  }

  append(...children) {
    this.children.push(...children);
  }

  replaceChildren(...children) {
    this.children = children;
  }

  querySelector(selector) {
    if (!this.childrenBySelector) this.childrenBySelector = new Map();
    if (!this.childrenBySelector.has(selector)) this.childrenBySelector.set(selector, new FakeElement(selector));
    return this.childrenBySelector.get(selector);
  }

  addEventListener(name, listener) {
    if (!this.listeners.has(name)) this.listeners.set(name, []);
    this.listeners.get(name).push(listener);
  }
  trigger(name) {
    (this.listeners.get(name) || []).forEach(listener => listener({ target: this }));
  }
  setAttribute(name, value) { this.attributes.set(name, value); }
  getAttribute(name) { return this.attributes.get(name) || null; }
  focus() {}
  showModal() { this.open = true; }
}

const root = path.join(__dirname, "..");
const savedValues = new Map();
const window = {
  localStorage: {
    getItem: key => savedValues.get(key) || null,
    setItem: (key, value) => savedValues.set(key, value)
  },
  matchMedia: () => ({ matches: false })
};
const elements = new Map();
const htmlSource = fs.readFileSync(path.join(root, "index.html"), "utf8");
const documentElement = new FakeElement("html");
const document = {
  querySelector(selector) {
    if (!elements.has(selector)) elements.set(selector, new FakeElement(selector));
    return elements.get(selector);
  },
  createElement: tag => new FakeElement(tag),
  documentElement,
  addEventListener() {},
  contains: () => true
};
const context = vm.createContext({ window, document });
const dataSource = fs.readFileSync(path.join(root, "catalog-data.js"), "utf8");
const appSource = fs.readFileSync(path.join(root, "script.js"), "utf8");
vm.runInContext(dataSource, context);
vm.runInContext(`${appSource}\nglobalThis.loadedCatalog = catalog;\nglobalThis.quizDeck = topicQuizCards;\nglobalThis.ensureTopics = ensureCourseTopics;\nglobalThis.pageSize = subjectPageSize;\nglobalThis.testElements = { programFilter, subjectGrid, resultCount, cardProgress, nextCard, themeToggle, themeColorMeta, loadMoreSubjects, flashcard, markReview, markKnown, quizScore, studyProgressSummary, studyProgressBar, dialogSourceSection: document.querySelector("#dialog-source-section"), dialogSources: document.querySelector("#dialog-sources"), dialogModule: document.querySelector("#dialog-module") };`, context);

const catalog = context.loadedCatalog;
const academicPrograms = catalog.filter(program => program.credential !== "TESDA qualification");
const tesdaPrograms = catalog.filter(program => program.credential === "TESDA qualification");

test("program IDs and degree titles are unique", () => {
  assert.equal(new Set(catalog.map(program => program.id)).size, catalog.length);
  const normalizedNames = catalog.map(program => program.name.trim().toLocaleLowerCase());
  assert.equal(new Set(normalizedNames).size, normalizedNames.length);
});

test("light and dark mode toggle, update accessibility state, and persist the choice", () => {
  const { themeToggle, themeColorMeta } = context.testElements;
  assert.equal(documentElement.getAttribute("data-theme"), "light");
  assert.equal(themeToggle.getAttribute("aria-pressed"), "false");
  assert.equal(themeToggle.getAttribute("aria-label"), "Switch to dark mode");

  themeToggle.trigger("click");
  assert.equal(documentElement.getAttribute("data-theme"), "dark");
  assert.equal(themeToggle.getAttribute("aria-pressed"), "true");
  assert.equal(themeToggle.getAttribute("aria-label"), "Switch to light mode");
  assert.equal(themeColorMeta.getAttribute("content"), "#121916");
  assert.equal(savedValues.get("kursokatha-theme"), "dark");

  themeToggle.trigger("click");
  assert.equal(documentElement.getAttribute("data-theme"), "light");
  assert.equal(themeToggle.getAttribute("aria-pressed"), "false");
  assert.equal(themeColorMeta.getAttribute("content"), "#f5f7f2");
  assert.equal(savedValues.get("kursokatha-theme"), "light");
});

test("initial render defers most topic decks and limits subject-card DOM", () => {
  const { subjectGrid } = context.testElements;
  const totalSubjects = catalog.reduce((sum, program) => sum + program.subjects.length, 0);
  const unrealizedSubjects = catalog.flatMap(program => program.subjects)
    .filter(subject => !subject.topics.some(topic => topic.isPrimer));
  assert.equal(subjectGrid.children.length, Math.min(context.pageSize, totalSubjects));
  assert.ok(unrealizedSubjects.length > 0);
  assert.ok(unrealizedSubjects.length < totalSubjects);
});

test("degree outlines cover every academic year and semester", () => {
  for (const program of academicPrograms) {
    const terms = new Set(program.subjects.map(subject => subject.termId || `y${subject.year}s${subject.semester}`));
    const years = Math.max(...program.subjects.map(subject => subject.year));
    assert.ok(years >= 4, `${program.name} should include at least four years`);
    for (let year = 1; year <= years; year += 1) {
      for (let semester = 1; semester <= 2; semester += 1) {
        assert.ok(terms.has(`y${year}s${semester}`), `${program.name} is missing Year ${year}, Semester ${semester}`);
      }
    }
  }
});

test("all college-degree programs label major subjects and an appropriate elective each term", () => {
  const degreePlans = window.programCatalog.filter(program => program.credential !== "TESDA qualification");
  for (const plan of degreePlans) {
    const program = catalog.find(entry => entry.id === plan.id);
    for (const term of plan.terms) {
      const termSubjects = program.subjects.filter(subject =>
        (subject.termId || `y${subject.year}s${subject.semester}`) === term.id
      );
      assert.ok(termSubjects.some(subject => subject.subjectType === "Major"), `${program.name} ${term.label} needs a major subject`);
      if (program.credential === "Bachelor's degree") {
        assert.ok(
          termSubjects.some(subject => subject.subjectType === "General education / supporting"),
          `${program.name} ${term.label} needs a general-education/supporting subject`
        );
        assert.ok(
          termSubjects.some(subject => subject.subjectType === "Minor / elective example"),
          `${program.name} ${term.label} needs a minor/elective example`
        );
      } else {
        assert.ok(
          termSubjects.some(subject => subject.subjectType === "Program elective example"),
          `${program.name} ${term.label} needs a program-elective example`
        );
      }
    }
  }
});

test("every topic has exactly 20 question-and-answer quiz cards", () => {
  for (const program of catalog) {
    for (const subject of program.subjects) {
      const originalTopicCount = subject.topics.length;
      const hasModule = subject.topics.some(topic => topic.isPrimer);
      context.ensureTopics(subject);
      assert.equal(subject.topics.length, originalTopicCount + Number(!hasModule), `${program.name} · ${subject.name} should only add its real Module 1`);
      assert.equal(subject.topics.some(topic => topic.isStudyPrompt), false, `${program.name} · ${subject.name} must not have answer-framework filler topics`);
      for (const topic of subject.topics) {
        const quizCards = context.quizDeck(topic);
        assert.equal(quizCards.length, 20, `${program.name} · ${subject.name} · ${topic.title} should have 20 cards`);
        assert.ok(quizCards.every(([question, answer]) =>
          question.trim().length > 0 && answer.trim().length > 0
        ), `${program.name} · ${subject.name} · ${topic.title} cards need questions and answers`);
        assert.equal(new Set(quizCards.map(([question]) => question)).size, 20);
        assert.ok(topic.notes.length > 0, `${program.name} · ${subject.name} topics need review guidance`);
        assert.ok(quizCards.every(([, answer]) =>
          !/this original prompt and answer framework|not a supplied course fact|according to the review notes:/i.test(answer)
        ), `${program.name} · ${subject.name} · ${topic.title} must not use placeholder answers`);
      }
    }
  }
});

test("every catalog subject has a sourced, readable Module 1", () => {
  const subjects = catalog.flatMap(program => program.subjects);
  assert.ok(subjects.length >= 1000);
  for (const subject of subjects) {
    context.ensureTopics(subject);
    const primers = subject.topics.filter(topic => topic.isPrimer);
    assert.equal(primers.length, 1, `${subject.name} should have exactly one field primer`);
    const primer = primers[0];
    assert.ok(primer.title.length > 0 && primer.summary.includes(subject.name));
    assert.ok(primer.moduleTitle && primer.moduleTitle.includes(subject.name));
    assert.ok(primer.notes.length >= 3 && primer.cards[0][0] && primer.cards[0][1]);
    assert.ok(primer.sources.length > 0);
    assert.ok(primer.sources.every(source => source.url.startsWith("https://") && source.label && source.scope));
  }
});

test("every distinct subject title has an explicit course module", () => {
  const uniqueSubjects = new Map();
  catalog.forEach(program => program.subjects.forEach(subject => {
    if (!uniqueSubjects.has(subject.name)) uniqueSubjects.set(subject.name, subject);
  }));
  const courseModules = [...uniqueSubjects.values()].filter(subject =>
    subject.topics.some(topic => topic.isCourseModule)
  );
  const unassigned = [...uniqueSubjects.values()]
    .filter(subject => !subject.topics.some(topic => topic.isCourseModule))
    .map(subject => subject.name);
  assert.equal(courseModules.length, uniqueSubjects.size,
    `course modules cover ${courseModules.length}/${uniqueSubjects.size} distinct subject titles; missing: ${unassigned.join(", ")}`);
});

test("course subjects render a readable module with a matching topic and lesson", () => {
  const program = catalog.find(entry => entry.id === "bsit");
  const subject = program.subjects.find(entry => entry.name === "Programming Fundamentals");
  context.ensureTopics(subject);
  const module = subject.topics.find(topic => topic.isCourseModule);
  assert.ok(module, "Programming Fundamentals should have a course-specific module");
  assert.equal(module.moduleTitle, "Module 1 · Programming Fundamentals");
  assert.equal(module.title, "Algorithms, variables, and control flow");
  assert.ok(module.notes.some(note => note.includes("conditional")));
  assert.ok(module.cards[0][1].includes("inputs and outputs"));
  assert.ok(module.sources.length > 0);

  const { programFilter, subjectGrid, dialogModule } = context.testElements;
  programFilter.value = "bsit";
  context.render();
  const containsText = (element, text) =>
    element.textContent === text || element.children.some(child => containsText(child, text));
  const programmingCard = subjectGrid.children.find(card => containsText(card, "Programming Fundamentals"));
  assert.ok(programmingCard);
  const visibleModule = programmingCard.children.find(child => child.className === "subject-module");
  assert.ok(visibleModule);
  assert.ok(visibleModule.children[0].textContent.includes("Programming Fundamentals"));
  assert.equal(visibleModule.children[1].textContent, module.title);
  subjectGrid.children.forEach(card => {
    const actions = card.children.find(child => child.className === "subject-studio-actions");
    assert.ok(actions, "every subject card should link to Study Studio");
    assert.deepEqual(actions.children.map(button => button.textContent), ["Study with AI", "Generate AI module"]);
  });
  const topicButton = programmingCard.children.find(child => child.className === "topic-list").children[0];
  topicButton.trigger("click");
  assert.equal(dialogModule.textContent, module.moduleTitle);
  programFilter.value = "all";
  context.render();
});

test("TESDA qualifications use competency modules rather than semester fields", () => {
  assert.ok(tesdaPrograms.length >= 10);
  for (const program of tesdaPrograms) {
    assert.ok(program.terms.length >= 2, `${program.name} should have multiple competency modules`);
    assert.ok(program.terms.every(term => !term.year && !term.semester), `${program.name} should not be modeled as a degree`);
    program.subjects.forEach(context.ensureTopics);
    assert.ok(program.subjects.every(subject => !subject.outlineOnly && Array.isArray(subject.topics)));
  }
});

test("catalog has entries spanning the requested study areas", () => {
  const categories = catalog.map(program => program.category).join(" | ").toLocaleLowerCase();
  for (const area of [
    "computing", "engineering", "health", "education", "law", "business", "science",
    "social sciences", "arts", "agriculture", "maritime", "aviation", "architecture",
    "military", "communication", "tesda"
  ]) {
    assert.ok(categories.includes(area), `missing catalog area: ${area}`);
  }
});

test("BS Development Communication is available as an eight-semester degree outline", () => {
  const program = catalog.find(entry => entry.id === "bsdevcom");
  program.subjects.forEach(context.ensureTopics);
  assert.ok(program);
  assert.equal(program.name, "Bachelor of Science in Development Communication");
  assert.equal(program.terms.length, 8);
  assert.ok(program.subjects.some(subject => subject.name === "Communication for Social Change"));
  assert.ok(program.subjects.length >= 40);
  for (const term of program.terms) {
    const termSubjects = program.subjects.filter(subject => subject.termId === term.id);
    assert.ok(termSubjects.length >= 5);
    assert.ok(termSubjects.some(subject => subject.subjectType === "Major"), `${term.label} needs major subjects`);
    assert.ok(
      termSubjects.some(subject => subject.subjectType.startsWith("Minor /")),
      `${term.label} needs an example minor/elective subject`
    );
    assert.ok(
      termSubjects.some(subject => subject.subjectType.startsWith("General education")),
      `${term.label} needs general-education/support subjects`
    );
  }
  const reviewedSubjects = program.subjects.filter(subject =>
    subject.topics.some(topic => !topic.isStudyPrompt && !topic.isPrimer)
  );
  assert.equal(reviewedSubjects.length, 16);
  assert.ok(reviewedSubjects.every(subject =>
    subject.topics.every(topic => topic.notes.length > 0 && topic.cards.length > 0)
  ));
  assert.ok(program.subjects.some(subject => subject.subjectType === "Minor / elective example"));
});

test("existing original reviewer entries remain available across all four years", () => {
  for (const id of ["bsit", "bscs", "bsba", "bsa", "educ", "nursing"]) {
    const program = catalog.find(entry => entry.id === id);
    assert.ok(program, `missing sample program ${id}`);
    assert.ok(program.subjects.some(subject => subject.topics.length > 0), `${id} lost its original reviewer topics`);
    for (let year = 1; year <= 4; year += 1) {
      for (let semester = 1; semester <= 2; semester += 1) {
        assert.ok(
          program.subjects.some(subject => subject.year === year && subject.semester === semester),
          `${id} is missing Year ${year}, Semester ${semester}`
        );
      }
    }
  }
});

test("the app hides term labels and filters the catalog by program", () => {
  const {
    programFilter, subjectGrid, resultCount, cardProgress, nextCard, loadMoreSubjects,
    dialogSourceSection, dialogSources
  } = context.testElements;
  const totalSubjects = catalog.reduce((sum, program) => sum + program.subjects.length, 0);
  assert.equal(subjectGrid.children.length, Math.min(context.pageSize, totalSubjects));
  assert.ok(resultCount.textContent.includes(`${totalSubjects} subjects`));
  assert.equal(loadMoreSubjects.hidden, false);
  loadMoreSubjects.trigger("click");
  assert.equal(subjectGrid.children.length, Math.min(context.pageSize * 2, totalSubjects));
  assert.ok(!htmlSource.includes("semester-filter"));

  programFilter.value = "bsdevcom";
  programFilter.trigger("change");
  context.render();
  const renderedText = (element) => [
    element.textContent,
    ...element.children.map(renderedText)
  ].join(" ");
  const developmentCommunicationCards = subjectGrid.children.map(renderedText).join(" ");
  assert.ok(developmentCommunicationCards.includes("Major"));
  assert.ok(developmentCommunicationCards.includes("General education / supporting"));
  assert.ok(developmentCommunicationCards.includes("Minor / elective example"));
  assert.ok(!developmentCommunicationCards.includes("Year 1"));
  assert.ok(!developmentCommunicationCards.includes("Semester 1"));
  const firstTopicButton = subjectGrid.children[0].children
    .find(element => element.className === "topic-list").children[0];
  firstTopicButton.trigger("click");
  assert.equal(dialogSourceSection.hidden, false);
  assert.equal(dialogSources.children.length, 1);
  assert.equal(dialogSources.children[0].children[0].target, "_blank");
  assert.equal(dialogSources.children[0].children[0].rel, "noopener noreferrer");
  assert.equal(cardProgress.textContent, "Card 1 of 20");
  for (let card = 0; card < 19; card += 1) nextCard.trigger("click");
  assert.equal(cardProgress.textContent, "Card 20 of 20");
  nextCard.trigger("click");
  assert.equal(cardProgress.textContent, "Card 1 of 20");

  programFilter.value = "tesda-css-nc2";
  programFilter.trigger("change");
  context.render();
  assert.equal(subjectGrid.children.length, 5);
  const tesdaCards = subjectGrid.children.map(renderedText).join(" ");
  assert.ok(!tesdaCards.includes("Core competencies"));
  assert.ok(!tesdaCards.includes("Module 2"));
});

test("quiz self-ratings require revealing answers, persist per topic, and complete progress", () => {
  const {
    programFilter, subjectGrid, flashcard, markReview, markKnown, quizScore,
    nextCard, studyProgressSummary, studyProgressBar
  } = context.testElements;
  programFilter.value = "bsit";
  context.render();
  const firstSubject = subjectGrid.children[0];
  const topicButtons = firstSubject.children.find(element => element.className === "topic-list").children;

  topicButtons[0].trigger("click");
  assert.equal(markReview.disabled, true);
  markKnown.trigger("click");
  assert.equal(quizScore.textContent.includes("Rated: 0/20"), true);

  flashcard.trigger("click");
  assert.equal(markReview.disabled, false);
  markKnown.trigger("click");
  assert.match(quizScore.textContent, /Known: 1 · Review: 0 · Rated: 1\/20/);
  nextCard.trigger("click");
  flashcard.trigger("click");
  markReview.trigger("click");
  assert.match(quizScore.textContent, /Known: 1 · Review: 1 · Rated: 2\/20/);

  topicButtons[1].trigger("click");
  assert.match(quizScore.textContent, /Known: 0 · Review: 0 · Rated: 0\/20/);
  flashcard.trigger("click");
  markKnown.trigger("click");
  topicButtons[0].trigger("click");
  assert.match(quizScore.textContent, /Known: 1 · Review: 1 · Rated: 2\/20/);
  const savedProgress = JSON.parse(savedValues.get("kursokatha-study-progress"));
  assert.equal(Object.keys(savedProgress).length, 2);

  nextCard.trigger("click");
  nextCard.trigger("click");
  for (let card = 2; card < 20; card += 1) {
    flashcard.trigger("click");
    markKnown.trigger("click");
    if (card < 19) nextCard.trigger("click");
  }
  assert.match(quizScore.textContent, /^Topic complete · /);
  const expectedTopicCount = catalog.reduce((total, program) =>
    total + program.subjects.reduce((subjectTotal, subject) =>
      subjectTotal + subject.topics.length + Number(!subject.topics.some(topic => topic.isPrimer)), 0), 0);
  assert.ok(studyProgressSummary.textContent.startsWith(`1/${expectedTopicCount} topics complete`));
  assert.equal(studyProgressBar.value > 0, true);
});

test("site branding and search metadata use the new name", () => {
  assert.ok(htmlSource.includes("<title>KursoKatha — Philippine College &amp; TESDA Reviewer</title>"));
  assert.ok(htmlSource.includes('"name": "KursoKatha — College Reviewer"'));
  assert.ok(htmlSource.includes("kursokatha"));
  assert.ok(!htmlSource.toLocaleLowerCase().includes("aral"));
});
