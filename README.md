# Aral — College Study Reviewer

A responsive, accessible static reviewer for browsing representative Philippine college programs and TESDA qualifications. Search the catalog, filter by program or subject, and open available original notes and active-recall flashcards.

**Live website:** <https://jzedelangelovargas-source.github.io/College-Reviewer/>

Search engines may take time to crawl and index the website. Searching the name in Chrome depends on the search engine's index and is not guaranteed immediately.

## Coverage and limitations

The catalog is an **illustrative starter catalog, not an official prospectus or an exhaustive list** of Philippine programs. Degree entries show representative subject areas across the listed academic years; course names, majors, sequencing, degree length, admission requirements, and required units vary by institution and may change. Bachelor-level outlines label major subjects, general-education/supporting subjects, and possible minor/elective examples. The minor examples are not universal or required minors; availability and formal minor requirements depend on each school. Professional degrees and academy-specific study tracks use program electives rather than assuming they have an undergraduate minor. TESDA qualifications are shown as competency-based modules, not as college semesters. Always confirm requirements with the relevant school, regulator, or TESDA.

Every listed subject has 20 topic buttons, and each topic opens an exactly 20-card question-and-answer deck. Original reviewer cards are preserved at the beginning of a deck and the remaining questions are generated from that topic's review notes. For generated subject outlines, the topics are guided self-check frameworks, not invented subject facts or official answer keys; students should use instructor lessons and verify responses against course materials.

## Run locally

No framework, package installation, or build step is required. Open `index.html` in a modern browser, or serve the project directory with any static file server. For example, if Python is installed:

```sh
python -m http.server 8000
```

Then visit <http://localhost:8000>.

Run the catalog data checks with Node.js:

```sh
node --test tests/catalog.test.js
```

## Add a program or reviewer

- Program and curriculum-outline data lives in `catalog-data.js`. Add each distinct program once and preserve separate majors or credentials when they are meaningful variants.
- Degree entries use one subject array per semester; entries may be subject-name strings or `{ name, subjectType }` objects such as `Major`, `General education / supporting`, or `Minor / elective example`. The optional `years` setting supports plans longer than four years. An `extension` entry adds missing semester subjects to one of the six programs that already has sample reviewer topics. Empty semester arrays are intentional when the existing sample already covers that term.
- For bachelor's entries, the catalog adds representative general-education/supporting subjects and examples of possible minor/elective subjects in each semester. These are illustrative options, not a claim that a school requires a minor or offers the same courses. Professional and institution-specific degree tracks receive program-elective examples instead; TESDA qualifications remain competency-based.
- Degree and TESDA term structure is retained in catalog data for organizing the curricula but is not shown in the reviewer interface.
- Each generated subject has a stable `catalogRef` in the form `program-id:term-id:subject-number`. Add original reviewer topics to that program's `reviewers` map under the matching reference, using the topic shape already present in `script.js`: `title`, `summary`, `notes`, and question/answer `cards`.
- `script.js` fills each subject to 20 guided study topics and each topic to exactly 20 quiz cards at runtime. Generated questions are paired with points from that topic's notes; for outline-only courses, the notes are answer frameworks pending subject-specific course content, not official course answers.
- Check program names and IDs for duplicates. Do not present a school's curriculum as universal; include its institution and source when publishing institution-specific material.

## Copyright and attribution

Aral's reviewer notes and flashcards are original unless a source is explicitly credited. Do not copy textbooks, lecture slides, question banks, or other protected material into the catalog without permission or a license that allows reuse. Give attribution and follow the source's license where required; attribution alone does not grant permission. Third-party names and materials remain the property of their respective owners. The in-app notice is a transparency statement, not a grant of rights or a substitute for checking permissions.

## Use the reviewer

- Use the **Dark mode / Light mode** button in the header to change the appearance. Your choice is saved in this browser; before a choice is saved, the site follows the device color-scheme preference.
- Search for a program, subject, topic, or keyword in a study note. Use `/` to focus the search field.
- Narrow the catalog by program, search term, or subject. Year, semester, and competency-module labels are not displayed in the reviewer.
- The catalog loads subjects in batches; use **Load more subjects** to reveal additional results. Topic prompts are created only when their subject cards are displayed.
- Select an available topic to read its quick-review notes and flashcards. Use `Escape` to close the topic dialog.

The interface and catalog are bilingual-friendly, with English study content and Filipino prompts. Review notes are short study aids, not a substitute for course materials or professional guidance.
