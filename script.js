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

let selectedSubject = "all";
let currentCards = [];
let currentCardIndex = 0;
let activeTopicButton = null;
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

const practiceTemplates = [
  ["Core concepts", subject => `What are the central concepts in ${subject.name}, and how are they connected?`, "Define the main concepts from your course materials and explain a connection between them."],
  ["Key terminology", subject => `Choose three important terms from ${subject.name}. What does each mean?`, "Give the course definition for each term and use it correctly in an example."],
  ["Foundations and purpose", subject => `What problem or need does ${subject.name} help you understand or address?`, "Describe the course's stated purpose and support your explanation with a concept from your notes."],
  ["Principles and rules", subject => `Name a principle or rule from ${subject.name}. When does it apply?`, "State the principle accurately, explain its conditions or limits, and give a class-based example."],
  ["Processes and steps", subject => `Explain one process or sequence covered in ${subject.name}.`, "Put the steps in order and explain what happens at each step."],
  ["Methods and approaches", subject => `Compare two methods or approaches used in ${subject.name}.`, "Describe both methods, compare when they are useful, and mention a limitation."],
  ["Tools and resources", subject => `What tool, resource, or instrument is used in ${subject.name}?`, "Name a tool from the course, explain its purpose, and note an appropriate-use consideration."],
  ["Interpretation", subject => `How would you interpret a result or observation in ${subject.name}?`, "Describe the evidence and apply a relevant course concept without overclaiming."],
  ["Problem solving", subject => `Outline how you would approach a problem from ${subject.name}.`, "Define the problem, identify relevant information, show your reasoning, and check the result."],
  ["Application", subject => `Apply one idea from ${subject.name} to a practical situation.`, "Describe the situation, explain how a course idea applies, and state a limitation."],
  ["Case analysis", subject => `What evidence would you examine when analyzing a case in ${subject.name}?`, "Identify relevant facts, stakeholders, and concepts; distinguish evidence from assumptions."],
  ["Compare and contrast", subject => `Choose two related ideas from ${subject.name}. How are they alike and different?`, "Define both ideas, describe a similarity, and explain a meaningful difference."],
  ["Ethics and responsibility", subject => `What ethical responsibility may arise in ${subject.name}?`, "Identify who may be affected, relevant course guidance, and a responsible next step."],
  ["Safety and risk", subject => `What is one risk to consider when applying ${subject.name}?`, "Name a risk, explain who or what could be affected, and follow your course's safety guidance."],
  ["Evidence and sources", subject => `What counts as useful evidence for a claim in ${subject.name}?`, "Choose evidence appropriate to the claim, check its source and context, and state its limits."],
  ["Communication", subject => `How would you explain an important idea from ${subject.name} to a beginner?`, "Use accurate plain language, define terms, give an example, and check understanding."],
  ["Common misconception", subject => `What misconception might someone have about ${subject.name}, and how would you correct it?`, "Explain the accurate course concept and use evidence or an example to clarify it."],
  ["Limitations and assumptions", subject => `What limitation or assumption should you remember in ${subject.name}?`, "State a limitation from your course and explain how it may affect a conclusion."],
  ["Connections across the course", subject => `How does one topic in ${subject.name} connect to another?`, "Name both topics, describe their relationship, and explain why the connection matters."],
  ["Synthesis and self-check", subject => `Summarize a major lesson from ${subject.name} and identify a question to review.`, "Summarize a course idea accurately and name a specific point to revisit in your class materials."]
];

function addCoursePractice(subject) {
  subject.topics = [...subject.topics];
  subject.outlineOnly = false;
}

catalog.forEach(program => program.subjects.forEach(subject => {
  if (subject.topics.length) addCoursePractice(subject);
}));

function ensureCourseTopics(subject) {
  if (subject.topics.length >= 20) return;
  subject.topics = [...subject.topics];
  practiceTemplates.slice(0, Math.max(0, 20 - subject.topics.length)).forEach(([title, question, answer]) => {
    subject.topics.push({
      title: `${title}: ${subject.name}`,
      summary: `Guided practice prompt for ${subject.name}. Build your response from your instructor's lessons and verify course facts with class materials.`,
      notes: [
        "This original prompt and answer framework is not a supplied course fact or official answer key.",
        "Use the definitions, examples, methods, and references taught in your class to complete your answer.",
        "Check your response against your syllabus, instructor notes, or an authorized source."
      ],
      cards: [[question(subject), answer]],
      isStudyPrompt: true
    });
  });
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
  const notes = topic.notes.length ? topic.notes : [topic.summary];

  while (cards.length < quizCardsPerTopic) {
    const index = cards.length;
    const fact = notes[(index - authoredCards.length) % notes.length];
    cards.push([
      `${quizQuestionStems[index]} ${topic.title}?`,
      `According to the review notes: ${fact}`
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
    if (topics.length) {
      topics.forEach(topic => topicList.append(makeTopicButton(program, subject, topic)));
    } else {
      const placeholder = document.createElement("p");
      placeholder.className = "reviewer-placeholder";
      placeholder.textContent = "This is a representative subject outline, not a complete syllabus. Original notes and flashcards can be added here; check your school's official curriculum.";
      topicList.append(placeholder);
    }
    article.append(top, topicList);
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
  const topicTotal = subjects.reduce((total, item) => total + Math.max(item.topics.length, 20), 0);
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
}

function openTopic(program, subject, topic, button) {
  activeTopicButton = button;
  document.querySelector("#dialog-breadcrumb").textContent = `${program.shortName}  /  ${subject.code}`;
  document.querySelector("#dialog-subject").textContent = subject.name;
  document.querySelector("#dialog-title").textContent = topic.title;
  document.querySelector("#dialog-summary").textContent = topic.summary;
  const practiceNote = document.querySelector("#dialog-practice-note");
  practiceNote.hidden = false;
  practiceNote.textContent = topic.isStudyPrompt
    ? "This topic uses guided practice prompts; complete the answer from your class materials. The added review cards quote this topic's notes and are not an official answer key."
    : "The original review cards are followed by additional questions based on this topic's notes. Check these review aids against your course materials.";
  const notes = document.querySelector("#dialog-notes");
  notes.replaceChildren();
  topic.notes.forEach(note => {
    const item = document.createElement("li");
    item.textContent = note;
    notes.append(item);
  });
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
