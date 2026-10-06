const sampleCatalog = [
  {
    id: "bsit", name: "BS Information Technology", shortName: "BSIT", color: "mint",
    subjects: [
      { code: "IT 101", name: "Introduction to Computing", year: 1, semester: 1, description: "A friendly foundation in computers, information, and how digital systems work.", topics: [
        { title: "Computer systems", summary: "Understand the parts that work together to make a computer useful.", notes: ["Hardware refers to physical parts; software is the set of instructions that runs on them.", "The input-process-output cycle describes how a system receives data, transforms it, and returns information.", "People, procedures, and data are also essential parts of an information system."], cards: [["What is the input-process-output cycle?", "A model in which a system accepts input, processes it into useful information, and produces output."], ["How do hardware and software differ?", "Hardware is the physical equipment; software is the programs and instructions that tell it what to do."]] },
        { title: "Number systems", summary: "See how computers represent information using different number bases.", notes: ["Decimal uses ten symbols (0–9); binary uses two (0 and 1).", "Each binary position represents a power of two, starting with 2⁰ at the right.", "A bit is one binary digit; a group of eight bits is one byte."], cards: [["What digits are used in binary?", "Only 0 and 1."], ["How many bits are in one byte?", "Eight bits."]] }
      ] },
      { code: "IT 103", name: "Programming Fundamentals", year: 1, semester: 1, description: "Build problem-solving habits with the building blocks of code.", topics: [
        { title: "Variables & data types", summary: "Learn how programs name, store, and work with information.", notes: ["A variable is a named place to store a value that a program can use.", "Common types include integers, decimal numbers, strings, and Boolean values.", "Choose a type that fits the value and use a clear, meaningful variable name."], cards: [["What does a variable do?", "It gives a name to a value a program can store and use."], ["What are the two Boolean values?", "True and false."]] },
        { title: "Selection & loops", summary: "Control which instructions run and how often they repeat.", notes: ["Selection (such as if/else) chooses a path based on a condition.", "A loop repeats a block of instructions while a condition or count allows it.", "Check loop conditions carefully to avoid an infinite loop."], cards: [["When is an if/else statement useful?", "When a program must choose between actions based on a condition."], ["What is an infinite loop?", "A loop that never reaches its stopping condition."]] }
      ] },
      { code: "IT 202", name: "Database Management", year: 2, semester: 1, description: "Organize information and ask useful questions of a database.", topics: [
        { title: "Relational database basics", summary: "Explore tables, keys, and relationships in a relational database.", notes: ["A table stores related records in rows and attributes in columns.", "A primary key uniquely identifies each row in a table.", "A foreign key refers to a key in another table and helps represent a relationship."], cards: [["What makes a primary key useful?", "It uniquely identifies each record in a table."], ["What does a foreign key reference?", "A key, commonly the primary key, in another table."]] },
        { title: "SQL queries", summary: "Use core SQL commands to read and change structured data.", notes: ["SELECT retrieves columns; FROM specifies the table to query.", "WHERE filters rows, while ORDER BY sorts the returned results.", "Use INSERT, UPDATE, and DELETE carefully when changing stored records."], cards: [["Which SQL clause filters rows?", "WHERE."], ["What does SELECT do?", "It specifies the columns or expressions to return from a query."]] }
      ] }
    ]
  },
  {
    id: "bscs", name: "BS Computer Science", shortName: "BSCS", color: "lavender",
    subjects: [
      { code: "CS 101", name: "Discrete Structures", year: 1, semester: 1, description: "Mathematical ideas for precise reasoning about computing.", topics: [
        { title: "Propositional logic", summary: "Represent statements and reason about when they are true or false.", notes: ["A proposition is a declarative statement that is either true or false.", "AND (∧) is true only when both statements are true; OR (∨) is true when at least one is true.", "A conditional p → q is false only when p is true and q is false."], cards: [["When is p AND q true?", "Only when both p and q are true."], ["When is p → q false?", "When p is true and q is false."]] },
        { title: "Sets & functions", summary: "Describe collections and mappings that appear throughout computer science.", notes: ["A set is a collection of distinct elements; order does not matter.", "A function maps each input in its domain to exactly one output.", "The union combines elements in either set; the intersection keeps elements shared by both."], cards: [["What is a function?", "A mapping that assigns each input in its domain exactly one output."], ["What does A ∩ B contain?", "Elements that belong to both A and B."]] }
      ] },
      { code: "CS 103", name: "Data Structures & Algorithms", year: 1, semester: 2, description: "Choose useful ways to organize data and solve computational problems.", topics: [
        { title: "Arrays & linked lists", summary: "Compare two common ways to store sequences of values.", notes: ["An array stores indexed elements together, allowing direct access by position.", "A linked list stores nodes connected by references; each node points to another.", "Arrays are often convenient for indexed access; linked lists can make local insertions easier."], cards: [["How do you directly access an array element?", "By using its index."], ["What connects nodes in a linked list?", "References or links from one node to another."]] },
        { title: "Big-O basics", summary: "Describe how an algorithm's resource use grows with input size.", notes: ["Big-O describes an upper-bound growth rate, rather than exact running time.", "O(1) is constant; O(n) grows linearly with input size.", "When analysing growth, focus on the dominant term for large inputs."], cards: [["What does O(n) describe?", "Linear growth: the work scales roughly in proportion to input size."], ["Why ignore lower-order terms in Big-O?", "For large inputs, the dominant growth term matters most."]] }
      ] },
      { code: "CS 202", name: "Operating Systems", year: 2, semester: 1, description: "How system software coordinates programs and computer resources.", topics: [
        { title: "Processes & threads", summary: "Understand the units of work an operating system manages.", notes: ["A process is a running program with its own managed resources.", "A thread is a path of execution within a process; threads may share process resources.", "Context switching lets the operating system move the CPU between tasks."], cards: [["What is a process?", "A running program and the resources managed for it."], ["How do threads in one process commonly differ from separate processes?", "Threads may share the resources of their process."]] },
        { title: "Memory management", summary: "Review how an operating system allocates and protects memory.", notes: ["The operating system tracks memory use and assigns space to processes.", "Virtual memory gives each process a logical address space that can be mapped to physical memory.", "Paging divides memory into fixed-size pages and frames."], cards: [["What does virtual memory provide?", "A logical address space that the operating system maps to physical memory."], ["What is paging?", "A memory-management approach that divides memory into fixed-size pages and frames."]] }
      ] }
    ]
  },
  {
    id: "bsba", name: "BS Business Administration", shortName: "BSBA", color: "peach",
    subjects: [
      { code: "BA 101", name: "Principles of Management", year: 1, semester: 1, description: "Core ideas for coordinating people and resources toward shared goals.", topics: [
        { title: "The management functions", summary: "A practical framework for the work managers do.", notes: ["Planning sets goals and chooses actions to reach them.", "Organizing arranges work and resources; leading guides and motivates people.", "Controlling checks results against plans and supports corrective action."], cards: [["What are the four common management functions?", "Planning, organizing, leading, and controlling."], ["What is the purpose of controlling?", "To compare results with plans and take corrective action when needed."]] },
        { title: "Leadership styles", summary: "Consider how leaders guide teams in different situations.", notes: ["Leadership is the process of influencing and supporting people toward shared goals.", "A directive style gives clear instructions; a participative style invites input.", "Effective leaders adapt their approach to the task, team, and context."], cards: [["What does a participative leader encourage?", "Team input and involvement in decisions."], ["Why adapt a leadership style?", "Different tasks, teams, and situations call for different kinds of guidance."]] }
      ] },
      { code: "BA 104", name: "Business Communication", year: 1, semester: 2, description: "Communicate ideas clearly and professionally in the workplace.", topics: [
        { title: "The communication process", summary: "Trace how a message moves between people and where meaning can get lost.", notes: ["A sender encodes a message and shares it through a channel with a receiver.", "The receiver interprets the message and may respond with feedback.", "Noise—anything that interferes—can affect communication at any stage."], cards: [["What is feedback in communication?", "The receiver's response that helps the sender know how a message was understood."], ["What does noise mean in a communication model?", "Anything that interferes with sending, receiving, or understanding a message."]] },
        { title: "Professional email", summary: "Write purposeful messages that are easy for a colleague to act on.", notes: ["Use a specific subject line that tells the reader what the message concerns.", "State the purpose early and organize details for quick scanning.", "Choose a respectful tone, proofread, and make the requested action clear."], cards: [["What makes an email subject line effective?", "It is specific and communicates the main purpose of the message."], ["Where should the main purpose appear?", "Near the beginning, so the reader can understand the message quickly."]] }
      ] },
      { code: "BA 201", name: "Marketing Principles", year: 2, semester: 1, description: "Understand customers, value, and the choices behind marketing.", topics: [
        { title: "The marketing mix", summary: "Review the classic four decisions that shape a marketing offer.", notes: ["Product concerns what is offered to meet a customer need.", "Price is what customers give up; place covers access and distribution.", "Promotion communicates the value of the offer to its intended audience."], cards: [["What are the 4 Ps of the marketing mix?", "Product, price, place, and promotion."], ["Which P covers distribution and access?", "Place."]] },
        { title: "Market segmentation", summary: "Group customers to better understand and serve their needs.", notes: ["Segmentation divides a broad market into groups with shared characteristics or needs.", "Common bases include geographic, demographic, psychographic, and behavioral factors.", "A target market is the segment or segments an organization chooses to serve."], cards: [["What is market segmentation?", "Dividing a broad market into groups with shared characteristics or needs."], ["What is a target market?", "The customer segment or segments an organization chooses to serve."]] }
      ] }
    ]
  },
  {
    id: "bsa", name: "BS Accountancy", shortName: "BSA", color: "gold",
    subjects: [
      { code: "ACC 101", name: "Fundamentals of Accounting", year: 1, semester: 1, description: "The language of recording and communicating financial activity.", topics: [
        { title: "The accounting equation", summary: "See how a business's resources relate to its claims and obligations.", notes: ["Assets = Liabilities + Owner's Equity is the foundational accounting equation.", "Assets are resources controlled by the business; liabilities are obligations it owes.", "Every transaction keeps the equation in balance, though it may change multiple accounts."], cards: [["State the accounting equation.", "Assets = Liabilities + Owner's Equity."], ["What is a liability?", "An obligation the business owes to another party."]] },
        { title: "Debits & credits", summary: "Learn the paired recording system behind double-entry accounting.", notes: ["Each transaction is recorded with at least one debit and one credit of equal total value.", "Debit means the left side of an account; credit means the right side.", "Debits increase assets and expenses; credits increase liabilities, equity, and revenue."], cards: [["What must be true of total debits and credits in an entry?", "They must be equal."], ["Which side of an account is a credit?", "The right side."]] }
      ] },
      { code: "ACC 104", name: "Financial Accounting", year: 1, semester: 2, description: "Prepare and interpret core financial statements.", topics: [
        { title: "The income statement", summary: "Summarize revenue and expenses over an accounting period.", notes: ["The income statement reports revenues and expenses for a period.", "Net income is generally revenue minus expenses when revenue exceeds expenses.", "It helps readers evaluate operating results, but is considered alongside other statements."], cards: [["What period does an income statement cover?", "A defined accounting period."], ["How is net income commonly calculated?", "Revenue minus expenses, when revenue exceeds expenses."]] },
        { title: "Accrual vs. cash basis", summary: "Compare when transactions are recognized under two accounting approaches.", notes: ["Cash-basis accounting records transactions when cash is received or paid.", "Accrual accounting generally recognizes revenue when earned and expenses when incurred.", "Accrual accounting can show activity that has not yet resulted in a cash payment or receipt."], cards: [["When does cash-basis accounting record an expense?", "When cash is paid."], ["When does accrual accounting generally recognize revenue?", "When it is earned."]] }
      ] },
      { code: "ACC 201", name: "Cost Accounting", year: 2, semester: 1, description: "Use cost information to support planning and business decisions.", topics: [
        { title: "Fixed & variable costs", summary: "Classify how costs respond to changes in activity.", notes: ["A fixed cost stays constant in total within a relevant range of activity.", "A variable cost changes in total as the activity level changes.", "Per-unit fixed cost usually falls as volume rises; per-unit variable cost is often stable."], cards: [["How does a variable cost behave in total?", "It changes as the activity level changes."], ["What happens to fixed cost per unit as volume rises?", "It generally falls within the relevant range."]] },
        { title: "Break-even analysis", summary: "Find the sales level where total revenue and total costs are equal.", notes: ["At break-even, operating income is zero because total revenue equals total costs.", "Contribution margin per unit = selling price per unit − variable cost per unit.", "Break-even units = fixed costs ÷ contribution margin per unit."], cards: [["What is the contribution margin per unit?", "Selling price per unit minus variable cost per unit."], ["How do you calculate break-even units?", "Fixed costs divided by contribution margin per unit."]] }
      ] }
    ]
  },
  {
    id: "educ", name: "Bachelor of Education", shortName: "Education", color: "lavender",
    subjects: [
      { code: "ED 101", name: "Foundations of Education", year: 1, semester: 1, description: "Explore the purposes, contexts, and foundations of teaching and learning.", topics: [
        { title: "Philosophies of education", summary: "Compare enduring ideas that influence educational aims and practice.", notes: ["Progressivism emphasizes learning through experience, inquiry, and learner interests.", "Essentialism emphasizes a shared core of knowledge and disciplined study.", "Educational philosophies shape choices about curriculum, teaching, and the role of learners."], cards: [["Which philosophy emphasizes learning through experience?", "Progressivism."], ["What does essentialism emphasize?", "A shared core of knowledge and disciplined study."]] },
        { title: "Learner-centered teaching", summary: "Plan learning around students' needs, participation, and growth.", notes: ["Learner-centered approaches actively involve students in making meaning.", "Teachers facilitate, guide, and provide feedback rather than only deliver information.", "Clear objectives and thoughtful assessment help keep activities focused on learning."], cards: [["What role does a teacher take in learner-centered learning?", "A facilitator and guide who supports learning and gives feedback."], ["What helps keep activities focused?", "Clear learning objectives and aligned assessment."]] }
      ] },
      { code: "ED 104", name: "Assessment of Learning", year: 1, semester: 2, description: "Gather evidence of learning and use it to guide next steps.", topics: [
        { title: "Formative & summative assessment", summary: "Distinguish checking progress during learning from evaluating achievement.", notes: ["Formative assessment provides feedback during instruction so teaching and learning can adjust.", "Summative assessment evaluates learning at the end of a unit, course, or period.", "Both can support learning when their purpose and criteria are clear."], cards: [["When is formative assessment used?", "During learning, to provide feedback and guide next steps."], ["What does summative assessment evaluate?", "Learning at the end of a unit, course, or period."]] },
        { title: "Writing learning objectives", summary: "Make intended learning clear, observable, and assessable.", notes: ["An objective describes what learners should know or be able to do.", "Use observable action verbs such as compare, solve, or explain.", "Align activities and assessment with the objective."], cards: [["What does a learning objective describe?", "What learners should know or be able to do."], ["Why use observable verbs?", "They make the intended learning easier to assess."]] }
      ] },
      { code: "ED 201", name: "Educational Psychology", year: 2, semester: 1, description: "Connect perspectives on development and learning to classroom practice.", topics: [
        { title: "Learning & reinforcement", summary: "Consider how consequences can influence the likelihood of a behavior.", notes: ["Reinforcement increases the likelihood that a behavior will occur again.", "Positive reinforcement adds a desirable consequence; negative reinforcement removes an aversive one.", "Negative reinforcement is not punishment—punishment aims to reduce a behavior."], cards: [["What does reinforcement do to a behavior?", "It increases the likelihood that the behavior will happen again."], ["Is negative reinforcement the same as punishment?", "No. Negative reinforcement increases behavior by removing an aversive condition."]] },
        { title: "Stages of cognitive development", summary: "A quick look at Piaget's framework for children's ways of thinking.", notes: ["Piaget proposed sensorimotor, preoperational, concrete operational, and formal operational stages.", "The sensorimotor stage centers on learning through senses and actions.", "The framework describes broad developmental patterns, not a fixed timetable for every child."], cards: [["Name the four stages in Piaget's framework.", "Sensorimotor, preoperational, concrete operational, and formal operational."], ["What is an important limitation of stage models?", "They describe broad patterns and should not be treated as a fixed timetable for every learner."]] }
      ] }
    ]
  },
  {
    id: "nursing", name: "BS Nursing", shortName: "Nursing", color: "mint",
    subjects: [
      { code: "NCM 101", name: "Fundamentals of Nursing", year: 1, semester: 1, description: "Foundational concepts for safe, respectful, patient-centered nursing care.", topics: [
        { title: "The nursing process", summary: "A structured cycle for planning and evaluating individualized care.", notes: ["The nursing process is commonly described as assessment, diagnosis, planning, implementation, and evaluation (ADPIE).", "Assessment gathers and organizes information about a person's health.", "Evaluation checks responses to care and informs updates to the plan."], cards: [["What does ADPIE stand for?", "Assessment, diagnosis, planning, implementation, and evaluation."], ["What happens during evaluation?", "The nurse checks responses to care and whether goals are being met."]] },
        { title: "Infection prevention", summary: "Review practical actions that reduce the spread of infection in care settings.", notes: ["Hand hygiene is a key measure for reducing transmission of microorganisms.", "Standard precautions apply to all patients, based on the possibility of exposure to infectious material.", "Use personal protective equipment appropriate to the anticipated exposure and follow facility guidance."], cards: [["Who do standard precautions apply to?", "All patients, according to the risk of exposure to infectious material."], ["When should PPE be selected?", "Based on the anticipated exposure and applicable facility guidance."]] }
      ] },
      { code: "ANAT 101", name: "Anatomy & Physiology", year: 1, semester: 1, description: "Study the structures of the human body and how they work together.", topics: [
        { title: "Cell structure & function", summary: "Explore the cell as a basic structural and functional unit of the body.", notes: ["The cell membrane regulates movement of substances into and out of the cell.", "The nucleus contains most of a cell's genetic material and helps direct cell activity.", "Mitochondria are involved in producing much of the usable energy for cellular processes."], cards: [["What does the cell membrane do?", "It regulates the movement of substances into and out of the cell."], ["Which organelle contains most cellular genetic material?", "The nucleus."]] },
        { title: "Homeostasis", summary: "Understand how body systems help maintain a relatively stable internal environment.", notes: ["Homeostasis is the regulation of internal conditions within a range that supports normal function.", "Negative feedback responses generally counter a change and move a condition toward its set point.", "The body coordinates multiple systems to maintain conditions such as temperature and blood glucose."], cards: [["What does negative feedback generally do?", "It counteracts a change and moves a condition toward its set point."], ["What is homeostasis?", "The regulation of internal conditions within a range that supports normal function."]] }
      ] },
      { code: "NCM 201", name: "Health Assessment", year: 2, semester: 1, description: "Gather patient information through observation, interview, and examination.", topics: [
        { title: "Vital signs", summary: "Review key measurements used to describe basic physiological status.", notes: ["Common vital signs include temperature, pulse, respiration, and blood pressure; oxygen saturation may also be monitored.", "Interpret findings in context, including the person's baseline, age, symptoms, and clinical situation.", "Follow training and clinical protocols for technique, documentation, and escalation."], cards: [["Name four commonly measured vital signs.", "Temperature, pulse, respiration, and blood pressure."], ["Why interpret vital signs in context?", "Meaning depends on baseline, age, symptoms, and the clinical situation."]] },
        { title: "Therapeutic communication", summary: "Use respectful listening and clear language to support a patient relationship.", notes: ["Active listening includes attention, empathy, and checking understanding.", "Open-ended questions invite a fuller response; closed questions can clarify specific details.", "Avoid judgmental language and protect privacy according to applicable policies."], cards: [["What do open-ended questions encourage?", "A fuller response in the patient's own words."], ["Name one component of active listening.", "Attention, empathy, or checking understanding."]] }
      ] }
    ]
  }
];

function buildProgramSubjects(program) {
  return program.terms.flatMap((term, termIndex) => {
    const entries = term.subjects.map(entry =>
      typeof entry === "string" ? { name: entry } : { ...entry }
    );
    const isBachelor = program.credential === "Bachelor's degree";
    const isAcademicProgram = program.credential !== "TESDA qualification";
    if (isAcademicProgram) {
      const present = new Set(entries.map(entry => searchableText(entry.name)));
      if (isBachelor) {
        const generalEducation = generalEducationSubjects[termIndex % generalEducationSubjects.length];
        if (!present.has(searchableText(generalEducation))) {
          entries.push({ name: generalEducation, subjectType: generalEducationType });
        }
      }
      const electives = minorSubjectExamples[program.category] || minorSubjectExamples["Social Sciences & Humanities"];
      const offset = termIndex % electives.length;
      const minor = [...electives.slice(offset), ...electives.slice(0, offset)]
        .find(name => !present.has(searchableText(name)));
      if (minor) entries.push({
        name: minor,
        subjectType: isBachelor ? minorElectiveType : "Program elective example"
      });
    }

    return entries.map((entry, index) => {
      const catalogRef = `${program.id}:${term.id}:${index + 1}`;
      const topics = program.reviewers?.[catalogRef] || [];
      const subjectType = entry.subjectType || (
        generalEducationNames.has(searchableText(entry.name))
          ? generalEducationType
          : program.credential === "TESDA qualification"
            ? "TESDA competency"
            : "Major"
      );
      return {
        code: catalogRef,
        catalogRef,
        name: entry.name,
        subjectType,
        description: `Representative ${program.category.toLowerCase()} subject area. Check your institution's current curriculum for official course titles and term placement.`,
        year: term.year,
        semester: term.semester,
        termId: term.id,
        termLabel: term.label,
        topics,
        outlineOnly: topics.length === 0
      };
    });
  });
}

const programPlans = new Map(window.programCatalog.map(program => [program.id, program]));
const sampleProgramIds = new Set(sampleCatalog.map(program => program.id));
const createCatalog = () => [
  ...sampleCatalog.map(program => {
    const plan = programPlans.get(program.id);
    if (!plan) return program;
    return {
      ...program,
      category: plan.category,
      credential: plan.credential,
      duration: plan.duration,
      subjects: [
        ...program.subjects.map(subject => ({
          ...subject,
          subjectType: subject.subjectType || (
            generalEducationNames.has(searchableText(subject.name))
              ? generalEducationType
              : "Major"
          )
        })),
        ...buildProgramSubjects(plan)
      ]
    };
  }),
  ...window.programCatalog
    .filter(program => !sampleProgramIds.has(program.id))
    .map(program => ({ ...program, subjects: buildProgramSubjects(program) }))
];

const searchInput = document.querySelector("#search-input");
const programFilter = document.querySelector("#program-filter");
const themeToggle = document.querySelector("#theme-toggle");
const themeColorMeta = document.querySelector('meta[name="theme-color"]');
const subjectNav = document.querySelector("#subject-nav");
const subjectCount = document.querySelector("#subject-count");
const subjectGrid = document.querySelector("#subject-grid");
const loadMoreSubjects = document.querySelector("#load-more-subjects");
const studyProgressSummary = document.querySelector("#study-progress-summary");
const studyProgressBar = document.querySelector("#study-progress-bar");
const resultCount = document.querySelector("#result-count");
const resultsTitle = document.querySelector("#results-title");
const resultsEyebrow = document.querySelector("#results-eyebrow");
const activeFilters = document.querySelector("#active-filters");
const emptyState = document.querySelector("#empty-state");
const dialog = document.querySelector("#study-dialog");
const flashcard = document.querySelector("#flashcard");
const flashcardLabel = document.querySelector("#flashcard-label");
const flashcardText = document.querySelector("#flashcard-text");
const flashcardHint = document.querySelector("#flashcard-hint");
const cardProgress = document.querySelector("#card-progress");
const previousCard = document.querySelector("#previous-card");
const nextCard = document.querySelector("#next-card");
const quizScore = document.querySelector("#quiz-score");
const markReview = document.querySelector("#mark-review");
const markKnown = document.querySelector("#mark-known");

let selectedSubject = "all";
let currentCards = [];
let currentCardIndex = 0;
let activeTopicButton = null;
let activeProgressKey = "";
let visibleSubjectLimit = 30;
const subjectPageSize = 30;

function applyTheme(theme, persist = false) {
  const isDark = theme === "dark";
  document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} mode`);
  themeToggle.querySelector(".theme-toggle-icon").textContent = isDark ? "☀" : "☾";
  themeToggle.querySelector(".theme-toggle-label").textContent = `${isDark ? "Light" : "Dark"} mode`;
  themeColorMeta.setAttribute("content", isDark ? "#121916" : "#f5f7f2");
  if (persist) window.localStorage.setItem("kursokatha-theme", isDark ? "dark" : "light");
}

function preferredTheme() {
  const savedTheme = window.localStorage.getItem("kursokatha-theme");
  if (savedTheme === "dark" || savedTheme === "light") return savedTheme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(nextTheme, true);
});
applyTheme(preferredTheme());

const generalEducationSubjects = [
  "Purposive Communication",
  "Mathematics in the Modern World",
  "Readings in Philippine History",
  "Science, Technology, and Society",
  "Ethics",
  "The Contemporary World",
  "Rizal's Life and Works",
  "Art Appreciation"
];
const generalEducationNames = new Set(generalEducationSubjects.map(name => searchableText(name)));
const minorSubjectExamples = {
  "Agriculture & Environment": [
    "Introduction to Agribusiness", "Environmental Policy", "Community Development",
    "Rural Sociology", "Natural Resource Economics", "Science Communication",
    "Entrepreneurship", "Geographic Information Systems"
  ],
  "Architecture & Built Environment": [
    "Sustainable Development", "Environmental Planning", "Urban Sociology",
    "Project Management", "Real Estate Principles", "Entrepreneurship",
    "Disaster Risk Reduction", "Geographic Information Systems"
  ],
  "Arts & Design": [
    "Digital Marketing", "Entrepreneurship", "Communication for Social Change",
    "Psychology of Creativity", "Cultural Studies", "Project Management",
    "Intellectual Property Basics", "Media and Society"
  ],
  "Aviation": [
    "Aviation Human Factors", "Aviation Law", "Air Transport Economics",
    "Safety Management", "Airport Planning", "Business Communication",
    "Emergency Management", "Sustainable Transport"
  ],
  "Aviation & Engineering": [
    "Aviation Safety", "Engineering Economy", "Technical Communication",
    "Project Management", "Environmental Impact Assessment", "Quality Management",
    "Entrepreneurship", "Human Factors"
  ],
  "Business & Management": [
    "Business Analytics", "Entrepreneurship", "Business Law",
    "Digital Marketing", "Project Management", "Data Visualization",
    "Sustainable Development", "Public Administration"
  ],
  "Communication & Languages": [
    "Community Development", "Development Studies", "Environmental Studies",
    "Public Health", "Agricultural Extension", "Entrepreneurship",
    "Education", "Public Administration"
  ],
  "Computing & IT": [
    "Business Communication", "Entrepreneurship", "Digital Marketing",
    "Project Management", "Data Visualization", "Cybersecurity Policy",
    "Technical Writing", "User Experience Design"
  ],
  "Education": [
    "Child and Adolescent Development", "Inclusive Education", "Educational Technology",
    "Guidance and Counseling", "Community Development", "Filipino Language Studies",
    "Environmental Education", "Arts in Education"
  ],
  "Engineering": [
    "Engineering Economy", "Technical Communication", "Project Management",
    "Environmental Impact Assessment", "Quality Management", "Entrepreneurship",
    "Data Analytics", "Public Policy"
  ],
  "Health & Medical": [
    "Health Communication", "Health Economics", "Community Development",
    "Psychology", "Health Policy", "Nutrition Education",
    "Bioethics", "Health Informatics"
  ],
  "Hospitality & Tourism": [
    "Tourism Geography", "Event Management", "Entrepreneurship",
    "Digital Marketing", "Sustainable Tourism", "Business Analytics",
    "Cultural Heritage", "Foreign Language"
  ],
  "Law & Public Service": [
    "Public Policy", "Public Finance", "Community Development",
    "Criminal Justice", "Human Rights", "Environmental Governance",
    "Conflict Resolution", "Public Sector Management"
  ],
  "Maritime": [
    "Maritime Law", "Port Management", "Logistics",
    "Marine Environmental Studies", "Safety Management", "International Trade",
    "Technical Communication", "Project Management"
  ],
  "Military & Uniformed Service": [
    "Public Administration", "Emergency Management", "Public Safety",
    "Human Rights", "Leadership Studies", "Disaster Risk Reduction",
    "Criminal Justice", "Community Development"
  ],
  "Science & Mathematics": [
    "Science Communication", "Data Analytics", "Environmental Studies",
    "Science Education", "Geographic Information Systems", "Public Policy",
    "Entrepreneurship", "Research Communication"
  ],
  "Social Sciences & Humanities": [
    "Community Development", "Public Policy", "Gender Studies",
    "Environmental Studies", "Development Studies", "Statistics",
    "Cultural Heritage", "Conflict Resolution"
  ]
};
const generalEducationType = "General education / supporting";
const minorElectiveType = "Minor / elective example";
const catalog = createCatalog();
const quizCardsPerTopic = 20;

function loadStudyProgress() {
  const saved = window.localStorage.getItem("kursokatha-study-progress");
  if (saved === null) return {};

  const progress = JSON.parse(saved);
  if (!progress || typeof progress !== "object" || Array.isArray(progress)) {
    throw new Error("Saved study progress has an invalid format.");
  }
  Object.entries(progress).forEach(([topicKey, ratings]) => {
    if (!ratings || typeof ratings !== "object" || Array.isArray(ratings)) {
      throw new Error(`Saved study progress for ${topicKey} has an invalid format.`);
    }
    Object.entries(ratings).forEach(([cardIndex, rating]) => {
      const index = Number(cardIndex);
      if (!Number.isInteger(index) || index < 0 || index >= quizCardsPerTopic || !["known", "review"].includes(rating)) {
        throw new Error(`Saved quiz rating for ${topicKey} has an invalid value.`);
      }
    });
  });
  return progress;
}

const studyProgress = loadStudyProgress();

function saveStudyProgress() {
  window.localStorage.setItem("kursokatha-study-progress", JSON.stringify(studyProgress));
}

function topicProgressKey(program, subject, topic) {
  return `${program.id}:${subject.catalogRef || subject.code}:${topic.title}`;
}

function updateStudyProgress() {
  const allRatings = Object.values(studyProgress).flatMap(ratings => Object.values(ratings));
  const reviewedCards = allRatings.length;
  const knownCards = allRatings.filter(rating => rating === "known").length;
  const totalTopics = allSubjects().reduce((total, { subject }) =>
    total + subject.topics.length + Number(!subject.topics.some(topic => topic.isPrimer)), 0);
  const totalCards = totalTopics * quizCardsPerTopic;
  const completedTopics = Object.values(studyProgress)
    .filter(ratings => Object.keys(ratings).length === quizCardsPerTopic).length;
  const percent = totalCards ? reviewedCards / totalCards * 100 : 0;

  studyProgressSummary.textContent = reviewedCards
    ? `${completedTopics}/${totalTopics} topics complete · ${reviewedCards}/${totalCards} cards rated · ${knownCards} known`
    : "No quiz cards reviewed yet";
  studyProgressBar.value = percent;
  studyProgressBar.setAttribute("aria-valuetext", `${percent.toFixed(2)}% complete`);
}

function updateQuizScore() {
  const ratings = studyProgress[activeProgressKey] || {};
  const values = Object.values(ratings);
  const known = values.filter(rating => rating === "known").length;
  const review = values.filter(rating => rating === "review").length;
  const completed = values.length === quizCardsPerTopic;

  quizScore.textContent = `${completed ? "Topic complete" : "Topic progress"} · Known: ${known} · Review: ${review} · Rated: ${values.length}/${quizCardsPerTopic}`;
  const rating = ratings[currentCardIndex];
  markReview.setAttribute("aria-pressed", String(rating === "review"));
  markKnown.setAttribute("aria-pressed", String(rating === "known"));
  markReview.disabled = flashcard.getAttribute("aria-pressed") !== "true";
  markKnown.disabled = flashcard.getAttribute("aria-pressed") !== "true";
}

function rateCurrentCard(rating) {
  if (flashcard.getAttribute("aria-pressed") !== "true") return;
  if (!studyProgress[activeProgressKey]) studyProgress[activeProgressKey] = {};
  studyProgress[activeProgressKey][currentCardIndex] = rating;
  saveStudyProgress();
  updateQuizScore();
  updateStudyProgress();
}

const fieldPrimers = [
  {
    match: /computing|information technology|software|data science/i,
    title: "Computing: from problem to tested solution",
    notes: [
      "Start by stating the problem, intended users, inputs, outputs, and constraints; do not assume a tool is the solution before understanding the need.",
      "Choose a representation and method that fit the problem, then explain important design choices and assumptions.",
      "Test with ordinary, boundary, and invalid inputs; record what failed and verify that changes do not break earlier behavior."
    ],
    card: ["What should you clarify before choosing a computing solution?", "The problem, intended users, inputs, outputs, and constraints."]
  },
  {
    match: /business|management|account|finance|marketing|econom/i,
    title: "Business: decisions, evidence, and outcomes",
    notes: [
      "Identify the decision to be made, whose interests are affected, and the objective used to judge a result.",
      "Separate measured information from assumptions; check the period, units, definitions, and limits of any figures.",
      "Compare feasible options against the objective, explain trade-offs, and review actual outcomes rather than treating a forecast as a fact."
    ],
    card: ["What should be separated when analyzing a business decision?", "Observed evidence should be distinguished from assumptions and forecasts."]
  },
  {
    match: /education|teaching|curriculum|pedagog/i,
    title: "Education: align goals, learning, and evidence",
    notes: [
      "Begin with the intended learning: what should learners know or be able to demonstrate?",
      "Choose learning activities that give learners a chance to practice that outcome, and use assessment evidence that actually measures it.",
      "Consider learners' prior knowledge, language, accessibility, and context; use evidence to adjust teaching rather than treating one result as a complete picture."
    ],
    card: ["What should an assessment measure?", "Evidence of the intended learning outcome, using criteria appropriate to that outcome."]
  },
  {
    match: /health|medical|nurs|pharmacy|midwif|dent|care|wellness/i,
    title: "Health: evidence, context, and safety",
    notes: [
      "For study, distinguish general health information from an assessment or instruction for a particular person; individual care depends on qualified professionals and the clinical context.",
      "Check that a source is current, relevant to the question, and consistent with the applicable professional guidance and local protocol.",
      "Protect privacy, communicate uncertainty, and use the appropriate supervision or escalation pathway when a safety concern arises."
    ],
    card: ["Why must general health information not be treated as an individual care instruction?", "Individual care depends on a person's circumstances and qualified professional assessment."]
  },
  {
    match: /engineering|automotive|construction|civil|electrical|mechanical|electronics/i,
    title: "Engineering and trades: define, calculate, verify",
    notes: [
      "Translate the task into requirements and constraints; state assumptions before using a model or calculation.",
      "Keep units and significant conditions visible so another person can follow and check the work.",
      "Verify the result against the applicable drawing, specification, safety procedure, and current local code; a plausible calculation alone does not establish that work is safe or compliant."
    ],
    card: ["Why document assumptions and units in a technical calculation?", "They make the method interpretable and help another person check whether the result fits the task."]
  },
  {
    match: /law|public service|govern|crimin|security|military|uniformed/i,
    title: "Law and public service: authority, facts, and jurisdiction",
    notes: [
      "State the issue precisely and distinguish established facts from allegations, assumptions, and conclusions.",
      "Identify the relevant jurisdiction and the primary legal or policy authority; check whether the source is current and applies to the question.",
      "Explain how the authority relates to the facts and acknowledge limits. A study summary is not legal advice or an operational directive."
    ],
    card: ["What should be checked before applying a legal rule to a problem?", "The jurisdiction, the current applicable authority, and the facts to which the rule is being applied."]
  },
  {
    match: /hospitality|tourism|culinary|food|restaurant|cookery/i,
    title: "Hospitality and tourism: service with safety and context",
    notes: [
      "Clarify the guest or visitor need, the service promised, and the setting before selecting a response.",
      "Follow the relevant hygiene, accessibility, and safety procedures for the task; use current workplace instructions rather than memory where requirements matter.",
      "Check whether the service met its purpose, listen to feedback, and protect personal information shared during service."
    ],
    card: ["What should guide a hospitality service response?", "The guest's need, the service commitment, the setting, and applicable safety procedures."]
  },
  {
    match: /science|mathemat|biology|chemistry|physics|statistic|biotech|laboratory/i,
    title: "Science and mathematics: show the reasoning",
    notes: [
      "Define the question and the quantities, variables, or definitions that matter before selecting a method.",
      "Show the steps and units, and distinguish observations or data from the interpretation placed on them.",
      "Check assumptions, uncertainty, and whether the conclusion is supported by the method; a result should not claim more than the evidence permits."
    ],
    card: ["What should a conclusion in science or mathematics do?", "Answer the defined question and stay within what the method and evidence support."]
  },
  {
    match: /social science|humanit|history|psycholog|sociolog|political|anthropolog|econom/i,
    title: "Social sciences and humanities: read evidence in context",
    notes: [
      "Ask who created a source, when and why it was made, and what perspective or limitations may shape it.",
      "Support interpretations with evidence, distinguish a source's claim from your own inference, and compare relevant perspectives.",
      "Avoid treating one case, quotation, or account as representative of every group or period without supporting evidence."
    ],
    card: ["Why examine a source's context?", "Its creator, time, purpose, and perspective affect what the source can support."]
  },
  {
    match: /communication|language|journal|media|broadcast|development communication/i,
    title: "Communication and languages: purpose, audience, revision",
    notes: [
      "Define the purpose and audience before choosing words, language, format, or channel.",
      "Check meaning, evidence, tone, accessibility, and cultural context; do not assume every audience interprets a message in the same way.",
      "Revise for clarity and accuracy, verify factual claims, and credit sources or creative work where required."
    ],
    card: ["What should guide choices about a message's language and channel?", "Its purpose, intended audience, context, and accessibility needs."]
  },
  {
    match: /arts|design|creative|fashion|graphic|fine art|multimedia/i,
    title: "Arts and design: brief, iterate, and credit",
    notes: [
      "Translate the brief into a clear purpose, intended audience, constraints, and criteria for evaluating the work.",
      "Explore alternatives, test drafts or prototypes, and use feedback to revise while keeping the design goal visible.",
      "Document influences and obtain permission or follow the applicable license before reusing another creator's protected work."
    ],
    card: ["What should a design brief make clear?", "The purpose, intended audience, constraints, and criteria for judging the work."]
  },
  {
    match: /architecture|built environment|interior|landscape|urban|construction/i,
    title: "Built environment: users, place, and requirements",
    notes: [
      "Understand who will use the place and how site conditions, circulation, accessibility, and intended activities affect the design.",
      "Develop and compare design options against the brief, relevant evidence, and stated constraints.",
      "Verify safety, dimensions, materials, and compliance against current local codes and qualified professional review; do not rely on a generic study note for construction decisions."
    ],
    card: ["What should a built-environment design be checked against?", "The project brief, site conditions, user needs, and applicable current local requirements."]
  },
  {
    match: /agriculture|environment|forestry|fisher|animal|crop|soil|ecolog/i,
    title: "Agriculture and environment: observe the local system",
    notes: [
      "Describe the place, organisms, resources, and conditions relevant to the question instead of assuming one location represents another.",
      "Use suitable observations or measurements, record when and how they were collected, and note limits that affect comparison.",
      "Consider effects across the wider system and follow current environmental, animal-welfare, and occupational-safety requirements for the activity."
    ],
    card: ["Why record where and how environmental or agricultural observations were collected?", "Context and method affect how the observations can be interpreted and compared."]
  },
  {
    match: /maritime|marine|nautical|shipping|seafar/i,
    title: "Maritime studies: procedures, risk, and current standards",
    notes: [
      "Treat safety procedures and assigned responsibilities as essential context for interpreting a maritime task.",
      "Use the current approved training material, vessel procedures, and applicable maritime requirements; do not substitute a reviewer for required instruction.",
      "Communicate hazards and uncertainty through the proper supervisory channel, and follow approved emergency procedures."
    ],
    card: ["What should a maritime reviewer never replace?", "Current approved training, vessel procedures, required supervision, and applicable maritime requirements."]
  },
  {
    match: /aviation|aeronautic|pilot|aircraft|flight/i,
    title: "Aviation studies: use approved material and limits",
    notes: [
      "Use the current approved aircraft, training, and operating material applicable to the specific task and jurisdiction.",
      "Treat checklists, limitations, and instructor or authorized-supervisor directions as controlling; a general reviewer is not operational guidance.",
      "When a value, condition, or procedure is uncertain, stop and verify it through the approved source and supervision."
    ],
    card: ["What should you do when an aviation procedure or limit is uncertain?", "Stop and verify it using current approved material and the appropriate authorized supervision."]
  },
  {
    match: /tesda/i,
    title: "TESDA competencies: demonstrate to the current standard",
    notes: [
      "A TESDA qualification is competency-based; use the current Training Regulations and competency standards for the specific qualification.",
      "Study the performance criteria and required evidence, then practice the task using the prescribed tools, materials, and safety procedures.",
      "Confirm assessment arrangements and qualification requirements with TESDA or an authorized assessment center; this primer is not a substitute for those standards."
    ],
    card: ["What defines the expected performance for a TESDA competency?", "The current competency standards and performance criteria for the specific qualification."]
  }
];

const fieldPrimerSources = {
  computing: { label: "ACM/IEEE-CS computing curricula recommendations", url: "https://www.acm.org/education/curricula-recommendations", scope: "Computing curriculum context; not a Philippine school's syllabus." },
  business: { label: "OpenStax · Principles of Management", url: "https://openstax.org/details/books/principles-management", scope: "Open educational business reference." },
  education: { label: "UNESCO · Education resources", url: "https://www.unesco.org/en/education", scope: "International education context; not local licensure or school requirements." },
  health: { label: "WHO · Patient Safety Curriculum Guide", url: "https://www.who.int/publications/i/item/9789241501958", scope: "Patient-safety learning resource; not individual medical advice." },
  engineering: { label: "ABET · Accreditation criteria", url: "https://www.abet.org/accreditation/accreditation-criteria/", scope: "U.S.-based accreditation reference; Philippine requirements may differ." },
  law: { label: "Lawphil · Philippine legal materials", url: "https://lawphil.net/", scope: "Research starting point; verify current law and controlling authorities." },
  hospitality: { label: "UN Tourism · Official site", url: "https://www.untourism.int/", scope: "International tourism context; not a local service or safety standard." },
  science: { label: "OpenStax · Science textbooks", url: "https://openstax.org/subjects/science", scope: "Open educational science references." },
  social: { label: "OpenStax · Social sciences", url: "https://openstax.org/subjects/social-sciences", scope: "Open educational social-science references." },
  communication: { label: "UNESCO · Media and Information Literacy", url: "https://www.unesco.org/en/media-information-literacy", scope: "Media-literacy resource; not a complete communication or language syllabus." },
  arts: { label: "Smithsonian Open Access", url: "https://www.si.edu/openaccess", scope: "A collection resource; check each item's reuse terms and attribution." },
  architecture: { label: "NCARB · Architecture resources", url: "https://www.ncarb.org/", scope: "U.S.-based professional context; Philippine codes and requirements differ." },
  agriculture: { label: "FAO · Food and agriculture", url: "https://www.fao.org/home/en", scope: "International food and agriculture context; local practices and rules vary." },
  maritime: { label: "IMO · Maritime safety", url: "https://www.imo.org/en/OurWork/Safety/Pages/Default.aspx", scope: "International maritime-safety context; use current applicable rules." },
  aviation: { label: "FAA · Handbooks and manuals", url: "https://www.faa.gov/regulations_policies/handbooks_manuals", scope: "U.S. aviation reference only; not Philippine operational authority." },
  tesda: { label: "TESDA · Official site", url: "https://www.tesda.gov.ph/", scope: "Consult the current Training Regulations for the named qualification." }
};

const courseModuleRules = [
  {
    match: /programming fundamentals|programming for data science|programming for engineers|integrative programming|object-oriented programming|computer programming/i,
    title: "Algorithms, variables, and control flow",
    notes: [
      "A program expresses a procedure for transforming inputs into outputs. Before coding, write down the problem, expected inputs and outputs, and important constraints.",
      "Variables name values; a conditional selects a path; a loop repeats work. Keep each step precise and check that a loop can reach its stopping condition.",
      "Trace a small example by hand, then test normal, boundary, and invalid inputs. A program that runs is not necessarily a program that meets its requirements."
    ],
    card: ["What should you specify before writing a program?", "The problem, expected inputs and outputs, and constraints."],
    source: "computing"
  },
  {
    match: /database|data management|information management|sql/i,
    title: "Relational data: tables, keys, and queries",
    notes: [
      "A relational table represents one kind of entity; rows are records and columns are attributes. Choose a key that uniquely identifies each row.",
      "A foreign key connects a row to a related table. Relationships and integrity constraints help prevent inconsistent references.",
      "A query should state what data it needs and how rows are filtered or combined. Test it against small examples, including missing and duplicate values."
    ],
    card: ["What does a primary key do in a relational table?", "It uniquely identifies a row in that table."],
    source: "computing"
  },
  {
    match: /data structures|algorithms and complexity|algorithms|automata and language theory/i,
    title: "Representing a problem and reasoning about cost",
    notes: [
      "A data structure organizes values so operations such as lookup, insertion, or traversal can be performed.",
      "Choose a structure based on the operations the problem needs; no structure is best for every workload.",
      "Complexity describes how resource use grows with input size under stated assumptions. Explain the dominant growth term rather than promising an exact run time."
    ],
    card: ["How should you choose a data structure?", "Match it to the operations and constraints the problem requires."],
    source: "computing"
  },
  {
    match: /software engineering|software design|systems analysis|systems analysis and design|system analysis/i,
    title: "Requirements, design, and verification",
    notes: [
      "A requirement states a need or constraint in a way that can be checked. Ask who needs it and what observable result would satisfy it.",
      "Models and designs make assumptions visible before implementation; review them with the people affected by the system.",
      "Verification checks work against stated requirements. Keep tests traceable to those requirements and revise the design when evidence exposes a mismatch."
    ],
    card: ["What makes a requirement testable?", "It describes an observable condition or result that can be checked."],
    source: "computing"
  },
  {
    match: /web systems|web development|web technologies|web design/i,
    title: "How a web request becomes a page",
    notes: [
      "A browser requests a resource from a server using HTTP; the response includes a status and, when successful, content such as HTML.",
      "HTML describes document structure, CSS presentation, and JavaScript behavior. Keeping these roles clear makes a page easier to maintain.",
      "Treat user input as untrusted, provide semantic controls and labels, and test behavior with keyboard and assistive technology as well as a pointer."
    ],
    card: ["What roles do HTML, CSS, and JavaScript primarily serve?", "HTML structures content, CSS styles it, and JavaScript adds behavior."],
    source: "computing"
  },
  {
    match: /network|telecommunication|data communication/i,
    title: "Network communication: layers and addressing",
    notes: [
      "A network protocol defines conventions that devices use to exchange data; layered designs separate responsibilities.",
      "IP addresses identify interfaces for network delivery, while transport protocols such as TCP or UDP provide different end-to-end behaviors.",
      "When troubleshooting, identify the failing layer and collect evidence before changing configuration. Exact network plans depend on the actual environment."
    ],
    card: ["What is the purpose of a network protocol?", "To define rules that allow devices to exchange data."],
    source: "computing"
  },
  {
    match: /information assurance|cyber|security|information security/i,
    title: "Security foundations: assets, threats, and controls",
    notes: [
      "Start by identifying the asset, the harm to prevent, and the threat or weakness that could cause it.",
      "Confidentiality, integrity, and availability are common security goals; a control should reduce a stated risk without creating greater harm.",
      "Use authorized systems and current organizational policy. Do not test, access, or disclose data without permission."
    ],
    card: ["What should a security control be connected to?", "A defined asset and risk it is intended to reduce."],
    source: "computing"
  },
  {
    match: /operating system|systems administration|systems administration and maintenance/i,
    title: "Operating systems: processes, memory, and permissions",
    notes: [
      "An operating system manages resources such as processor time, memory, storage, and device access for programs.",
      "Processes are running programs; the operating system schedules their execution and isolates resources according to its design.",
      "Use least privilege for accounts and verify backups and changes using approved procedures; configuration details depend on the system."
    ],
    card: ["Name two resources an operating system manages.", "Examples include processor time, memory, storage, and device access."],
    source: "computing"
  },
  {
    match: /information systems|enterprise architecture|business intelligence|is strategy|is project|business process management/i,
    title: "Information systems: people, process, data, and technology",
    notes: [
      "An information system combines people, processes, data, and technology to support work or decisions.",
      "Before proposing a system, describe the user need and current process; technology alone may not address a process or policy problem.",
      "Evaluate a proposed change against the intended outcome, affected stakeholders, data quality, and operational risks."
    ],
    card: ["Why is technology alone not a complete information-system analysis?", "People, processes, and data also shape the need and the system's results."],
    source: "computing"
  },
  {
    match: /data science|data mining|machine learning|statistical modeling|big data|data visualization/i,
    title: "Data analysis: question, data, model, limits",
    notes: [
      "Begin with a question that can be answered using the available data; inspect how the data were collected and what they omit.",
      "Separate training and evaluation data when assessing a predictive model, and choose measures that fit the task and its consequences.",
      "Describe uncertainty, bias, and limitations. A pattern or prediction is not, by itself, evidence of causation."
    ],
    card: ["Why inspect how data were collected before analyzing them?", "Collection methods and omissions affect what conclusions the data can support."],
    source: "science"
  },
  {
    match: /calculus|differential equations|linear algebra|mathematics in the modern world|quantitative methods/i,
    title: "Mathematical modeling: define quantities and assumptions",
    notes: [
      "Translate a situation into defined quantities and relationships; state assumptions and units before calculating.",
      "Choose a mathematical method that matches the structure of the problem, then show enough steps for another learner to follow.",
      "Check whether the result is reasonable in magnitude and meaning. A correct calculation can still answer the wrong question if the model is unsuitable."
    ],
    card: ["What should you check after solving a mathematical model?", "Whether the result is reasonable and whether the assumptions fit the original question."],
    source: "science"
  },
  {
    match: /probability|statistics|research methods|research in|research fundamentals|research methodology/i,
    title: "Research and statistics: question, sample, evidence",
    notes: [
      "A research question guides the design, population, measures, and analysis; define these before interpreting results.",
      "A sample may differ from the population. Describe how participants or observations were selected and what limits that creates.",
      "Association does not establish causation. Report the method, uncertainty, and limitations, and follow ethical rules for human participants."
    ],
    card: ["Does an association alone prove that one variable caused another?", "No. Association alone does not establish causation."],
    source: "science"
  },
  {
    match: /computing fundamentals|fundamentals of computing/i,
    title: "Computing systems: input, process, output, storage",
    notes: [
      "A computing system accepts input, processes data according to instructions, and produces output; storage preserves data for later use.",
      "Hardware, software, data, people, and procedures work together in an information system.",
      "When studying a system, identify its purpose and components instead of assuming the computer alone explains the whole process."
    ],
    card: ["What parts beyond hardware are important to an information system?", "Software, data, people, and procedures."],
    source: "computing"
  },
  {
    match: /pathology|oral pathology|oral histology|histology|dental materials|restorative dentistry|periodontology|prosthodontics|pediatric dentistry|orthodontics|oral surgery/i,
    title: "Dental and diagnostic sciences: evidence and clinical context",
    notes: [
      "Diagnostic interpretation connects observed findings with validated methods and the relevant clinical context.",
      "Materials and procedures have defined indications, limitations, and safety requirements that must be learned from current professional references.",
      "Use qualified supervision and current local standards; this academic introduction is not diagnosis or treatment guidance."
    ],
    card: ["What should support interpretation of a diagnostic finding?", "A validated method, relevant clinical context, and qualified professional judgment."],
    source: "health"
  },
  {
    match: /community health|foundations of public health|program planning and evaluation|program monitoring and evaluation|field practice|research project|undergraduate research|public safety research/i,
    title: "Community programs: needs, participation, evaluation",
    notes: [
      "Define the community, need, and intended outcome with input from the people affected.",
      "Distinguish resources and activities from outputs and longer-term outcomes; choose indicators that match the objective.",
      "Use ethical, context-appropriate evidence and report limitations rather than claiming impact without a suitable evaluation."
    ],
    card: ["What should a program indicator measure?", "A clearly defined result or activity that is connected to the program objective."],
    source: "social"
  },
  {
    match: /business model innovation|enterprise development|economic research seminar|entrepreneurial mind/i,
    title: "Enterprise development: test a model before scaling",
    notes: [
      "Describe the customer or community need, the value offered, and how the proposed enterprise would deliver it.",
      "Test assumptions about users, resources, costs, and delivery with relevant evidence.",
      "A business model is a hypothesis about how value is created and sustained; revise it when evidence contradicts the assumptions."
    ],
    card: ["Why should an enterprise test its business-model assumptions?", "The model is a hypothesis and may not fit actual user needs or operating conditions."],
    source: "business"
  },
  {
    match: /evolution|instrumental analysis|trigonometry|discrete mathematics|real analysis|numerical analysis|mathematics seminar|electricity and magnetism/i,
    title: "Scientific and mathematical claims: definitions and evidence",
    notes: [
      "State definitions, assumptions, and the domain where a mathematical or scientific claim applies.",
      "Show reasoning and use examples or evidence that directly address the claim; a numerical result should include units where relevant.",
      "Check limiting cases and counterexamples to expose errors or unsupported generalizations."
    ],
    card: ["What can a counterexample establish about a universal mathematical claim?", "It can show the claim is false by providing one allowed case where it does not hold."],
    source: "science"
  },
  {
    match: /psychological assessment|theories of personality/i,
    title: "Psychology: theory, measurement, and individual limits",
    notes: [
      "A psychological theory is a framework for explaining patterns; identify its concepts and the evidence on which a claim relies.",
      "Assessment instruments have defined purposes and limits; interpretation requires appropriate training and relevant context.",
      "Do not treat a theory or screening result as an individual diagnosis. Use current professional standards and qualified supervision."
    ],
    card: ["Why should a screening result not automatically be treated as a diagnosis?", "Screening has limits and requires qualified interpretation in the person's context."],
    source: "social"
  },
  {
    match: /social and cultural history|history seminar|history elective|ethical? ?s|ethics in public service|civic and public service|understanding the self|science, technology, and society|the contemporary world|philippine history|world history|development perspectives/i,
    title: "Critical inquiry: claim, context, source",
    notes: [
      "State the question and distinguish evidence, interpretation, and value judgment.",
      "Check the source's origin, context, purpose, and limitations, and compare perspectives where appropriate.",
      "Support conclusions with relevant evidence and avoid claiming that one case represents every person or community."
    ],
    card: ["What should be distinguished in a critical inquiry?", "Evidence, interpretation, and value judgment."],
    source: "social"
  },
  {
    match: /environmental studies|environmental policy|environmental impact assessment|environmental planning|environmental research|environmental elective|geology/i,
    title: "Environmental study: baseline, impact, mitigation",
    notes: [
      "Describe the site's baseline conditions and the proposed activity before evaluating possible change.",
      "Consider direct and indirect effects, affected communities, uncertainty, and the time scale of the analysis.",
      "Use current local requirements and suitable evidence; an introductory summary is not an environmental approval or site-specific assessment."
    ],
    card: ["Why establish baseline conditions in an environmental assessment?", "They provide a reference for understanding and evaluating possible changes."],
    source: "agriculture"
  },
  {
    match: /ethics|ethics in public service/i,
    title: "Ethical reasoning: stakeholders, duties, consequences",
    notes: [
      "Identify who may be affected, what values or duties are relevant, and which facts remain uncertain.",
      "Compare possible actions and their likely consequences, including effects on people with less power.",
      "Explain the reasons for a decision and follow applicable professional codes, law, and institutional policy."
    ],
    card: ["What should an ethical analysis identify before choosing an action?", "Affected stakeholders, relevant duties or values, and important uncertainties."],
    source: "social"
  },
  {
    match: /design|visual concepts|graphic assets|layouts and production files|present and revise design work|drawing and drafting|ee design|cp[e]? design|me design|ie design|structures/i,
    title: "Technical design: requirements, representation, review",
    notes: [
      "Translate the brief into requirements and constraints before choosing a design.",
      "Use a drawing, model, or prototype to communicate the proposal and make dimensions, assumptions, or intended behavior checkable.",
      "Review the work against the brief, relevant standards, and feedback; do not treat a draft as an approved construction or production document."
    ],
    card: ["What should a design representation make clear?", "How the proposal addresses the brief and which dimensions, assumptions, or behaviors need review."],
    source: "engineering"
  },
  {
    match: /color and materials/i,
    title: "Color and material choices: purpose, context, specification",
    notes: [
      "Describe the intended visual or functional effect before choosing a color or material.",
      "Evaluate samples under relevant lighting and use conditions; appearance and performance can change with context.",
      "Verify durability, accessibility, safety, sourcing, and specification details against the project brief and current professional requirements."
    ],
    card: ["Why should a color or material be evaluated in its intended setting?", "Lighting, use, and surrounding materials can change its appearance and performance."],
    source: "arts"
  },
  {
    match: /development project planning|capstone \/ service project/i,
    title: "Project planning: objectives, stakeholders, evidence",
    notes: [
      "Define the problem, intended beneficiaries, objective, deliverables, constraints, and responsible stakeholders.",
      "Plan activities and resources around the objective, including risks, participation, and how progress will be measured.",
      "Review results with affected stakeholders and distinguish completed activities from demonstrated outcomes."
    ],
    card: ["What should a project objective connect to?", "A defined need, intended beneficiaries, planned deliverables, and measurable outcomes."],
    source: "social"
  },
  {
    match: /workshop safety and tools/i,
    title: "Workshop safety: hazards, authorization, supervision",
    notes: [
      "Identify hazards and follow the current workplace risk controls, equipment instructions, and required protective measures.",
      "Use tools only for authorized tasks after required instruction and under the specified supervision.",
      "Stop work and report damaged equipment, unsafe conditions, or uncertainty through the approved safety process."
    ],
    card: ["What should you do if workshop equipment appears unsafe?", "Stop using it and report the condition through the approved safety process."],
    source: "tesda"
  },
  {
    match: /bar review/i,
    title: "Bar review: issue, current rule, application",
    notes: [
      "For a legal problem, identify the issue and consult the current Philippine primary authority and rules applicable to the subject.",
      "State the rule and its elements, then apply each element to the facts while recognizing counterarguments and limits.",
      "Bar requirements and examinable coverage can change; verify the current Supreme Court issuances and official examination materials."
    ],
    card: ["What should a bar-review answer connect?", "The issue, current applicable rule, relevant facts, and a reasoned application."],
    source: "law"
  },
  {
    match: /elective/i,
    title: "Elective module: follow the selected course outline",
    notes: [
      "An elective's title does not identify its actual content; the selected school's course description and syllabus determine its topics and learning outcomes.",
      "Use the instructor's Module 1 or opening-unit materials to make a topic checklist, then compare each item with the official course outcomes.",
      "Do not use this generic elective orientation as a substitute for subject-specific facts, readings, or assessment requirements."
    ],
    card: ["What determines the topics in an elective course?", "The selected course's official description, syllabus, and instructor's learning outcomes."],
    source: "social"
  },
  {
    match: /provide care for infants|provide care for the elderly|maintain a healthy and safe environment/i,
    title: "Care work: dignity, consent, safety, escalation",
    notes: [
      "Respect each person's dignity, preferences, privacy, and applicable consent requirements.",
      "Follow the current care plan, workplace procedures, and limits of the assigned role; individual needs differ.",
      "Report a safety concern or change in condition promptly through the approved supervisor or emergency pathway."
    ],
    card: ["What should guide support for an individual in a care setting?", "The person's dignity and preferences, current care plan, and the worker's authorized role."],
    source: "health"
  },
  {
    match: /prepare dining area|receive and handle guest concerns|process guest orders|clean and prepare rooms|handle guest requests|maintain public areas|decorate and present baked goods|handle customer inquiries|communicate effectively with customers|resolve customer concerns|contact center systems/i,
    title: "Service operations: standards, accuracy, escalation",
    notes: [
      "Confirm the request and the applicable service standard before acting.",
      "Communicate accurately, protect customer information, and follow current workplace safety and hygiene procedures.",
      "When a concern exceeds your authority, document relevant facts and escalate it through the approved service process."
    ],
    card: ["What should you do when a service concern exceeds your authority?", "Record relevant facts and escalate it through the approved process."],
    source: "hospitality"
  },
  {
    match: /prepare materials and joints|workshop safety and welding|interpret basic plans|diagnose faults|handle refrigerants|drafting fundamentals|operate and maintain farm tools|workplace safety and sewing tools|body measurements|draft and cut patterns|construct and finish garments|alter and repair garments/i,
    title: "Trade practice: task criteria and safe supervision",
    notes: [
      "Confirm the current task criteria, materials, equipment, and applicable safety instructions before practical work.",
      "Use only approved tools and procedures under required supervision; stop if conditions differ from the training instructions.",
      "Check the completed work against the competency standard and document any required inspection. This text is not a job procedure."
    ],
    card: ["What should a learner do if practical conditions differ from training instructions?", "Stop and ask the qualified supervisor before proceeding."],
    source: "tesda"
  },
  {
    match: /care of clients with problems in oxygenation|internal medicine|surgery|pediatrics|family and community medicine/i,
    title: "Clinical reasoning: assess, verify, escalate",
    notes: [
      "Clinical decisions depend on a current, person-specific assessment and the learner's authorized role; a textbook topic alone cannot establish a diagnosis or treatment.",
      "Compare observations with current approved guidance and local protocols, and communicate changes promptly through the proper clinical supervision pathway.",
      "Protect privacy and document according to policy. This educational module is not patient-care advice."
    ],
    card: ["What is the proper basis for an individual clinical decision?", "A current patient-specific assessment, applicable approved guidance, and qualified professional judgment."],
    source: "health"
  },
  {
    match: /introduction to computing/i,
    title: "Computing foundations: data, instructions, systems",
    notes: [
      "A computer follows encoded instructions to process data; the result depends on the instructions, inputs, and system context.",
      "An information system also includes people, procedures, and data, not only computer hardware.",
      "Describe a system by its purpose, inputs, processing, outputs, and stored information."
    ],
    card: ["What does an information system include besides computer hardware?", "People, procedures, software, and data."],
    source: "computing"
  },
  {
    match: /rizal|philippine hero/i,
    title: "Rizal studies: historical context and primary sources",
    notes: [
      "Study Rizal's writings and actions in their specific historical and colonial context, rather than separating them from the institutions and debates of the period.",
      "Distinguish primary documents from later interpretations and verify quotations against reliable editions.",
      "Use evidence to explain significance while recognizing that historical interpretation can vary with sources and questions."
    ],
    card: ["What should ground a claim about Rizal's writings or historical role?", "Reliable primary sources considered in their historical context, alongside relevant scholarship."],
    source: "social"
  },
  {
    match: /technical writing|academic writing/i,
    title: "Technical writing: audience, purpose, evidence, revision",
    notes: [
      "Define the document's audience, purpose, and action or understanding it should support.",
      "Organize information so readers can find it, and support technical claims with traceable evidence.",
      "Revise for accuracy, clarity, accessibility, and consistent terms; follow the required style guide."
    ],
    card: ["What should guide the structure of a technical document?", "Its audience, purpose, and the information readers need to use."],
    source: "communication"
  },
  {
    match: /business analytics|data analytics|analytics/i,
    title: "Business analytics: question, measure, decision",
    notes: [
      "Start with a decision question and define the measure that would inform it.",
      "Check data definitions, coverage, missing values, and time period before comparing results.",
      "Present uncertainty and limits; an observed association does not by itself establish cause or guarantee a future outcome."
    ],
    card: ["What should be defined before analyzing business data?", "The decision question and the measures relevant to it."],
    source: "business"
  },
  {
    match: /sustainable development|sustainable transport|sustainable/i,
    title: "Sustainable development: outcomes across time and groups",
    notes: [
      "Describe the environmental, social, and economic outcomes relevant to the decision and the people affected.",
      "Consider distribution: benefits and burdens may differ across communities and generations.",
      "Use indicators and evidence suited to the context, and state trade-offs instead of claiming a change is sustainable without support."
    ],
    card: ["What dimensions should a sustainability analysis consider?", "Relevant environmental, social, and economic outcomes across affected groups and time."],
    source: "agriculture"
  },
  {
    match: /educational technology|arts in education|science education|environmental education/i,
    title: "Teaching with disciplinary tools",
    notes: [
      "Choose a tool or representation because it supports a defined learning outcome, not because it is new or engaging by itself.",
      "Check accessibility, privacy, resources, and whether learners can use the tool in the intended setting.",
      "Assess the learning outcome directly and adapt instruction based on evidence."
    ],
    card: ["What should determine the use of an educational tool?", "Whether it supports the learning outcome accessibly and appropriately for the learners and setting."],
    source: "education"
  },
  {
    match: /guidance and counseling/i,
    title: "Guidance and counseling: boundaries and referral",
    notes: [
      "Support should respect the person's dignity, privacy, cultural context, and informed participation.",
      "Counseling roles require appropriate training, ethical standards, and clear professional boundaries.",
      "When a concern is beyond the practitioner's competence or presents risk, follow current safeguarding and referral procedures."
    ],
    card: ["What should a practitioner do when a concern exceeds their competence?", "Follow the applicable referral and safeguarding procedures and seek qualified supervision."],
    source: "education"
  },
  {
    match: /health assessment/i,
    title: "Health assessment: collect and verify relevant information",
    notes: [
      "Assessment gathers information relevant to a person's current context; methods must be appropriate to the practitioner's role and training.",
      "Distinguish reported information from observed findings and document according to current policy.",
      "Interpret findings with qualified supervision and current protocols; this lesson is not a clinical assessment procedure."
    ],
    card: ["Why distinguish reported information from observed findings?", "They come from different sources and should be documented and interpreted accurately."],
    source: "health"
  },
  {
    match: /health informatics/i,
    title: "Health informatics: reliable data and privacy",
    notes: [
      "Health information systems support the collection, exchange, and use of data in care and public health.",
      "Data quality, interoperability, access controls, and privacy affect whether information can be safely used.",
      "Follow applicable Philippine privacy law, institutional policy, and authorized access procedures; do not expose identifiable health information."
    ],
    card: ["What conditions support safe use of health information?", "Reliable data, appropriate interoperability, authorized access, and privacy protections."],
    source: "health"
  },
  {
    match: /human rights/i,
    title: "Human rights: rights-holder, duty, remedy",
    notes: [
      "Identify the right at issue, the person or group holding it, and the relevant duty-bearer.",
      "Ground analysis in current applicable legal instruments and distinguish a rights claim from the evidence supporting it.",
      "Consider access to remedies and protections, using current Philippine and international authorities as applicable."
    ],
    card: ["What should a human-rights analysis identify?", "The right, the rights-holder, the relevant duty-bearer, evidence, and applicable authority."],
    source: "law"
  },
  {
    match: /conflict resolution/i,
    title: "Conflict resolution: interests, communication, options",
    notes: [
      "Separate each party's stated position from the underlying interests and needs.",
      "Listen, clarify disputed facts, and generate options without assuming that every conflict can be resolved through agreement.",
      "Consider power differences, safety, and applicable formal processes; refer serious risks to qualified support."
    ],
    card: ["What is the difference between a position and an interest?", "A position is a stated demand; an interest is the underlying need or concern."],
    source: "social"
  },
  {
    match: /cultural heritage|cultural studies|cultural heritage/i,
    title: "Cultural heritage: context, community, stewardship",
    notes: [
      "Heritage includes meanings and practices that communities value; interpretation should account for who defines and represents it.",
      "Document provenance and context, and respect community protocols, privacy, and cultural rights.",
      "Do not assume that public access grants permission to reproduce, commercialize, or disclose culturally sensitive material."
    ],
    card: ["Why should heritage work consider community perspectives?", "Communities hold knowledge and interests that affect interpretation, stewardship, and appropriate access."],
    source: "arts"
  },
  {
    match: /intellectual property/i,
    title: "Intellectual property: identify the work and permission",
    notes: [
      "Identify the material, its creator or rights-holder, and the rights or license that apply before reuse.",
      "Copyright, trademarks, patents, and other rights protect different subject matter and are not interchangeable.",
      "Attribution alone does not grant permission; check applicable Philippine law, license terms, and exceptions for the intended use."
    ],
    card: ["Does attribution alone grant permission to reuse copyrighted work?", "No. Check permission, the applicable license, and any relevant legal exception."],
    source: "law"
  },
  {
    match: /real estate principles/i,
    title: "Real estate: property, market evidence, legal due diligence",
    notes: [
      "A real-estate analysis distinguishes the physical property, legal interests, market evidence, and intended use.",
      "Values and feasibility depend on location, date, assumptions, and the quality of comparable evidence.",
      "Verify title, zoning, tax, and transaction requirements through current authorized Philippine sources and qualified professionals."
    ],
    card: ["Why must real-estate market evidence include location and date?", "Property conditions and market values vary by place and time."],
    source: "law"
  },
  {
    match: /agribusiness/i,
    title: "Agribusiness: value chain, risk, and local conditions",
    notes: [
      "Map how inputs, production, processing, distribution, and customers connect in the relevant value chain.",
      "Account for seasonality, logistics, market access, resource constraints, and risks specific to the enterprise and location.",
      "Use current local data and distinguish a business estimate from a guaranteed outcome."
    ],
    card: ["What should an agribusiness value-chain analysis trace?", "The relevant links from inputs and production through processing, distribution, and customers."],
    source: "agriculture"
  },
  {
    match: /logistics|international trade/i,
    title: "Logistics and trade: flows, documents, requirements",
    notes: [
      "Describe the movement of goods, information, and responsibility across the relevant supply chain.",
      "Check current routes, costs, documents, and regulatory requirements for the specific transaction and jurisdiction.",
      "Distinguish planned delivery performance from actual results and identify dependencies that can cause disruption."
    ],
    card: ["What should be checked for a specific trade transaction?", "Current route, costs, required documents, and applicable jurisdictional requirements."],
    source: "business"
  },
  {
    match: /human factors/i,
    title: "Human factors: design around people and conditions",
    notes: [
      "Human-factors analysis considers how people, tasks, tools, environments, and organizational procedures interact.",
      "Use observation and user evidence to identify mismatches rather than blaming an individual for a system problem.",
      "Evaluate proposed changes for usability, workload, accessibility, and safety in the real context."
    ],
    card: ["What does human-factors analysis examine?", "Interactions among people, tasks, tools, environments, and organizational procedures."],
    source: "engineering"
  },
  {
    match: /^public safety$/i,
    title: "Public safety: prevention, preparedness, response",
    notes: [
      "Public-safety work depends on prevention, preparedness, response, and recovery roles defined by the responsible authority.",
      "Use current local plans, training, and authorized communication channels; procedures are jurisdiction- and incident-specific.",
      "Protect affected people and follow directions from authorized responders during real incidents."
    ],
    card: ["Where should a learner verify a local emergency procedure?", "The current plan and instruction issued by the responsible local authority."],
    source: "law"
  },
  {
    match: /professional practice|professional ethics|comprehensive care|pharmacy practice experience|related learning experience/i,
    title: "Professional practice: scope, ethics, accountability",
    notes: [
      "Professional practice requires working within one's education, authorization, and supervised role.",
      "Identify who may be affected, protect privacy, communicate honestly, and use the applicable professional code and current institutional policy.",
      "When a task exceeds competence or authority, pause and seek the appropriate qualified supervisor."
    ],
    card: ["What should a student do when a task exceeds their competence or authority?", "Pause and seek guidance from the appropriate qualified supervisor."],
    source: "health"
  },
  {
    match: /nutrition|public health nutrition/i,
    title: "Nutrition: needs, context, and evidence",
    notes: [
      "Nutrition needs vary with age, health, activity, culture, access, and other individual circumstances.",
      "Distinguish population-level dietary guidance from advice for a specific person, and check that information is current and from a qualified source.",
      "Consider food access and the broader context; avoid presenting a single food or nutrient as a complete solution."
    ],
    card: ["Why should general nutrition guidance not be treated as an individual prescription?", "Individual needs and health context vary and may require qualified assessment."],
    source: "health"
  },
  {
    match: /recruitment and selection|training and development|compensation and benefits|labor relations|strategic hrm|hr analytics|fundamentals of hrm/i,
    title: "Human resources: fair process and evidence",
    notes: [
      "Human-resource decisions should follow defined role-related criteria, applicable law, and the organization's current policy.",
      "Use consistent evidence and explain decisions; protect personal and employment information.",
      "Review outcomes for fairness and unintended effects, and refer legal or sensitive matters to authorized specialists."
    ],
    card: ["What should guide a fair selection decision?", "Consistent, job-related criteria applied using relevant evidence and current policy."],
    source: "business"
  },
  {
    match: /entrepreneur|business plan|product development|opportunity seeking/i,
    title: "Entrepreneurship: problem, customer, and evidence",
    notes: [
      "State the customer problem and the assumptions behind a proposed solution before investing resources.",
      "Test the riskiest assumptions with appropriate evidence and feedback from intended users.",
      "A business plan or forecast is conditional, not a guarantee; state costs, uncertainties, and constraints."
    ],
    card: ["What should an entrepreneur test before scaling a proposed solution?", "The riskiest assumptions about the customer need, solution, and resources."],
    source: "business"
  },
  {
    match: /food safety|sanitation|prepare and cook|prepare stocks|prepare cold meals|clean and maintain kitchen|bakery|pastry|welding|plumbing|refrigeration|air-conditioning|weld|install lighting|service engine|service suspension|service brake|vehicle|drafting standards|2d drawings|drawing files|basic piping|plumbing fixtures/i,
    title: "Practical training: standards, safety, evidence",
    notes: [
      "Before practical work, check the current competency standard, task requirements, required tools, and approved safety procedure.",
      "Practice only with the required supervision and protective measures; stop and ask when a condition or instruction is unclear.",
      "Record and verify the result against the assessment criteria. This module does not replace hands-on instruction or a task-specific procedure."
    ],
    card: ["What should guide a practical TESDA task?", "The current competency standard, task requirements, approved safety procedures, and required supervision."],
    source: "tesda"
  },
  {
    match: /tour guiding principles|travel agency operations|airport operations|airport planning|air transportation/i,
    title: "Travel operations: accurate information and duty of care",
    notes: [
      "Confirm the traveler's needs, service scope, dates, and current official requirements before communicating arrangements.",
      "Distinguish confirmed information from estimates, and direct travelers to current authorized sources for entry, safety, or operational rules.",
      "Protect customer information and follow the organization's escalation procedures when a plan changes."
    ],
    card: ["What should be verified before sharing travel requirements?", "Current official requirements and whether they apply to the traveler's specific situation."],
    source: "hospitality"
  },
  {
    match: /teaching english|teaching social studies|teaching mathematics/i,
    title: "Teaching a subject: outcomes, disciplinary thinking, assessment",
    notes: [
      "Identify the subject learning outcome and the kind of reasoning learners should practice.",
      "Select examples and activities that make that reasoning visible, then assess it using aligned criteria.",
      "Use learner evidence to adjust instruction and avoid confusing memorized facts with demonstrated understanding."
    ],
    card: ["What should a subject assessment align with?", "The intended learning outcome and the disciplinary reasoning learners practiced."],
    source: "education"
  },
  {
    match: /phonetics|phonology|grammar and syntax|semantics and pragmatics|morphology|discourse analysis|world englishes|academic writing|writing for development/i,
    title: "Language study: form, meaning, context",
    notes: [
      "Language can be studied through sound, word structure, sentence structure, meaning, and use in context; identify which level a claim concerns.",
      "Use examples as evidence and distinguish a descriptive account of language from a judgment about how people should speak.",
      "Language varies by community, context, and purpose; avoid treating one variety as the only legitimate form."
    ],
    card: ["Why distinguish language description from language judgment?", "A description analyzes how language is used; a judgment evaluates it against a chosen norm."],
    source: "communication"
  },
  {
    match: /geography|economic history|asian history|local history|historiography|archival studies|historical methods|introduction to history/i,
    title: "Place and history: evidence, scale, perspective",
    notes: [
      "Define the place, period, and scale under study; patterns can look different when viewed locally or across a wider region.",
      "Compare sources and consider who produced them, their purpose, and what they leave out.",
      "Support conclusions with evidence and distinguish documented claims from interpretation."
    ],
    card: ["What should a historical or geographic claim identify?", "Its place or period, scale, evidence, and limits."],
    source: "social"
  },
  {
    match: /social problems|social institutions|sociological theory|population studies|philippine society|gender and society|community studies|development perspectives|community development/i,
    title: "Society and development: structures, voice, context",
    notes: [
      "Describe the social issue and the people or institutions affected without assuming that one experience represents everyone.",
      "Consider structural conditions, historical context, and whose perspectives are present or missing in the evidence.",
      "A proposed response should identify who participates, who benefits, and how effects will be evaluated."
    ],
    card: ["What should a social analysis check about the perspectives it uses?", "Whose perspectives are represented, whose may be missing, and how that affects the conclusion."],
    source: "social"
  },
  {
    match: /gender studies/i,
    title: "Gender studies: institutions, experience, representation",
    notes: [
      "Examine how gender is shaped by social institutions, cultural context, and historical conditions.",
      "Consider how gender intersects with other identities and structures, and avoid treating any group as uniform.",
      "Support analysis with evidence and include the perspectives of people affected by the issue."
    ],
    card: ["Why should gender analysis consider intersecting identities and context?", "Experiences and outcomes are shaped by multiple identities and social conditions, not gender alone."],
    source: "social"
  },
  {
    match: /development studies/i,
    title: "Development studies: define progress and examine power",
    notes: [
      "Define what development means in the question, including whose well-being or opportunities are being considered.",
      "Examine institutions, histories, resource distribution, and participation that shape possible change.",
      "Use evidence from affected communities and state who benefits, who bears costs, and what remains uncertain."
    ],
    card: ["What should a development analysis ask about a proposed change?", "How progress is defined, whose perspectives shape it, and how benefits and costs are distributed."],
    source: "social"
  },
  {
    match: /^education$/i,
    title: "Education: outcomes, participation, evidence",
    notes: [
      "Education involves planned learning within social and institutional contexts; identify the intended learning and learner group.",
      "Use appropriate activities and assessment to gather evidence of that learning.",
      "Consider access, inclusion, and context when interpreting outcomes."
    ],
    card: ["What should guide the design of a learning activity?", "The intended learning outcome, learner context, and evidence needed to assess progress."],
    source: "education"
  },
  {
    match: /art appreciation|art history|art criticism|contemporary art|visual research|visual design fundamentals|color theory|2d design|3d design|visual design|design fundamentals/i,
    title: "Visual arts: form, context, intention",
    notes: [
      "Describe observable choices such as composition, material, color, scale, and form before interpreting their meaning.",
      "Consider the work's context, intended audience, and cultural setting; avoid presenting one interpretation as the only possible reading.",
      "Support critique with specific evidence from the work and distinguish personal response from a factual claim."
    ],
    card: ["What should support a visual-art interpretation?", "Specific observable evidence from the work, considered in context."],
    source: "arts"
  },
  {
    match: /drawing fundamentals|painting studio|sculpture|figure drawing|printmaking|digital imaging|digital illustration|typography|photography|audio production|video production|animation fundamentals|studio practice|portfolio development|portfolio project/i,
    title: "Studio practice: brief, iteration, documentation",
    notes: [
      "Translate the brief into purpose, audience, medium, constraints, and criteria before producing work.",
      "Make drafts, compare alternatives, and use feedback to revise while documenting important decisions.",
      "Credit influences and use others' work only with permission or under terms that permit the planned use."
    ],
    card: ["What should guide revision in a studio project?", "The brief's purpose, audience, constraints, criteria, and relevant feedback."],
    source: "arts"
  },
  {
    match: /architectural design|building technology|building systems|site planning|space planning|residential design|commercial design|lighting design|furniture design|utilities/i,
    title: "Designing spaces: users, function, site, coordination",
    notes: [
      "Start with users, activities, and the brief; translate needs into spatial requirements before choosing a form.",
      "Check circulation, accessibility, site conditions, materials, and building systems as related design constraints.",
      "Use current Philippine codes and qualified review for real projects; a classroom concept is not construction documentation."
    ],
    card: ["What should shape a space-planning proposal?", "User activities, the brief, circulation, accessibility, and site constraints."],
    source: "architecture"
  },
  {
    match: /plant pathology|agricultural engineering|agricultural extension|aquaculture|water quality|fish taxonomy|fish nutrition|fish processing|forest mensuration|forest protection|silviculture|forest policy/i,
    title: "Natural-resource studies: ecosystem, place, measurement",
    notes: [
      "Define the organism or resource, site, time period, and conditions relevant to the question.",
      "Choose a measurement appropriate to the question, document how it was collected, and note uncertainty.",
      "Use current local environmental and safety requirements; findings from one site or species may not generalize to another."
    ],
    card: ["What must be documented when measuring a natural resource?", "The subject or site, timing, method, units, and relevant conditions."],
    source: "agriculture"
  },
  {
    match: /ship construction|ship stability|cargo handling|bridge watchkeeping|voyage planning|auxiliary machinery|engine room operations|ship maintenance|meteorology/i,
    title: "Shipboard studies: approved procedure and risk awareness",
    notes: [
      "Shipboard tasks depend on assigned duties, vessel-specific procedures, current approved materials, and applicable maritime rules.",
      "Study the relevant principle in class, but use supervised practical training and approved checklists for operational tasks.",
      "Report uncertainty and hazards through the vessel's proper chain of responsibility; these notes are not operational instructions."
    ],
    card: ["What governs an operational shipboard task?", "Assigned duties, vessel-specific approved procedures, supervision, and applicable current requirements."],
    source: "maritime"
  },
  {
    match: /airport operations|air transportation|airport planning|propulsion|aerospace systems/i,
    title: "Aviation systems: interfaces, requirements, verification",
    notes: [
      "Aviation systems depend on coordinated people, equipment, procedures, and operating conditions.",
      "Use current approved technical materials for the relevant system and jurisdiction; generic descriptions do not establish an operational limit.",
      "Verify claims against authorized documentation and escalate uncertainty through the responsible qualified supervisor."
    ],
    card: ["Why are generic study notes insufficient for an aviation operating limit?", "Limits depend on approved aircraft or system documentation and the applicable operation."],
    source: "aviation"
  },
  {
    match: /foundations of public safety|disaster risk reduction|incident command|community safety|public safety operations|emergency response|physical readiness|institutional field training|service-specific/i,
    title: "Public safety: preparedness, roles, and official procedure",
    notes: [
      "Preparedness begins with understanding hazards, affected communities, assigned roles, and the approved local plan.",
      "Use current official training and incident procedures; responsibilities and protocols depend on the jurisdiction and agency.",
      "In an actual emergency, follow directions from authorized responders and established emergency channels."
    ],
    card: ["What should guide action during an actual public-safety incident?", "Current official procedures and directions from authorized responders."],
    source: "law"
  },
  {
    match: /install and configure computer systems|set up computer servers|maintain and repair computer systems|prepare program design|develop basic programs|develop object-oriented programs|test and document software/i,
    title: "ICT competency: requirements, authorized tools, verification",
    notes: [
      "Read the task requirements and assessment criteria before beginning; confirm the permitted tools and work environment.",
      "Work within the official competency standard and approved safety and security procedures, and ask for supervision when needed.",
      "Test and document the result against the criteria. This review does not replace the current TESDA Training Regulations or hands-on assessment."
    ],
    card: ["How should a learner verify an ICT competency task?", "Check the completed work against the current task requirements and assessment criteria."],
    source: "tesda"
  },
  {
    match: /journalize transactions|post transactions|prepare trial balance|reconcile accounts/i,
    title: "Bookkeeping: trace a transaction through the records",
    notes: [
      "Use the source document and accounting rules taught for the task to identify accounts and the reporting period.",
      "Record each entry with equal total debits and credits, then post it to the relevant ledger accounts.",
      "Reconcile balances and investigate differences using supporting evidence; tax and reporting requirements depend on current Philippine rules."
    ],
    card: ["What should be done when a ledger balance does not reconcile?", "Investigate the difference and trace it to supporting records rather than forcing a balance."],
    source: "business"
  },
  {
    match: /applications development and emerging technologies|emerging technologies/i,
    title: "Evaluating a new technology",
    notes: [
      "Describe the user need and constraints before selecting a technology; novelty alone does not establish usefulness.",
      "Compare a proposed tool with feasible alternatives for cost, compatibility, privacy, security, accessibility, and maintainability.",
      "Pilot changes in a controlled setting, measure the intended outcome, and state evidence limitations before recommending wider adoption."
    ],
    card: ["What evidence should support adopting an emerging technology?", "Evidence that it meets a defined need better than feasible alternatives while accounting for risks and constraints."],
    source: "computing"
  },
  {
    match: /it infrastructure|infrastructure|cloud computing/i,
    title: "Infrastructure: availability, capacity, and dependencies",
    notes: [
      "An IT service depends on connected components such as compute, storage, networks, identity, and operating procedures.",
      "Map dependencies and service requirements before changing infrastructure; a single component failure can affect dependent services.",
      "Use approved access, backup, monitoring, and recovery procedures, and document configuration changes."
    ],
    card: ["Why map service dependencies before an infrastructure change?", "A component change or failure may affect services that depend on it."],
    source: "computing"
  },
  {
    match: /digital logic|microprocessor|computer architecture|embedded systems/i,
    title: "Digital systems: represent, combine, and verify states",
    notes: [
      "Digital logic represents information using discrete states, commonly binary 0 and 1.",
      "Combinational logic produces outputs from current inputs; sequential logic also depends on stored state.",
      "Use a truth table or timing evidence to check the intended behavior, and follow lab safety and equipment limits."
    ],
    card: ["How does sequential logic differ from combinational logic?", "Sequential logic depends on stored state as well as current inputs."],
    source: "computing"
  },
  {
    match: /strength of materials|materials science|material science/i,
    title: "Materials: stress, strain, and limits of a model",
    notes: [
      "Stress describes internal force per unit area, while strain describes relative deformation; both require a stated model and units.",
      "Material response depends on the material, loading, geometry, temperature, and other conditions.",
      "Classroom idealizations do not establish a safe design. Use the assigned material data, applicable standards, and qualified review for real structures."
    ],
    card: ["How do stress and strain differ?", "Stress relates force to area; strain describes relative deformation."],
    source: "engineering"
  },
  {
    match: /material and energy balances|mass balance|energy balance|fluid flow|fluid mechanics|heat and mass transfer|separation processes|chemical reaction engineering|process control|plant design/i,
    title: "Process engineering: define a control volume",
    notes: [
      "A material balance accounts for mass entering, leaving, and accumulating in a defined system over a stated interval.",
      "An energy balance accounts for energy transfers and accumulation under stated assumptions; sign conventions and units must be consistent.",
      "Real process operation requires validated data, approved procedures, and safety review; a study calculation is not an operating instruction."
    ],
    card: ["What must be defined before writing a process balance?", "The system or control volume, interval, streams, and assumptions."],
    source: "engineering"
  },
  {
    match: /industrial engineering|work study|operations research|quality engineering|production systems|facilities planning|ergonomics|supply chain|systems simulation|engineering economy/i,
    title: "Industrial engineering: model a process before improving it",
    notes: [
      "Define the process boundary, objective, constraints, and people affected before measuring performance.",
      "Use a representative baseline and state how measures were collected; a metric can be misleading if it omits quality, safety, or workload.",
      "Compare improvement options using explicit assumptions, then check whether the change achieves its goal without unacceptable side effects."
    ],
    card: ["What should be defined before comparing process improvements?", "The process boundary, objective, constraints, affected people, and measurement method."],
    source: "engineering"
  },
  {
    match: /hematology|immunology|serology|bacteriology|histopathologic|blood banking|mycology|virology|clinical laboratory/i,
    title: "Clinical laboratory science: specimen, method, interpretation",
    notes: [
      "A laboratory result depends on specimen suitability, collection and handling, method performance, and quality controls.",
      "Interpret a result using the method's validated limits and the relevant clinical context; a result alone is not a diagnosis.",
      "Follow current laboratory biosafety, quality, privacy, and reporting procedures under qualified supervision."
    ],
    card: ["Why does specimen handling matter to a laboratory result?", "Collection and handling can affect whether the result reliably reflects the sample."],
    source: "health"
  },
  {
    match: /pharmaceutical calculations|pharmaceutics|pharmacognosy|pharmacotherapeutics|pharmaceutical analysis|pharmacy practice|pharmacy administration/i,
    title: "Pharmacy studies: verify the source and calculation",
    notes: [
      "Medication-related calculations require clearly identified quantities, units, and the prescribed method; independently check the result.",
      "Medication information and practice requirements can change and depend on the patient, product, and jurisdiction.",
      "Use current approved references and qualified supervision. These study notes are not dosing or treatment instructions."
    ],
    card: ["What should be checked in a medication-related calculation?", "The source values, units, method, and result using an independent check and current approved references."],
    source: "health"
  },
  {
    match: /physical therapy|kinesiology|therapeutic exercise|orthopedic physical|physical agents|neurologic physical|cardiopulmonary physical/i,
    title: "Rehabilitation: function, goals, and individual assessment",
    notes: [
      "Rehabilitation planning begins with an individual's assessment, functional goals, context, and preferences.",
      "Interventions and progression depend on clinical findings, contraindications, and professional scope; a general principle is not an individual treatment plan.",
      "Document response and reassess goals using appropriate measures under qualified clinical supervision."
    ],
    card: ["What should guide an individual's rehabilitation plan?", "Assessment findings, functional goals, context, preferences, and qualified professional judgment."],
    source: "health"
  },
  {
    match: /maternal and child health|obstetrics|newborn care|family planning|community health nursing/i,
    title: "Maternal and child health: person-centered, current guidance",
    notes: [
      "Care depends on the person's current assessment, informed preferences, and relevant clinical context.",
      "Use current local clinical guidance and recognize warning signs according to the approved training and escalation pathway.",
      "Protect privacy and dignity; general review material must never replace qualified care or emergency services."
    ],
    card: ["What should guide maternal or newborn care decisions?", "Current assessment, informed preferences, applicable local clinical guidance, and qualified professional judgment."],
    source: "health"
  },
  {
    match: /public health|epidemiology|disease prevention|health promotion|health policy|environmental health|public health nutrition|health education/i,
    title: "Public health: population, determinants, and evidence",
    notes: [
      "Public-health analysis defines the population, health outcome, time period, and data source being studied.",
      "Rates and comparisons depend on clear denominators and consistent definitions; association does not prove cause.",
      "Interventions should consider social determinants, community context, potential harms, and evaluation evidence."
    ],
    card: ["What must be defined to interpret a population health rate?", "The population or denominator, outcome definition, time period, and data source."],
    source: "health"
  },
  {
    match: /foundations of education|the teaching profession|teaching internship|field study|teacher education/i,
    title: "The teaching profession: standards, ethics, reflection",
    notes: [
      "Teaching practice is guided by learner welfare, professional ethics, applicable standards, and the responsibilities of the school context.",
      "Use observation and evidence to reflect on instruction; separate what was observed from interpretations about a learner.",
      "Protect student information and follow the mentor teacher's and institution's current policies."
    ],
    card: ["What should a reflective teaching record distinguish?", "Observed evidence from the teacher's interpretation and proposed next steps."],
    source: "education"
  },
  {
    match: /college algebra|plane and solid geometry|abstract algebra|mathematical problem solving|teaching mathematics/i,
    title: "Mathematical reasoning: definitions, examples, proof",
    notes: [
      "Use definitions precisely; a claim is only as broad as the conditions under which it was established.",
      "Test a conjecture with examples and counterexamples, then use an appropriate logical argument or proof.",
      "In teaching mathematics, make learner reasoning visible and connect representations without treating a procedure as understanding by itself."
    ],
    card: ["What can a counterexample show?", "That a proposed general statement is false under at least one allowed case."],
    source: "science"
  },
  {
    match: /grammar and composition|survey of english literature|world literature|philippine literature|literature/i,
    title: "Literary reading: form, context, and evidence",
    notes: [
      "An interpretation should connect specific textual evidence with a claim about language, form, or meaning.",
      "Consider genre, historical and cultural context, narrator or speaker, and whose perspective is represented.",
      "Distinguish what the text states from an inference, and acknowledge alternative readings when evidence supports them."
    ],
    card: ["What supports a literary interpretation?", "A clear claim connected to specific textual evidence and relevant context."],
    source: "social"
  },
  {
    match: /philippine history|world history|history of/i,
    title: "Historical inquiry: source, context, corroboration",
    notes: [
      "Ask who created a historical source, when, for whom, and for what purpose.",
      "Corroborate important claims with independent evidence; one source may be incomplete or shaped by its perspective.",
      "Place events in context and distinguish contemporary evidence from later interpretation."
    ],
    card: ["Why corroborate a historical source?", "To test its claims against other evidence and account for its perspective and limits."],
    source: "social"
  },
  {
    match: /sociology|anthropology|social research/i,
    title: "Social inquiry: concepts, context, and positionality",
    notes: [
      "Define the social concept and population under study; avoid treating a category as if every member shares the same experience.",
      "Interpret observations in their historical, cultural, and institutional context.",
      "Consider the researcher's position, ethical responsibilities, and limits of the evidence before making a broader claim."
    ],
    card: ["Why should social analysis avoid treating a group as uniform?", "People within a group may have different experiences, contexts, and perspectives."],
    source: "social"
  },
  {
    match: /political theory|comparative politics|international relations|philippine politics|political analysis|philippine government|public policy|local government administration|public organization|public personnel administration/i,
    title: "Politics and governance: institutions, authority, evidence",
    notes: [
      "Identify the institution, level of government, and legal authority relevant to a policy or political question.",
      "Separate descriptive evidence about what happened from normative arguments about what should happen.",
      "Compare affected interests and institutional constraints, and check Philippine primary sources for current legal details."
    ],
    card: ["What should be separated in a policy analysis?", "Evidence describing conditions from normative arguments about preferred outcomes."],
    source: "law"
  },
  {
    match: /public budgeting|budgeting|public finance|public administration/i,
    title: "Public budgeting: priorities, authority, accountability",
    notes: [
      "A public budget expresses planned priorities and must be understood within the applicable legal and institutional process.",
      "Compare proposed allocations with stated objectives, available resources, and authorized purposes.",
      "Use current official documents and distinguish an approved appropriation from actual expenditure or an expected outcome."
    ],
    card: ["Why distinguish an approved budget from actual spending?", "An authorization or plan is not the same as recorded expenditure or achieved results."],
    source: "law"
  },
  {
    match: /persons and family relations|obligations and contracts|civil procedure|criminal procedure|evidence|trial technique|regulatory framework/i,
    title: "Philippine legal study: rule, elements, authority, application",
    notes: [
      "Identify the legal issue and the jurisdiction, then consult the current primary text and applicable rules.",
      "Break a rule into its elements and apply each element to the stated facts; distinguish established facts from assumptions.",
      "Check amendments and controlling decisions. This educational outline is not legal advice and must not replace current Philippine legal authorities."
    ],
    card: ["How should a legal rule be applied to a fact pattern?", "Identify the current applicable rule, state its elements, and analyze each element against the facts."],
    source: "law"
  },
  {
    match: /criminalistics|forensic|crime detection|crime investigation|investigation principles|juvenile delinquency|correctional administration/i,
    title: "Criminal justice study: evidence, rights, procedure",
    notes: [
      "Distinguish an allegation, an observation, and a conclusion; document the basis for each factual statement.",
      "Evidence handling, investigation, and justice procedures must follow current law, rights protections, and authorized protocols.",
      "Do not infer guilt from an isolated fact. This review is academic and does not instruct real investigations or replace official training."
    ],
    card: ["Why must an allegation be distinguished from an established fact?", "An allegation is a claim to assess; it is not itself proof that the claim is true."],
    source: "law"
  },
  {
    match: /business continuity|risk management|enterprise risk/i,
    title: "Business continuity: critical services and recovery",
    notes: [
      "Identify critical activities, dependencies, impacts of disruption, and the time period in which recovery matters.",
      "A continuity plan assigns responsibilities and recovery priorities; it should be tested and updated as services change.",
      "Use organization-approved plans during an actual incident. A study outline is not an emergency response procedure."
    ],
    card: ["What should a continuity plan identify?", "Critical activities, dependencies, responsibilities, and recovery priorities."],
    source: "business"
  },
  {
    match: /mathematics for economists|econometrics/i,
    title: "Economics models: assumptions and interpretation",
    notes: [
      "Translate an economic question into defined variables, relationships, and assumptions before calculating.",
      "Interpret a mathematical result in the economic context and state what the model holds constant.",
      "A model illustrates implications under its assumptions; it is not automatically a prediction of real outcomes."
    ],
    card: ["Why state what an economic model holds constant?", "Those assumptions determine how its result can be interpreted."],
    source: "business"
  },
  {
    match: /accounting|auditing|income tax|taxation|cost accounting|financial reporting/i,
    title: "Accounting: transactions, records, and reporting basis",
    notes: [
      "Accounting records classify and summarize economic events for users. Identify the entity and reporting period before interpreting a figure.",
      "Under double-entry bookkeeping, each journal entry balances total debits and credits; the account effects depend on the transaction and accounting rules.",
      "Financial reporting and tax treatment depend on the applicable standards, jurisdiction, and period. Verify current Philippine rules and course materials rather than relying on a generic example."
    ],
    card: ["What must balance in a double-entry journal entry?", "The total debits and total credits."],
    source: "business"
  },
  {
    match: /marketing/i,
    title: "Marketing: customer need, value, and evidence",
    notes: [
      "Marketing begins with understanding customer needs and the value an organization can offer, not simply with advertising.",
      "Segmentation groups a market using relevant characteristics; a target segment is a deliberate choice that should match the organization's goals and capacity.",
      "Evaluate a marketing action using a defined objective and suitable evidence. Results depend on context and should not be assumed from a framework alone."
    ],
    card: ["What is the purpose of market segmentation?", "To group a broad market into segments with relevant shared characteristics or needs."],
    source: "business"
  },
  {
    match: /management|organizational behavior|human behavior in organizations|leadership/i,
    title: "Management: plan, organize, lead, and evaluate",
    notes: [
      "A common management framework includes planning, organizing, leading, and controlling; these functions interact rather than always occurring once in a fixed order.",
      "Set an objective, assign responsibilities and resources, communicate expectations, and review evidence of progress.",
      "Management choices should account for context, stakeholders, ethical responsibilities, and unintended effects."
    ],
    card: ["Name the four commonly taught management functions.", "Planning, organizing, leading, and controlling."],
    source: "business"
  },
  {
    match: /business finance|finance|financial management|investment/i,
    title: "Finance: cash flows, time, and risk",
    notes: [
      "Financial decisions compare cash flows across time; the timing and risk of cash flows affect their value.",
      "State assumptions, units, and the period used in a calculation. Do not compare amounts from different periods without making the time basis clear.",
      "A projection is conditional on its assumptions, not a guaranteed outcome. Check the relevant current course model and applicable regulations."
    ],
    card: ["Why must a finance comparison state its time period?", "Because cash-flow timing affects value and amounts from different periods are not directly comparable."],
    source: "business"
  },
  {
    match: /economics|microeconomics|macroeconomics/i,
    title: "Economics: choices, incentives, and constraints",
    notes: [
      "Economic analysis studies choices under constraints and how incentives and institutions affect those choices.",
      "A model simplifies reality to examine a question; identify its assumptions before applying its conclusion.",
      "Distinguish a positive claim about what is from a normative judgment about what ought to be, and use evidence appropriate to the claim."
    ],
    card: ["Why should an economic model's assumptions be stated?", "Its conclusions depend on the simplifications and conditions the model uses."],
    source: "business"
  },
  {
    match: /business research|feasibility study|business policy|strategic management/i,
    title: "Business analysis: problem, evidence, options",
    notes: [
      "Define the decision or research problem, affected stakeholders, and criteria for a useful outcome.",
      "Gather evidence from appropriate sources and separate verified information from estimates and assumptions.",
      "Compare realistic options, including costs, risks, and limitations; a feasibility conclusion depends on the evidence and assumptions used."
    ],
    card: ["What should a feasibility conclusion disclose?", "The evidence, assumptions, constraints, and risks on which it depends."],
    source: "business"
  },
  {
    match: /curriculum development|principles of teaching|teaching strategies|assessment in learning|assessment of learning|classroom assessment/i,
    title: "Instructional design: outcomes, practice, and assessment",
    notes: [
      "Write a clear learning outcome describing what learners should know or demonstrate.",
      "Align teaching activities with the outcome and gather evidence that actually measures it; a mismatch makes results difficult to interpret.",
      "Use formative feedback during learning to guide next steps. Assessment criteria and adjustments should be transparent and appropriate to learners."
    ],
    card: ["What does constructive alignment connect?", "Learning outcomes, teaching and learning activities, and assessment."],
    source: "education"
  },
  {
    match: /inclusive education|special needs|child and adolescent development|educational psychology|psychology/i,
    title: "Learners and context: use evidence, avoid assumptions",
    notes: [
      "Learners differ in prior knowledge, language, development, access, and context; do not infer an individual's ability from a group-level description.",
      "Use multiple relevant observations and assessment evidence to understand learning needs, while protecting privacy.",
      "Adapt support and check whether it helps. Follow applicable professional guidance and consult qualified specialists where required."
    ],
    card: ["Why should a group-level learning theory not be treated as an individual diagnosis?", "Group-level frameworks do not establish an individual learner's needs or condition."],
    source: "education"
  },
  {
    match: /nursing|patient safety|clinical|pharmacology|midwif|medical|microbiology and parasitology/i,
    title: "Patient-centered care: evidence, communication, and safety",
    notes: [
      "Safe care requires a current assessment, clear communication, and actions within the practitioner's authorized role and competence.",
      "Use the applicable clinical guideline and local protocol; verify medication, procedure, and escalation details with current approved references and qualified supervision.",
      "Protect patient dignity and confidentiality, document according to policy, and report concerns through the proper clinical pathway. This study module is not a care instruction."
    ],
    card: ["What should guide a clinical action?", "A current assessment, applicable approved guidance, and the practitioner's authorized role and competence."],
    source: "health"
  },
  {
    match: /chemistry|chemical|organic chemistry|analytical chemistry/i,
    title: "Chemistry: particles, quantities, and evidence",
    notes: [
      "Chemical explanations connect observations at the macroscopic scale with particles and symbolic representations such as formulas and equations.",
      "A balanced chemical equation conserves atoms of each element; use coefficients to represent relative amounts, not changes to chemical formulas.",
      "Record units and conditions, follow laboratory safety instructions, and distinguish measured observations from an interpretation."
    ],
    card: ["What does balancing a chemical equation conserve?", "The number of atoms of each element on both sides of the equation."],
    source: "science"
  },
  {
    match: /biology|microbiology|anatomy|physiology|ecology|genetics|botany|zoology/i,
    title: "Biology: structure, function, and evidence",
    notes: [
      "Biology explains living systems at interacting levels, from molecules and cells to organisms and populations.",
      "Connect a proposed function to the structure or process that supports it, and identify the scale being discussed.",
      "Interpret biological evidence in context; species, environments, and individual organisms vary, so avoid turning a general pattern into an absolute rule."
    ],
    card: ["Why identify the biological scale when explaining a process?", "The meaning and evidence can differ across molecular, cellular, organism, and population levels."],
    source: "science"
  },
  {
    match: /physics|statics|dynamics|mechanics|thermodynamics|fluid mechanics|heat transfer/i,
    title: "Physics: model a system and check units",
    notes: [
      "Define the system, relevant quantities, and assumptions before choosing a physical model.",
      "Use consistent units and show how the relationship applies to the stated conditions; a formula is valid only within its assumptions.",
      "Check dimensions and whether the result's direction and magnitude make physical sense before interpreting it."
    ],
    card: ["What is a useful first check on a physics calculation?", "Check that the units are consistent and the result is physically reasonable."],
    source: "science"
  },
  {
    match: /engineering drawing|technical drawing|engineering design|design project|capstone project|thesis|practicum|internship|field study|related learning experience/i,
    title: "Applied project work: brief, evidence, and review",
    notes: [
      "Translate the approved brief into objectives, deliverables, constraints, and criteria for review before beginning work.",
      "Keep a record of decisions, evidence, revisions, and relevant approvals so another person can trace how the result was produced.",
      "Follow supervisor direction, confidentiality rules, safety procedures, and applicable standards; do not claim a project result beyond the evidence gathered."
    ],
    card: ["What should be agreed before starting an applied project or placement?", "Objectives, deliverables, constraints, review criteria, supervision, and applicable safety or confidentiality rules."],
    source: "engineering"
  },
  {
    match: /civil engineering|structural|surveying|geotechnical|transportation engineering|hydraulics/i,
    title: "Civil engineering: loads, ground, and design assumptions",
    notes: [
      "A civil-engineering model depends on defined geometry, materials, loads, boundary conditions, and assumptions.",
      "Check calculations against the applicable design standard and project data; do not infer that a simplified classroom result is safe for construction.",
      "Document units, sources, and review steps, and refer real design decisions to appropriately qualified professionals."
    ],
    card: ["Why is a classroom calculation not automatically a construction design?", "Real design requires validated project data, applicable current standards, and qualified professional review."],
    source: "engineering"
  },
  {
    match: /electrical|circuit|electronics|electromagnetics|power systems|electrical machines|instrumentation|control systems/i,
    title: "Electrical systems: define the circuit and verify safely",
    notes: [
      "Identify circuit elements, connections, reference directions, and given values before applying a model.",
      "Check that relationships and units are consistent, and state the assumptions behind an idealized component model.",
      "Do not perform live electrical work from study notes. Follow current laboratory and workplace safety procedures under qualified supervision."
    ],
    card: ["What should be identified before analyzing a circuit?", "Its components, connections, reference directions, given values, and modeling assumptions."],
    source: "engineering"
  },
  {
    match: /mechanical engineering|machine design|manufacturing processes|mechanical vibrations|plant engineering/i,
    title: "Mechanical systems: forces, motion, and constraints",
    notes: [
      "Define the system boundary and identify forces, motion, material properties, and operating constraints relevant to the problem.",
      "Choose a model that matches the conditions and state simplifications; validate important inputs before relying on calculated results.",
      "Safety factors, failure modes, and applicable design codes require course-specific and professional review; do not treat a generic example as a specification."
    ],
    card: ["What should be stated when using a simplified mechanical model?", "The system boundary, relevant conditions, and assumptions that limit the model."],
    source: "engineering"
  },
  {
    match: /law|legal|constitutional|criminal justice|criminology|public administration|governance|political science/i,
    title: "Legal and public-service analysis: rule, authority, facts",
    notes: [
      "Frame the issue and identify the relevant jurisdiction before applying a rule or policy.",
      "Prefer current primary authorities and distinguish their text from commentary; verify amendments and whether the authority applies to the facts.",
      "Explain the reasoning and limits. A study aid is not legal advice, a government directive, or a substitute for official current sources."
    ],
    card: ["What must be confirmed before applying a legal or policy rule?", "Its jurisdiction, current status, and applicability to the facts."],
    source: "law"
  },
  {
    match: /journalism|communication|media|broadcast|language|linguistics|public relations|development communication/i,
    title: "Communication: audience, evidence, and meaning",
    notes: [
      "Define the communication purpose and audience before choosing a message, language, format, or channel.",
      "Support factual claims with verifiable evidence, distinguish fact from opinion, and represent sources and affected people fairly.",
      "Review a message for clarity, accessibility, context, and likely interpretation; revise when feedback shows misunderstanding."
    ],
    card: ["What should guide the choice of a communication channel?", "The purpose, intended audience, context, and accessibility needs."],
    source: "communication"
  },
  {
    match: /tourism|hospitality|food and beverage|cookery|culinary|housekeeping|front office/i,
    title: "Hospitality and tourism: service standards and guest needs",
    notes: [
      "Identify the guest's request and the service standard that applies before deciding what action to take.",
      "Follow the current workplace procedures for food safety, hygiene, accessibility, and emergencies; requirements depend on the task and jurisdiction.",
      "Communicate clearly, protect personal information, and refer issues beyond your authority to the responsible supervisor."
    ],
    card: ["What should a worker do when a guest request exceeds their authority?", "Explain the next step clearly and refer it to the responsible supervisor."],
    source: "hospitality"
  },
  {
    match: /architecture|built environment|interior design|landscape architecture|urban planning/i,
    title: "Architecture and place: brief, users, site, constraints",
    notes: [
      "A design brief identifies intended users, activities, performance needs, and project constraints.",
      "Site conditions, circulation, accessibility, climate, and context influence design choices; document how evidence informs the proposal.",
      "Verify dimensions and compliance with current Philippine codes and qualified review before real-world use; this study aid is not construction advice."
    ],
    card: ["What should inform an architectural design proposal?", "The brief, users, site conditions, accessibility needs, and applicable constraints."],
    source: "architecture"
  },
  {
    match: /agriculture|agronomy|crop|soil|forestry|fisher|animal science|environmental science|environmental management/i,
    title: "Agriculture and environment: site-specific evidence",
    notes: [
      "Describe the site, organisms, and conditions relevant to the question; environmental and agricultural results can vary by location and season.",
      "Record observation methods, units, and timing so results can be interpreted and compared appropriately.",
      "Follow current local environmental, animal-welfare, and occupational-safety requirements. Do not turn a general example into an instruction for a specific site."
    ],
    card: ["Why are location and timing important in agricultural or environmental observations?", "Conditions vary by place and season, affecting how observations can be interpreted."],
    source: "agriculture"
  },
  {
    match: /maritime|marine|nautical|seafaring|navigation|shipboard/i,
    title: "Maritime learning: approved procedures and situational context",
    notes: [
      "Maritime duties are governed by assigned roles, vessel procedures, and applicable current standards.",
      "Use approved training material and follow instructor or officer direction; a general reviewer cannot replace required practical training.",
      "For an actual safety situation, use the vessel's approved emergency procedures and communication chain."
    ],
    card: ["What must maritime study notes not replace?", "Approved training, assigned supervision, vessel procedures, and applicable current standards."],
    source: "maritime"
  },
  {
    match: /aviation|aeronautic|pilot|aircraft|flight/i,
    title: "Aviation learning: approved sources and limits",
    notes: [
      "Aviation procedures, aircraft limitations, and operating requirements depend on the aircraft, operation, and jurisdiction.",
      "Use current approved manuals, training materials, and authorized instruction; a general study reviewer is not operational guidance.",
      "If a procedure or limit is uncertain during an actual operation, use the approved verification and supervisory process."
    ],
    card: ["What source should control an aircraft-specific procedure?", "The current approved material for that aircraft and operation, together with authorized instruction."],
    source: "aviation"
  },
  {
    match: /tesda|competency|training regulation/i,
    title: "TESDA competency: evidence against performance criteria",
    notes: [
      "A competency-based qualification is assessed against defined standards and evidence requirements for the named qualification.",
      "Study the current Training Regulations and practice only under the specified conditions, tools, and safety procedures.",
      "Confirm the latest standards and assessment arrangements with TESDA or an authorized assessment center; this module is not an assessment checklist."
    ],
    card: ["What should TESDA assessment evidence demonstrate?", "Performance against the applicable competency standards and criteria for the named qualification."],
    source: "tesda"
  }
];

function fieldPrimerFor(program, subject) {
  const isTesda = program.credential === "TESDA qualification";
  const category = program.category.replace(/^TESDA\s*[·-]\s*/i, "");
  const primer = fieldPrimers.find(entry => entry.match.test(`${category} ${subject.name}`));
  if (!primer) {
    throw new Error(`No factual study primer is configured for ${program.category} · ${subject.name}.`);
  }

  let sourceKey = "social";
  if (isTesda) sourceKey = "tesda";
  else if (/computing|information technology/i.test(category)) sourceKey = "computing";
  else if (/business/i.test(category)) sourceKey = "business";
  else if (/education/i.test(category)) sourceKey = "education";
  else if (/health/i.test(category)) sourceKey = "health";
  else if (/engineering/i.test(category)) sourceKey = "engineering";
  else if (/law|public service|military|uniformed/i.test(category)) sourceKey = "law";
  else if (/hospitality|tourism/i.test(category)) sourceKey = "hospitality";
  else if (/science|mathematics/i.test(category)) sourceKey = "science";
  else if (/communication|language/i.test(category)) sourceKey = "communication";
  else if (/arts|design/i.test(category)) sourceKey = "arts";
  else if (/architecture|built environment/i.test(category)) sourceKey = "architecture";
  else if (/agriculture|environment/i.test(category)) sourceKey = "agriculture";
  else if (/maritime/i.test(category)) sourceKey = "maritime";
  else if (/aviation/i.test(category)) sourceKey = "aviation";

  return {
    moduleTitle: `Module 1 · ${subject.name}`,
    title: `${subject.name} · ${primer.title}`,
    summary: `A readable starting point for ${subject.name}: use these general field practices, then confirm course-specific definitions and methods with your syllabus.`,
    notes: [...primer.notes, "This is an original field-level study aid, not a claim about your school's exact syllabus. The linked resource is further reading, not a source for every sentence; check local requirements and your instructor's material."],
    cards: [primer.card],
    sources: [fieldPrimerSources[sourceKey]],
    isPrimer: true
  };
}

function courseModuleFor(program, subject) {
  const rule = courseModuleRules.find(entry => entry.match.test(subject.name));
  if (!rule) return fieldPrimerFor(program, subject);
  return {
    moduleTitle: `Module 1 · ${subject.name}`,
    title: rule.title,
    summary: `A focused introductory topic for ${subject.name}. Use the linked reference to study further and verify the exact scope against your institution's course outline.`,
    notes: [...rule.notes, "This is original learning material for a common introductory concept, not a verified syllabus for every college. The reference is for further reading; confirm course outcomes, local standards, and assessment details with your instructor."],
    cards: [rule.card],
    sources: [fieldPrimerSources[rule.source]],
    isPrimer: true,
    isCourseModule: true
  };
}

function addCoursePractice(subject) {
  subject.topics = [...subject.topics];
  subject.outlineOnly = false;
}

catalog.forEach(program => program.subjects.forEach(subject => {
  if (subject.topics.length) addCoursePractice(subject);
}));

function ensureCourseTopics(subject) {
  if (subject.topics.some(topic => topic.isPrimer)) return;
  subject.topics = [...subject.topics];
  const program = catalog.find(entry => entry.subjects.includes(subject));
  if (!program) throw new Error(`Cannot find program for subject ${subject.name}.`);
  subject.topics.unshift(courseModuleFor(program, subject));
  subject.topics = subject.topics.slice(0, 20);
  subject.outlineOnly = false;
}

const quizQuestionStems = [
  "What is one key point stated in the review of",
  "What detail from the notes helps explain",
  "Which statement from the review should you remember about",
  "According to the notes, what is one important point about",
  "What fact from this review can you use to describe",
  "Which idea in the notes gives useful context for",
  "What does this review identify as important in",
  "Which note would help you explain",
  "What is one takeaway from the review of",
  "What point in the notes should guide your understanding of",
  "According to this review, what should you know about",
  "Which reviewed detail is relevant to",
  "What statement from the notes summarizes an aspect of",
  "What should a learner recall from this review about",
  "Which point in the review provides context for",
  "What information from the notes applies to",
  "What is one reviewed fact connected with",
  "Which note can you use to describe",
  "What key information does the review provide about",
  "What should you be able to explain from the review of"
];

function topicQuizCards(topic) {
  const authoredCards = topic.cards || [];
  const cards = authoredCards.slice(0, quizCardsPerTopic).map(([question, answer]) => [question, answer]);
  const notes = topic.notes.filter(note =>
    !/original prompt and answer framework|use the definitions, examples, methods|check your response against your syllabus|not a supplied course fact|not a verified syllabus|reference is for further reading/i.test(note)
  );
  const facts = notes.length ? notes : authoredCards.map(([, answer]) => answer);
  if (!facts.length) {
    throw new Error(`Topic "${topic.title}" has no factual notes or authored answers to build its review deck.`);
  }

  while (cards.length < quizCardsPerTopic) {
    const index = cards.length;
    const fact = facts[(index - authoredCards.length) % facts.length];
    cards.push([
      `${quizQuestionStems[index]} ${topic.title}?`,
      fact
    ]);
  }

  return cards;
}

function searchableText(value) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase();
}

function allSubjects() {
  return catalog.flatMap(program => program.subjects.map(subject => ({ program, subject })));
}

function populateFilters() {
  catalog.forEach(program => {
    const option = document.createElement("option");
    option.value = program.id;
    option.textContent = `${program.shortName} — ${program.name}`;
    programFilter.append(option);
  });
}

function visibleSubjects() {
  const query = searchableText(searchInput.value.trim());
  return allSubjects().flatMap(({ program, subject }) => {
    if (programFilter.value !== "all" && programFilter.value !== program.id) return [];
    if (selectedSubject !== "all" && selectedSubject !== `${program.id}:${subject.code}`) return [];

    const programText = searchableText(`${program.name} ${program.shortName} ${program.category || ""} ${program.credential || ""} ${program.duration || ""}`);
    const subjectText = searchableText(`${subject.code} ${subject.name} ${subject.description}`);
    const contextMatches = !query || programText.includes(query) || subjectText.includes(query);
    const matchingTopics = !query ? subject.topics : subject.topics.filter(topic =>
      searchableText(`${topic.title} ${topic.summary} ${topic.notes.join(" ")} ${topic.cards.flat().join(" ")}`).includes(query)
    );
    if (query && !contextMatches && matchingTopics.length === 0) return [];
    return [{ program, subject, topics: query && !contextMatches ? matchingTopics : subject.topics }];
  });
}

function renderSubjectNav(subjects) {
  const entries = subjects.slice(0, visibleSubjectLimit)
    .map(({ program, subject }) => ({ program, subject, key: `${program.id}:${subject.code}` }));
  const unique = new Map(entries.map(entry => [entry.key, entry]));
  subjectNav.replaceChildren();
  const allButton = document.createElement("button");
  allButton.type = "button";
  allButton.textContent = "All subjects";
  allButton.setAttribute("aria-current", String(selectedSubject === "all"));
  allButton.addEventListener("click", () => {
    selectedSubject = "all";
    render();
  });
  subjectNav.append(allButton);

  unique.forEach(({ program, subject, key }) => {
    const button = document.createElement("button");
    button.type = "button";
    button.setAttribute("aria-current", String(selectedSubject === key));
    const name = document.createElement("span");
    name.textContent = subject.name;
    const count = document.createElement("span");
    count.className = "nav-count";
    count.textContent = subject.code;
    button.append(name, count);
    button.addEventListener("click", () => {
      selectedSubject = selectedSubject === key ? "all" : key;
      render();
    });
    subjectNav.append(button);
  });
  subjectCount.textContent = unique.size;
}

function makeTopicButton(program, subject, topic) {
  const button = document.createElement("button");
  button.className = "topic-button";
  button.type = "button";
  const name = document.createElement("span");
  name.textContent = topic.title;
  const arrow = document.createElement("span");
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = "↗";
  button.append(name, arrow);
  button.setAttribute("aria-label", `Study ${topic.title}, ${subject.name}, ${program.shortName}`);
  button.addEventListener("click", () => openTopic(program, subject, topic, button));
  return button;
}

function renderCards(subjects) {
  subjectGrid.replaceChildren();
  const visibleSubjects = subjects.slice(0, visibleSubjectLimit);
  visibleSubjects.forEach(({ program, subject }) => {
    ensureCourseTopics(subject);
    const topics = subject.topics;
    const article = document.createElement("article");
    article.className = "subject-card";
    const top = document.createElement("div");
    top.className = "subject-card-top";
    const info = document.createElement("div");
    info.className = "subject-card-info";
    const meta = document.createElement("div");
    meta.className = "subject-meta";
    const code = document.createElement("span");
    code.className = "subject-code";
    code.textContent = subject.outlineOnly ? "COURSE OUTLINE" : subject.code;
    const badge = document.createElement("span");
    badge.className = `program-badge ${program.color}`;
    badge.textContent = program.credential === "TESDA qualification"
      ? `TESDA · ${program.shortName}`
      : program.shortName;
    badge.title = [program.credential, program.duration].filter(Boolean).join(" · ");
    meta.append(code, badge);
    if (subject.subjectType) {
      const subjectType = document.createElement("span");
      subjectType.className = "subject-type";
      subjectType.textContent = subject.subjectType;
      meta.append(subjectType);
    }
    const heading = document.createElement("h3");
    heading.textContent = subject.name;
    const description = document.createElement("p");
    description.className = "subject-description";
    description.textContent = `${subject.description}${program.credential ? ` ${program.credential}; ${program.duration}.` : ""}`;
    info.append(meta, heading, description);
    const total = document.createElement("span");
    total.className = "topic-total";
    const quizCount = topics.length * quizCardsPerTopic;
    total.textContent = `${topics.length} topics · ${quizCount} quiz cards`;
    top.append(info, total);
    const topicList = document.createElement("div");
    topicList.className = "topic-list";
    topicList.setAttribute("aria-label", `Topics in ${subject.name}`);
    const moduleTopic = topics.find(topic => topic.isPrimer);
    let moduleSection = null;
    if (moduleTopic) {
      moduleSection = document.createElement("section");
      moduleSection.className = "subject-module";
      moduleSection.setAttribute("aria-label", `Module 1 for ${subject.name}`);
      const moduleLabel = document.createElement("p");
      moduleLabel.className = "module-label";
      moduleLabel.textContent = moduleTopic.moduleTitle || `Module 1 · ${subject.name}`;
      const moduleHeading = document.createElement("h4");
      moduleHeading.textContent = moduleTopic.title;
      const moduleSummary = document.createElement("p");
      moduleSummary.className = "module-summary";
      moduleSummary.textContent = moduleTopic.summary;
      moduleSection.append(moduleLabel, moduleHeading, moduleSummary);
    }
    if (topics.length) {
      topics.forEach(topic => topicList.append(makeTopicButton(program, subject, topic)));
    } else {
      const placeholder = document.createElement("p");
      placeholder.className = "reviewer-placeholder";
      placeholder.textContent = "This is a representative subject outline, not a complete syllabus. Original notes and flashcards can be added here; check your school's official curriculum.";
      topicList.append(placeholder);
    }
    article.append(top);
    if (moduleSection) article.append(moduleSection);
    article.append(topicList);
    subjectGrid.append(article);
  });
  loadMoreSubjects.hidden = visibleSubjectLimit >= subjects.length;
}

function render() {
  const subjects = visibleSubjects();
  renderSubjectNav(subjects);
  renderCards(subjects);
  emptyState.hidden = subjects.length > 0;
  subjectGrid.hidden = subjects.length === 0;
  loadMoreSubjects.hidden = subjects.length === 0 || visibleSubjectLimit >= subjects.length;
  const topicTotal = subjects.reduce((total, item) =>
    total + item.subject.topics.length + Number(!item.subject.topics.some(topic => topic.isPrimer)), 0);
  resultCount.textContent = `${subjects.length} ${subjects.length === 1 ? "subject" : "subjects"} · ${topicTotal} ${topicTotal === 1 ? "topic" : "topics"}${subjects.length > visibleSubjectLimit ? ` · Showing ${visibleSubjectLimit}` : ""}`;

  const selectedProgram = catalog.find(program => program.id === programFilter.value);
  resultsTitle.textContent = selectedProgram ? `${selectedProgram.shortName} reviewer` : "Explore your subjects";
  resultsEyebrow.textContent = selectedProgram
    ? `${selectedProgram.name} · ${selectedProgram.credential || "Degree program"}`.toUpperCase()
    : "PHILIPPINE PROGRAM STARTER CATALOG";
  const filters = [];
  if (searchInput.value.trim()) filters.push(`Search: “${searchInput.value.trim()}”`);
  activeFilters.textContent = filters.join("  ·  ");
}

function renderFlashcard() {
  const [question, answer] = currentCards[currentCardIndex];
  const isFlipped = flashcard.getAttribute("aria-pressed") === "true";
  flashcardLabel.textContent = isFlipped ? "ANSWER" : "QUESTION";
  flashcardText.textContent = isFlipped ? answer : question;
  flashcardHint.textContent = isFlipped ? "Tap to see the question again ↗" : "Tap to reveal the answer ↗";
  cardProgress.textContent = `Card ${currentCardIndex + 1} of ${currentCards.length}`;
  previousCard.disabled = currentCardIndex === 0;
  nextCard.textContent = currentCardIndex === currentCards.length - 1 ? "Start again ↻" : "Next card →";
  updateQuizScore();
}

function openTopic(program, subject, topic, button) {
  activeTopicButton = button;
  activeProgressKey = topicProgressKey(program, subject, topic);
  document.querySelector("#dialog-module").textContent = topic.moduleTitle || `Module 1 · ${subject.name}`;
  document.querySelector("#dialog-breadcrumb").textContent = `${program.shortName}  /  ${subject.code}`;
  document.querySelector("#dialog-subject").textContent = subject.name;
  document.querySelector("#dialog-title").textContent = topic.title;
  document.querySelector("#dialog-summary").textContent = topic.summary;
  const practiceNote = document.querySelector("#dialog-practice-note");
  practiceNote.hidden = false;
  practiceNote.textContent = topic.isPrimer
    ? topic.isCourseModule
      ? "This is a subject-specific introductory module built around a widely taught foundation. Its linked reference is further reading, not a verification of your school's syllabus. Check your instructor's course outline for required coverage and current local standards."
      : "This is an original field-level study primer, not a verified summary of your exact course syllabus. The linked reference is further reading, not a source for every sentence. Check your institution's current requirements and your instructor's materials."
    : topic.isStudyPrompt
      ? "This topic uses guided practice prompts; complete the answer from your class materials. The added review cards quote this topic's notes and are not an official answer key."
    : "The original review cards are followed by additional questions based on this topic's notes. Check these review aids against your course materials.";
  const notes = document.querySelector("#dialog-notes");
  notes.replaceChildren();
  topic.notes.forEach(note => {
    const item = document.createElement("li");
    item.textContent = note;
    notes.append(item);
  });
  const sourceList = document.querySelector("#dialog-sources");
  sourceList.replaceChildren();
  (topic.sources || []).forEach(source => {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = source.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = source.label;
    const scope = document.createElement("span");
    scope.textContent = ` — ${source.scope}`;
    item.append(link, scope);
    sourceList.append(item);
  });
  document.querySelector("#dialog-source-section").hidden = !(topic.sources || []).length;
  currentCards = topicQuizCards(topic);
  currentCardIndex = 0;
  flashcard.setAttribute("aria-pressed", "false");
  renderFlashcard();
  if (!dialog.open) dialog.showModal();
}

programFilter.addEventListener("change", () => {
  selectedSubject = "all";
  visibleSubjectLimit = subjectPageSize;
  render();
});
searchInput.addEventListener("input", () => {
  selectedSubject = "all";
  visibleSubjectLimit = subjectPageSize;
  render();
});
loadMoreSubjects.addEventListener("click", () => {
  visibleSubjectLimit += subjectPageSize;
  render();
});
document.querySelector("#reset-filters").addEventListener("click", resetFilters);
document.querySelector("#empty-reset").addEventListener("click", resetFilters);
function resetFilters() {
  searchInput.value = "";
  programFilter.value = "all";
  selectedSubject = "all";
  visibleSubjectLimit = subjectPageSize;
  render();
  searchInput.focus();
}

flashcard.addEventListener("click", () => {
  flashcard.setAttribute("aria-pressed", String(flashcard.getAttribute("aria-pressed") !== "true"));
  renderFlashcard();
});
previousCard.addEventListener("click", () => {
  if (currentCardIndex > 0) currentCardIndex -= 1;
  flashcard.setAttribute("aria-pressed", "false");
  renderFlashcard();
});
nextCard.addEventListener("click", () => {
  currentCardIndex = currentCardIndex === currentCards.length - 1 ? 0 : currentCardIndex + 1;
  flashcard.setAttribute("aria-pressed", "false");
  renderFlashcard();
});
markReview.addEventListener("click", () => rateCurrentCard("review"));
markKnown.addEventListener("click", () => rateCurrentCard("known"));
dialog.addEventListener("close", () => {
  if (activeTopicButton && document.contains(activeTopicButton)) activeTopicButton.focus();
});
document.addEventListener("keydown", event => {
  if (!dialog.open && event.key === "/" && !event.ctrlKey && !event.metaKey && !event.altKey && document.activeElement !== searchInput) {
    event.preventDefault();
    searchInput.focus();
  }
});

populateFilters();
render();
updateStudyProgress();
