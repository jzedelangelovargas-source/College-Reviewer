# KursoKatha — College Study Reviewer

A responsive, accessible static reviewer for browsing representative Philippine college programs and TESDA qualifications. Search the catalog, filter by program or subject, and open available original notes and active-recall flashcards.

**Live website:** <https://kursokatha-reviewer.pages.dev/>

Search engines may take time to crawl and index the website. Searching the name in Chrome depends on the search engine's index and is not guaranteed immediately.

## Coverage and limitations

The catalog is an **illustrative starter catalog, not an official prospectus or an exhaustive list** of Philippine programs. Degree entries show representative subject areas across the listed academic years; course names, majors, sequencing, degree length, admission requirements, and required units vary by institution and may change. Bachelor-level outlines label major subjects, general-education/supporting subjects, and possible minor/elective examples. The minor examples are not universal or required minors; availability and formal minor requirements depend on each school. Professional degrees and academy-specific study tracks use program electives rather than assuming they have an undergraduate minor. TESDA qualifications are shown as competency-based modules, not as college semesters. Always confirm requirements with the relevant school, regulator, or TESDA.

Each subject card displays **Module 1** with a topic, readable introduction, and a further-reading reference; open its topic to read the module notes and practice question. Course-specific modules are provided for the catalog subjects, while electives are explicitly guided by the selected school's syllabus. The site no longer fills courses with generic question templates whose answers merely say to consult class materials. Quiz cards are generated only from the topic's authored answers and substantive review notes. This catalog spans many programs and institutions, so it cannot honestly be called 100% accurate to every school's current syllabus. Module references are starting points, may cover a different jurisdiction, and are not citations for every sentence. Check exact coverage, terminology, and local standards with the instructor's current syllabus. After revealing an answer, learners can mark it as known or needing review; topic scores and overall progress are saved locally in the browser. This is self-assessed practice, not an automatically graded exam.

The **learning hub** contains ten original, general study-skills reading modules for all learners; they are not ten course-specific lessons for every program. The **Study Studio** makes flashcards directly from text a learner provides, supports active recall and local spaced-review scheduling, and can find matching lines in those notes without an AI service. Notes are not saved by the app. Spaced-review schedules, study-module completion, and AI drafts are kept in that browser's local storage. Quiz progress is also saved locally and can sync across devices after the optional Supabase account service is configured.

AI generation is **paused** while protecting the remaining Workers AI free allowance. The Pages API reports AI unavailable and rejects every generation request before calling a model, even if a binding is present; the Wrangler config no longer attaches the AI binding. Offline flashcards, note search, and the ten reading modules remain available. This intentionally leaves all remaining AI allowance unused rather than risking a paid request: Cloudflare usage depends on prompt/output size, and the existing in-memory per-IP throttle is not a reliable quota or billing cap. Do not turn AI back on until the usage allowance resets or a separate, verified Cloudflare spending limit is in place. When deliberately re-enabling, configure the Workers AI `AI` binding under the Pages project's **Settings → Bindings → Add → Workers AI** and review current pricing and account limits first. Never put an API token in browser code. If re-enabled, AI output remains unverified and is not guaranteed original or rights-cleared; check it against course sources. AI actions send the learner's notes to Cloudflare, so do not submit personal, confidential, or restricted material.

### Optional accounts and synced progress

Quiz answers are graded locally and remain in the current browser. Account sign-up and cross-device syncing are inactive for now; the disabled account control is informational only. No password or account data is collected. To enable email sign-up and sync quiz progress in a future release:

1. Create a Supabase project and run [`supabase/schema.sql`](supabase/schema.sql) in its SQL Editor. The table uses row-level security so signed-in users can access only their own progress.
2. In the Cloudflare Pages project's Production environment variables, set `SUPABASE_URL` to the project URL and `SUPABASE_ANON_KEY` to its public publishable/anon key. These are used to initialize the browser auth client; never use a `service_role` key.
3. In Supabase Authentication settings, configure the site's production URL and email redirect/confirmation settings. Then redeploy the Pages project.

When enabled in a future release, the website will use Supabase Auth for passwords and session handling and store only quiz-progress records in Supabase, not pasted notes. Until then, progress remains browser-local.

## Run locally

No framework, package installation, or build step is required. Open `index.html` in a modern browser, or serve the project directory with any static file server. For example, if Python is installed:

```sh
python -m http.server 8000
```

Then visit <http://localhost:8000>.

Run the catalog, study-studio, and AI endpoint checks with Node.js:

```sh
node --test tests/*.test.js
```

## Add a program or reviewer

- Program and curriculum-outline data lives in `catalog-data.js`. Add each distinct program once and preserve separate majors or credentials when they are meaningful variants.
- Degree entries use one subject array per semester; entries may be subject-name strings or `{ name, subjectType }` objects such as `Major`, `General education / supporting`, or `Minor / elective example`. The optional `years` setting supports plans longer than four years. An `extension` entry adds missing semester subjects to one of the six programs that already has sample reviewer topics. Empty semester arrays are intentional when the existing sample already covers that term.
- For bachelor's entries, the catalog adds representative general-education/supporting subjects and examples of possible minor/elective subjects in each semester. These are illustrative options, not a claim that a school requires a minor or offers the same courses. Professional and institution-specific degree tracks receive program-elective examples instead; TESDA qualifications remain competency-based.
- Degree and TESDA term structure is retained in catalog data for organizing the curricula but is not shown in the reviewer interface.
- Each generated subject has a stable `catalogRef` in the form `program-id:term-id:subject-number`. Add original reviewer topics to that program's `reviewers` map under the matching reference, using the topic shape already present in `script.js`: `title`, `summary`, `notes`, and question/answer `cards`. Add `sources` only for materials that genuinely inform the topic, and specify geographic or curricular limits.
- `script.js` supplies a Module 1 for each subject. It does not pad subjects with generic question templates; quiz decks use topic-authored answers and substantive review notes only. Repeated cards may test the same note from different question stems and are not independent factual coverage. Modules are not institution-specific course content; do not describe them as a complete or 100%-verified syllabus.
- Check program names and IDs for duplicates. Do not present a school's curriculum as universal; include its institution and source when publishing institution-specific material.

## Copyright and attribution

KursoKatha's reviewer notes and flashcards are original unless a source is explicitly credited. Do not copy textbooks, lecture slides, question banks, or other protected material into the catalog without permission or a license that allows reuse. Give attribution and follow the source's license where required; attribution alone does not grant permission. Third-party names and materials remain the property of their respective owners. The in-app notice is a transparency statement, not a grant of rights or a substitute for checking permissions.

## Use the reviewer

- Use the **Dark mode / Light mode** button in the header to change the appearance. Your choice is saved in this browser; before a choice is saved, the site follows the device color-scheme preference.
- Search for a program, subject, topic, or keyword in a study note. Use `/` to focus the search field.
- Narrow the catalog by program, search term, or subject. Year, semester, and competency-module labels are not displayed in the reviewer.
- The catalog loads subjects in batches; use **Load more subjects** to reveal additional results. Topic prompts are created only when their subject cards are displayed.
- Select an available topic to read its quick-review notes and flashcards. Use `Escape` to close the topic dialog.
- Each subject card shows its Module 1 topic and introduction. Open it for readable notes and the linked further-reading reference. Read the reference's stated scope; confirm exact course content, local regulations, and professional requirements with your instructor or applicable authority.
- Flip a card to reveal its answer, then choose **I knew it** or **Need to review** to rate it. Re-rating a card updates its result; progress is stored only in this browser and is not synchronized between devices.
- Read the ten general study-skills modules in the learning hub. Mark them complete to track progress in this browser.
- AI controls are temporarily disabled to protect the remaining usage allowance. Paste your own notes to create offline flashcards, reveal answers, and schedule them with **Again / Hard / Good / Easy**. Offline note lookup searches only the text you pasted.
- Previously generated AI drafts, if any, remain saved only in this browser. Offline cards and note lookup do not use Workers AI.

The interface and catalog are bilingual-friendly, with English study content and Filipino prompts. Review notes are short study aids, not a substitute for course materials or professional guidance.
