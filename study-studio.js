(() => {
  const modules = window.kursoStudyModules;
  const moduleGrid = document.querySelector("#learning-modules");
  const completionSummary = document.querySelector("#module-completion");
  const studioDialog = document.querySelector("#study-studio-dialog");
  const notesInput = document.querySelector("#studio-notes");
  const contextLabel = document.querySelector("#studio-context");
  const aiStatus = document.querySelector("#studio-ai-status");
  const moduleOutput = document.querySelector("#studio-module-output");
  const reviewSection = document.querySelector("#studio-review");
  const flashcard = document.querySelector("#studio-flashcard");
  const flashcardLabel = document.querySelector("#studio-flashcard-label");
  const flashcardText = document.querySelector("#studio-flashcard-text");
  const flashcardHint = document.querySelector("#studio-flashcard-hint");
  const cardProgress = document.querySelector("#studio-card-progress");
  const scheduleNote = document.querySelector("#studio-schedule-note");
  const tutorAnswer = document.querySelector("#studio-tutor-answer");
  const generateButton = document.querySelector("#generate-ai-module");
  const tutorButton = document.querySelector("#ask-ai-tutor");
  const ratingButtons = [...document.querySelectorAll(".studio-review-controls [data-rating]")];
  const progressKey = "kursokatha-study-module-progress";
  const scheduleKey = "kursokatha-spaced-review";
  const savedModulesKey = "kursokatha-generated-modules";
  let moduleProgress = readObject(progressKey);
  let spacedReview = readObject(scheduleKey);
  let generatedModules = readObject(savedModulesKey);
  let currentCards = [];
  let currentCardIndex = 0;
  let currentSubject = "My notes";
  let currentSubjectKey = "personal-notes";
  let aiAvailable = false;

  function readObject(key) {
    const saved = window.localStorage.getItem(key);
    if (saved === null) return {};
    const value = JSON.parse(saved);
    if (!value || typeof value !== "object" || Array.isArray(value)) {
      throw new Error(`Saved study data for ${key} has an invalid format.`);
    }
    return value;
  }

  function saveObject(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  function escapeText(value) {
    return typeof value === "string" ? value : "";
  }

  function splitNotes(text) {
    return text
      .split(/(?<=[.!?])\s+|\r?\n+/u)
      .map(line => line.replace(/^[\s•*-]+/, "").trim())
      .filter(line => line.length >= 24)
      .slice(0, 20);
  }

  function noteId(text) {
    let hash = 2166136261;
    for (let index = 0; index < text.length; index += 1) {
      hash ^= text.charCodeAt(index);
      hash = Math.imul(hash, 16777619);
    }
    return (hash >>> 0).toString(16);
  }

  function buildCards(text, subject) {
    return splitNotes(text).map((sentence, index) => {
      const clue = sentence.length > 82 ? `${sentence.slice(0, 79).trimEnd()}…` : sentence;
      return {
        id: noteId(`${subject}:${sentence}`),
        question: `Recall the key point from your notes: ${clue}`,
        answer: sentence
      };
    }).filter(card => card.question && card.answer);
  }

  function findAnswer(question, notes) {
    const lines = splitNotes(notes);
    const stopWords = new Set(["about", "after", "again", "does", "from", "have", "into", "that", "their", "them", "then", "there", "these", "they", "this", "what", "when", "where", "which", "with", "your"]);
    const terms = [...new Set(question.toLocaleLowerCase().match(/[\p{L}\p{N}]{3,}/gu) || [])]
      .filter(term => !stopWords.has(term));
    if (!terms.length) return "";
    const matches = lines.map(line => ({
      line,
      score: terms.reduce((score, term) => score + Number(line.toLocaleLowerCase().includes(term)), 0)
    })).filter(item => item.score > 0).sort((left, right) => right.score - left.score);
    return matches.length
      ? matches.slice(0, 3).map(item => `“${item.line}”`).join("\n")
      : "";
  }

  function scheduleFor(cardId, rating, now = Date.now()) {
    const previous = spacedReview[cardId] || { intervalDays: 0, repetitions: 0 };
    let intervalDays;
    let repetitions;
    let dueAt;
    if (rating === "again") {
      intervalDays = 10 / 1440;
      repetitions = 0;
      dueAt = now + 10 * 60 * 1000;
    } else if (rating === "hard") {
      intervalDays = Math.max(1, (previous.intervalDays || 1) * 1.2);
      repetitions = previous.repetitions || 0;
      dueAt = now + intervalDays * 86400000;
    } else if (rating === "good") {
      intervalDays = previous.repetitions === 0 ? 1 : Math.max(3, (previous.intervalDays || 1) * 2);
      repetitions = (previous.repetitions || 0) + 1;
      dueAt = now + intervalDays * 86400000;
    } else if (rating === "easy") {
      intervalDays = Math.max(4, (previous.intervalDays || 1) * 2.5);
      repetitions = (previous.repetitions || 0) + 1;
      dueAt = now + intervalDays * 86400000;
    } else {
      throw new Error(`Unsupported review rating: ${rating}`);
    }
    const next = { intervalDays, repetitions, dueAt };
    spacedReview[cardId] = next;
    saveObject(scheduleKey, spacedReview);
    return next;
  }

  function createElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = escapeText(text);
    return element;
  }

  function renderModules() {
    moduleGrid.replaceChildren();
    modules.forEach(module => {
      const card = createElement("article", "learning-module");
      const label = createElement("p", "module-label", "READING MODULE");
      const title = createElement("h3", "", module.title);
      const summary = createElement("p", "learning-module-summary", module.summary);
      const lessons = createElement("div", "learning-module-lessons");
      module.lessons.forEach(lesson => lessons.append(createElement("p", "", lesson)));

      const activity = createElement("p", "learning-module-activity");
      const activityLabel = createElement("strong", "", "Try it: ");
      activity.append(activityLabel, document.createTextNode(module.activity));

      const check = createElement("details", "learning-module-check");
      const question = createElement("summary", "", module.question);
      const answer = createElement("p", "", module.answer);
      check.append(question, answer);

      const complete = createElement(
        "button",
        `button ${moduleProgress[module.id] ? "button-primary" : "button-secondary"} module-complete`,
        moduleProgress[module.id] ? "Completed ✓" : "Mark complete"
      );
      complete.type = "button";
      complete.setAttribute("aria-pressed", String(Boolean(moduleProgress[module.id])));
      complete.addEventListener("click", () => {
        if (moduleProgress[module.id]) delete moduleProgress[module.id];
        else moduleProgress[module.id] = true;
        saveObject(progressKey, moduleProgress);
        renderModules();
      });
      card.append(label, title, summary, lessons, activity, check, complete);
      moduleGrid.append(card);
    });
    const completed = modules.filter(module => moduleProgress[module.id]).length;
    completionSummary.textContent = `${completed} of ${modules.length} completed`;
  }

  function setAiStatus(message, available = aiAvailable) {
    aiAvailable = available;
    aiStatus.textContent = message;
    generateButton.disabled = !available;
    tutorButton.disabled = !available;
  }

  async function checkAiAvailability() {
    if (typeof window.fetch !== "function") {
      setAiStatus("AI is unavailable here. Offline flashcards and note search still work.", false);
      return;
    }
    try {
      const response = await window.fetch("/api/study", { headers: { Accept: "application/json" }, cache: "no-store" });
      if (!response.ok) {
        setAiStatus("AI is not connected on this hosting service. Offline study tools are ready.", false);
        return;
      }
      const result = await response.json();
      if (result.available === true) {
        setAiStatus("Cloudflare AI is ready. AI actions send the notes in this box to Cloudflare.", true);
      } else if (typeof result.message === "string" && result.message) {
        setAiStatus(result.message, false);
      } else {
        setAiStatus("Cloudflare AI needs to be enabled for this Pages project. Offline study tools are ready.", false);
      }
    } catch {
      setAiStatus("AI is not connected on this hosting service. Offline study tools are ready.", false);
    }
  }

  function showModule(module, saved = false) {
    const heading = createElement("h3", "", `${saved ? "Saved AI draft · " : "AI draft · "}${module.title}`);
    const summary = createElement("p", "module-summary", module.summary);
    const noteList = createElement("ul", "studio-module-notes");
    module.notes.forEach(note => noteList.append(createElement("li", "", note)));
    const useCards = createElement("button", "button button-secondary", "Practice this module");
    useCards.type = "button";
    useCards.addEventListener("click", () => {
      const cards = module.cards.map((card, index) => ({
        id: noteId(`${currentSubjectKey}:${module.title}:${index}:${card.question}`),
        question: card.question,
        answer: card.answer
      }));
      startReview(cards);
    });
    moduleOutput.replaceChildren(heading, summary, noteList, useCards);
    moduleOutput.hidden = false;
  }

  function subjectKey(subject) {
    return subject.toLocaleLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 120) || "personal-notes";
  }

  function open(options = {}) {
    currentSubject = typeof options.subject === "string" ? options.subject : "My notes";
    currentSubjectKey = typeof options.key === "string" ? options.key : subjectKey(currentSubject);
    contextLabel.textContent = options.context || "Bring notes from any course or topic";
    notesInput.value = Array.isArray(options.notes)
      ? options.notes.filter(note => typeof note === "string").join("\n")
      : typeof options.notes === "string" ? options.notes : "";
    notesInput.value = notesInput.value.slice(0, 12000);
    currentCards = [];
    currentCardIndex = 0;
    reviewSection.hidden = true;
    moduleOutput.hidden = true;
    tutorAnswer.textContent = "";
    flashcard.setAttribute("aria-pressed", "false");
    setAiStatus(aiAvailable ? aiStatus.textContent : "Checking AI availability…", aiAvailable);
    const saved = generatedModules[currentSubjectKey];
    if (saved && Array.isArray(saved.notes) && Array.isArray(saved.cards)) showModule(saved, true);
    if (!studioDialog.open) studioDialog.showModal();
    checkAiAvailability().then(() => {
      (options.focusGenerate && aiAvailable ? generateButton : notesInput).focus();
    });
  }

  function renderCard() {
    if (!currentCards.length) return;
    const card = currentCards[currentCardIndex];
    const flipped = flashcard.getAttribute("aria-pressed") === "true";
    flashcardLabel.textContent = flipped ? "ANSWER" : "QUESTION";
    flashcardText.textContent = flipped ? card.answer : card.question;
    flashcardHint.textContent = flipped ? "Tap to see the question again ↗" : "Tap to reveal the answer ↗";
    cardProgress.textContent = `Card ${currentCardIndex + 1} of ${currentCards.length}`;
    ratingButtons.forEach(button => { button.disabled = !flipped; });
    const schedule = spacedReview[card.id];
    if (!schedule) scheduleNote.textContent = "Not reviewed yet. Reveal the answer and choose how well you recalled it.";
    else if (schedule.dueAt <= Date.now()) scheduleNote.textContent = "This card is due for review now.";
    else {
      const hours = Math.ceil((schedule.dueAt - Date.now()) / 3600000);
      scheduleNote.textContent = `Next scheduled review: ${hours < 24 ? `in about ${hours} hour${hours === 1 ? "" : "s"}` : `in about ${Math.ceil(hours / 24)} day${Math.ceil(hours / 24) === 1 ? "" : "s"}`}.`;
    }
  }

  function startReview(cards) {
    if (!cards.length) {
      aiStatus.textContent = "Add a few complete sentences to your notes before making flashcards.";
      return;
    }
    currentCards = cards;
    currentCardIndex = 0;
    reviewSection.hidden = false;
    flashcard.setAttribute("aria-pressed", "false");
    renderCard();
    reviewSection.scrollIntoView?.({ block: "nearest" });
  }

  async function requestAi(payload) {
    const response = await window.fetch("/api/study", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload)
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || `AI request failed (${response.status}).`);
    return result;
  }

  function validModule(module) {
    return module && typeof module.title === "string" && typeof module.summary === "string" &&
      Array.isArray(module.notes) && module.notes.length >= 3 &&
      Array.isArray(module.cards) && module.cards.length >= 3 &&
      module.cards.every(card => typeof card.question === "string" && typeof card.answer === "string");
  }

  document.querySelector("#open-study-studio").addEventListener("click", () => open());
  document.querySelector("#make-local-cards").addEventListener("click", () => {
    const cards = buildCards(notesInput.value, currentSubjectKey);
    startReview(cards);
  });
  generateButton.addEventListener("click", async () => {
    const notes = notesInput.value.trim();
    if (notes.length < 30) {
      aiStatus.textContent = "Add at least 30 characters of notes before generating a module.";
      return;
    }
    generateButton.disabled = true;
    aiStatus.textContent = "Generating a draft from your notes…";
    try {
      const result = await requestAi({ mode: "module", subject: currentSubject, notes });
      if (!validModule(result.module)) throw new Error("The AI returned a module in an unexpected format.");
      generatedModules[currentSubjectKey] = result.module;
      saveObject(savedModulesKey, generatedModules);
      showModule(result.module);
      aiStatus.textContent = "AI draft created and saved in this browser. Verify its details before relying on it.";
    } catch (error) {
      aiStatus.textContent = error instanceof Error ? error.message : "The AI request failed. Please try again.";
    } finally {
      generateButton.disabled = !aiAvailable;
    }
  });
  flashcard.addEventListener("click", () => {
    flashcard.setAttribute("aria-pressed", String(flashcard.getAttribute("aria-pressed") !== "true"));
    renderCard();
  });
  ratingButtons.forEach(button => button.addEventListener("click", () => {
    if (flashcard.getAttribute("aria-pressed") !== "true" || !currentCards.length) return;
    const card = currentCards[currentCardIndex];
    scheduleFor(card.id, button.getAttribute("data-rating"));
    currentCardIndex = (currentCardIndex + 1) % currentCards.length;
    flashcard.setAttribute("aria-pressed", "false");
    renderCard();
  }));
  document.querySelector("#studio-tutor-form").addEventListener("submit", event => {
    event.preventDefault();
    const question = document.querySelector("#studio-question").value.trim();
    const answer = findAnswer(question, notesInput.value);
    tutorAnswer.textContent = answer
      ? `Relevant lines from your notes:\n${answer}`
      : "I could not find a matching point in these notes. Check another course source or try a different wording.";
  });
  tutorButton.addEventListener("click", async () => {
    const question = document.querySelector("#studio-question").value.trim();
    const notes = notesInput.value.trim();
    if (!question || notes.length < 30) {
      tutorAnswer.textContent = "Add notes and a question before asking the AI tutor.";
      return;
    }
    tutorButton.disabled = true;
    tutorAnswer.textContent = "Looking for an answer in your notes…";
    try {
      const result = await requestAi({ mode: "tutor", subject: currentSubject, notes, question });
      tutorAnswer.textContent = result.answer;
    } catch (error) {
      tutorAnswer.textContent = error instanceof Error ? error.message : "The AI tutor request failed.";
    } finally {
      tutorButton.disabled = !aiAvailable;
    }
  });

  renderModules();
  checkAiAvailability();
  window.KursoStudyStudio = {
    open,
    splitNotes,
    buildCards,
    findAnswer,
    scheduleFor,
    getModules: () => modules
  };
})();
