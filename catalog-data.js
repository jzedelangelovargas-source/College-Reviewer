(() => {
  const semester = (year, term, ...subjects) => ({
    id: `y${year}s${term}`,
    label: `Year ${year} · Semester ${term}`,
    year,
    semester: term,
    subjects
  });

  const semesters = (subjectLists, years = 4) => subjectLists.map((subjects, index) =>
    semester(Math.floor(index / 2) + 1, (index % 2) + 1, ...subjects)
  ).slice(0, years * 2);

  const review = (title, summary, notes, cards) => ({
    title,
    summary,
    notes,
    cards
  });

  const course = (name, subjectType) => ({ name, subjectType });

  const degree = (id, name, shortName, category, subjectLists, options = {}) => ({
    id,
    name,
    shortName,
    category,
    credential: options.credential || "Bachelor's degree",
    duration: options.duration || `${options.years || 4} years; varies by institution`,
    extension: options.extension || false,
    reviewers: options.reviewers || {},
    terms: semesters(subjectLists, options.years || 4)
  });

  const tesda = (id, name, shortName, category, modules, duration = "Competency-based; training hours vary", reviewers = {}) => ({
    id,
    name,
    shortName,
    category,
    credential: "TESDA qualification",
    duration,
    credentialingNote: "Competency-based modules; not a college year/semester curriculum",
    reviewers,
    terms: modules.map((subjects, index) => ({
      id: `module-${index + 1}`,
      label: index === 0 ? "Core competencies" : `Technical competencies · Module ${index}`,
      subjects
    }))
  });

  window.programCatalog = [
    degree("bsit", "BS Information Technology", "BSIT", "Computing & IT", [
      [], ["Communication in the Workplace", "Mathematics in the Modern World"], [],
      ["Systems Analysis and Design", "Web Systems and Technologies"],
      ["Information Assurance and Security", "Networking 2"],
      ["Integrative Programming and Technologies", "Quantitative Methods"],
      ["Systems Administration and Maintenance", "Capstone Project 1"],
      ["Capstone Project 2", "Practicum / Internship"]
    ], { extension: true }),
    degree("bscs", "BS Computer Science", "BSCS", "Computing & IT", [
      [], [], [], ["Information Management", "Object-Oriented Programming"],
      ["Software Engineering", "Automata and Language Theory"],
      ["Algorithms and Complexity", "CS Elective"],
      ["Applications Development and Emerging Technologies", "Thesis / Capstone Project 1"],
      ["Thesis / Capstone Project 2", "Practicum / Internship"]
    ], { extension: true }),
    degree("bsba", "BS Business Administration", "BSBA", "Business & Management", [
      [], [], [], ["Human Behavior in Organizations", "Business Finance"],
      ["Operations Management", "Business Research"],
      ["Strategic Management", "Business Elective"],
      ["Feasibility Study", "Business Policy"],
      ["Business Elective", "Practicum / Internship"]
    ], { extension: true }),
    degree("bsa", "BS Accountancy", "BSA", "Business & Management", [
      [], [], [], ["Intermediate Accounting", "Income Taxation"],
      ["Cost Accounting and Control", "Auditing"],
      ["Advanced Financial Accounting", "Regulatory Framework"],
      ["Management Advisory Services", "Auditing and Assurance"],
      ["Accounting Research", "Accounting Elective"]
    ], { extension: true }),
    degree("educ", "Bachelor of Education", "Education", "Education", [
      [], ["The Teaching Profession", "Purposive Communication"], [],
      ["Principles of Teaching", "Curriculum Development"],
      ["Assessment in Learning", "Inclusive Education"],
      ["Field Study 1", "Teaching Strategies"],
      ["Field Study 2", "Research in Education"],
      ["Teaching Internship", "Professional Education Elective"]
    ], { extension: true }),
    degree("nursing", "BS Nursing", "BSN", "Health & Medical", [
      [], ["Health Education", "Microbiology and Parasitology"], [],
      ["Community Health Nursing", "Pharmacology"],
      ["Nursing Care of Mother, Child and Family", "Nursing Informatics"],
      ["Nursing Care of Adults", "Research in Nursing"],
      ["Care of Clients with Problems in Oxygenation", "Nursing Leadership"],
      ["Related Learning Experience", "Nursing Elective"]
    ], { extension: true }),
    degree("bsis", "BS Information Systems", "BSIS", "Computing & IT", [
      ["Fundamentals of Information Systems"], ["Programming Fundamentals"],
      ["Data Management", "Business Process Management"],
      ["Systems Analysis and Design", "Enterprise Architecture"],
      ["IT Infrastructure", "Business Intelligence"],
      ["Information Assurance", "IS Project Management"],
      ["IS Strategy and Governance", "IS Elective"],
      ["Capstone Project 1", "IS Elective"],
      ["Capstone Project 2", "Practicum / Internship"]
    ]),
    degree("bsds", "BS Data Science", "BSDS", "Computing & IT", [
      ["Introduction to Data Science", "Calculus for Data Science"],
      ["Programming for Data Science", "Linear Algebra"],
      ["Probability and Statistics", "Data Structures"],
      ["Database Systems", "Statistical Modeling"],
      ["Data Mining", "Machine Learning"],
      ["Data Visualization", "Big Data Analytics"],
      ["Research Methods", "Data Science Elective"],
      ["Capstone Project", "Practicum / Internship"]
    ]),
    degree("bsce", "BS Civil Engineering", "BSCE", "Engineering", [
      ["Engineering Drawing", "Calculus 1"], ["Statics", "Chemistry for Engineers"],
      ["Strength of Materials", "Differential Equations"],
      ["Fluid Mechanics", "Surveying"], ["Structural Theory", "Geotechnical Engineering"],
      ["Transportation Engineering", "Hydraulics"],
      ["Construction Management", "Civil Engineering Design"],
      ["Civil Engineering Design Project", "Practicum / Internship"]
    ]),
    degree("bscoE", "BS Computer Engineering", "BSCpE", "Engineering", [
      ["Computing Fundamentals", "Calculus for Engineers"],
      ["Programming for Engineers", "Engineering Physics"],
      ["Digital Logic Design", "Circuit Analysis"],
      ["Data Structures", "Electronics"],
      ["Microprocessors", "Computer Networks"],
      ["Embedded Systems", "Software Design"],
      ["Computer Architecture", "CpE Elective"],
      ["Design Project", "Practicum / Internship"]
    ]),
    degree("bsee", "BS Electrical Engineering", "BSEE", "Engineering", [
      ["Engineering Drawing", "Calculus 1"], ["Circuit Analysis", "Engineering Physics"],
      ["Electromagnetics", "Differential Equations"],
      ["Electronic Circuits", "Electrical Machines"],
      ["Power Systems", "Control Systems"],
      ["Instrumentation", "EE Design"],
      ["Power Plant Engineering", "EE Elective"],
      ["Electrical Design Project", "Practicum / Internship"]
    ]),
    degree("bsme", "BS Mechanical Engineering", "BSME", "Engineering", [
      ["Engineering Drawing", "Calculus 1"], ["Statics", "Engineering Physics"],
      ["Thermodynamics", "Strength of Materials"],
      ["Fluid Mechanics", "Machine Design"],
      ["Heat Transfer", "Manufacturing Processes"],
      ["Mechanical Vibrations", "Control Systems"],
      ["Plant Engineering", "ME Elective"],
      ["Mechanical Design Project", "Practicum / Internship"]
    ]),
    degree("bsche", "BS Chemical Engineering", "BSChemE", "Engineering", [
      ["General Chemistry", "Calculus for Engineers"],
      ["Material and Energy Balances", "Engineering Physics"],
      ["Chemical Engineering Thermodynamics", "Organic Chemistry"],
      ["Fluid Flow", "Analytical Chemistry"],
      ["Heat and Mass Transfer", "Chemical Reaction Engineering"],
      ["Process Control", "Separation Processes"],
      ["Plant Design", "Chemical Engineering Elective"],
      ["Design Project", "Practicum / Internship"]
    ]),
    degree("bsie", "BS Industrial Engineering", "BSIE", "Engineering", [
      ["Introduction to Industrial Engineering", "Calculus for Engineers"],
      ["Engineering Economy", "Probability and Statistics"],
      ["Work Study", "Operations Research"],
      ["Quality Engineering", "Production Systems"],
      ["Facilities Planning", "Ergonomics"],
      ["Supply Chain Management", "Systems Simulation"],
      ["Project Management", "IE Elective"],
      ["Systems Design Project", "Practicum / Internship"]
    ]),
    degree("bsmls", "BS Medical Laboratory Science (Medical Technology)", "BSMLS", "Health & Medical", [
      ["Human Anatomy and Physiology", "General Microbiology"],
      ["Clinical Chemistry", "Hematology"],
      ["Immunology and Serology", "Clinical Microscopy"],
      ["Bacteriology", "Histopathologic Techniques"],
      ["Clinical Parasitology", "Blood Banking"],
      ["Clinical Chemistry 2", "Mycology and Virology"],
      ["Laboratory Management", "Research in Medical Laboratory Science"],
      ["Clinical Internship", "Professional Practice"]
    ]),
    degree("bsph", "BS Pharmacy", "BSPharm", "Health & Medical", [
      ["Pharmaceutical Calculations", "Human Anatomy and Physiology"],
      ["Pharmaceutical Chemistry", "Pharmaceutics"],
      ["Pharmacognosy", "Biochemistry"],
      ["Pharmacology", "Pharmaceutical Microbiology"],
      ["Clinical Pharmacy", "Pharmacotherapeutics"],
      ["Pharmacy Practice", "Pharmaceutical Analysis"],
      ["Pharmacy Administration", "Research in Pharmacy"],
      ["Clerkship / Internship", "Pharmacy Practice Experience"]
    ]),
    degree("bspt", "BS Physical Therapy", "BSPT", "Health & Medical", [
      ["Human Anatomy", "General Psychology"], ["Human Physiology", "Kinesiology"],
      ["Pathology", "Therapeutic Exercise"],
      ["Orthopedic Physical Therapy", "Physical Agents"],
      ["Neurologic Physical Therapy", "Research Methods"],
      ["Cardiopulmonary Physical Therapy", "Pediatric Physical Therapy"],
      ["Clinical Internship", "PT Elective"],
      ["Clinical Internship", "Professional Practice"]
    ], { years: 5 }),
    degree("bsmid", "BS Midwifery", "BSM", "Health & Medical", [
      ["Anatomy and Physiology", "Foundations of Midwifery"],
      ["Maternal and Child Health", "Nutrition"],
      ["Normal Obstetrics", "Pharmacology"],
      ["Abnormal Obstetrics", "Family Planning"],
      ["Newborn Care", "Community Midwifery"],
      ["Midwifery Research", "Professional Practice"],
      ["Related Learning Experience", "Clinical Practice"],
      ["Midwifery Internship", "Midwifery Elective"]
    ]),
    degree("bsph-public", "BS Public Health", "BSPH", "Health & Medical", [
      ["Foundations of Public Health", "Human Biology"],
      ["Epidemiology", "Biostatistics"],
      ["Health Promotion", "Environmental Health"],
      ["Health Policy and Systems", "Community Health"],
      ["Disease Prevention", "Research Methods"],
      ["Program Planning and Evaluation", "Public Health Nutrition"],
      ["Public Health Practice", "Public Health Elective"],
      ["Field Practice", "Research Project"]
    ]),
    degree("bse-math", "Bachelor of Secondary Education major in Mathematics", "BSEd Math", "Education", [
      ["Foundations of Education", "College Algebra"],
      ["Educational Psychology", "Plane and Solid Geometry"],
      ["Principles of Teaching", "Calculus"],
      ["Assessment of Learning", "Statistics and Probability"],
      ["Teaching Mathematics", "Abstract Algebra"],
      ["Curriculum Development", "Mathematical Problem Solving"],
      ["Field Study", "Research in Education"],
      ["Teaching Internship", "Professional Education Elective"]
    ]),
    degree("bse-english", "Bachelor of Secondary Education major in English", "BSEd English", "Education", [
      ["Foundations of Education", "Language and Literacy"],
      ["Educational Psychology", "Introduction to Linguistics"],
      ["Principles of Teaching", "Survey of English Literature"],
      ["Assessment of Learning", "Grammar and Composition"],
      ["Teaching English", "World Literature"],
      ["Curriculum Development", "Language Assessment"],
      ["Field Study", "Research in Education"],
      ["Teaching Internship", "Professional Education Elective"]
    ]),
    degree("bsed-socstud", "Bachelor of Secondary Education major in Social Studies", "BSEd Social Studies", "Education", [
      ["Foundations of Education", "Philippine History"],
      ["Educational Psychology", "World History"],
      ["Principles of Teaching", "Economics"],
      ["Assessment of Learning", "Political Science"],
      ["Teaching Social Studies", "Geography"],
      ["Curriculum Development", "Sociology and Anthropology"],
      ["Field Study", "Research in Education"],
      ["Teaching Internship", "Professional Education Elective"]
    ]),
    degree("bapol", "BA Political Science", "BAPolSci", "Law & Public Service", [
      ["Introduction to Political Science", "Philippine Government"],
      ["Comparative Politics", "Political Theory"],
      ["International Relations", "Public Administration"],
      ["Philippine Politics", "Research Methods"],
      ["Constitutional Government", "Public Policy"],
      ["Political Analysis", "Elective in Political Science"],
      ["Thesis / Research Seminar", "Political Science Elective"],
      ["Practicum / Internship", "Political Science Elective"]
    ]),
    degree("bspa", "BS Public Administration", "BSPA", "Law & Public Service", [
      ["Introduction to Public Administration", "Philippine Government"],
      ["Public Organization", "Public Finance"],
      ["Local Government Administration", "Public Personnel Administration"],
      ["Public Policy", "Administrative Law"],
      ["Public Program Management", "Research Methods"],
      ["Governance and Ethics", "Public Budgeting"],
      ["Thesis / Research Seminar", "Public Administration Elective"],
      ["Practicum / Internship", "Public Administration Elective"]
    ]),
    degree("jd", "Juris Doctor", "JD", "Law & Public Service", [
      ["Persons and Family Relations", "Constitutional Law"],
      ["Obligations and Contracts", "Criminal Law"],
      ["Property and Land Law", "Administrative Law"],
      ["Civil Procedure", "Evidence"],
      ["Criminal Procedure", "Commercial Law"],
      ["Labor Law", "Legal Ethics"],
      ["Trial Technique", "Clinical Legal Education"],
      ["Bar Review / Electives", "Clinical Legal Education"]
    ], { credential: "Professional degree (post-baccalaureate)", duration: "Typically 4 years after a bachelor's degree; varies by institution" }),
    degree("bscrim", "BS Criminology", "BSCrim", "Law & Public Service", [
      ["Introduction to Criminology", "Criminal Law"],
      ["Philippine Criminal Justice System", "Forensic Photography"],
      ["Law Enforcement Administration", "Criminalistics"],
      ["Crime Detection and Investigation", "Juvenile Delinquency"],
      ["Forensic Science", "Correctional Administration"],
      ["Research Methods", "Criminalistics Laboratory"],
      ["Criminology Research", "Criminology Elective"],
      ["Practicum / Internship", "Criminology Elective"]
    ]),
    degree("bssec", "BS Security Management", "BSSM", "Law & Public Service", [
      ["Principles of Security Management", "Introduction to Criminology"],
      ["Security Risk Analysis", "Protective Security"],
      ["Physical Security", "Emergency Management"],
      ["Security Law and Ethics", "Investigation Principles"],
      ["Information Security", "Business Continuity"],
      ["Security Operations", "Research Methods"],
      ["Security Management Project", "Security Elective"],
      ["Practicum / Internship", "Security Elective"]
    ]),
    degree("bsecon", "BS Economics", "BSEcon", "Business & Management", [
      ["Principles of Microeconomics", "Mathematics for Economists"],
      ["Principles of Macroeconomics", "Statistics"],
      ["Intermediate Microeconomics", "Economic History"],
      ["Intermediate Macroeconomics", "Econometrics"],
      ["Development Economics", "Public Economics"],
      ["International Economics", "Research Methods"],
      ["Economic Research Seminar", "Economics Elective"],
      ["Thesis / Practicum", "Economics Elective"]
    ]),
    degree("bsentre", "BS Entrepreneurship", "BSEntrep", "Business & Management", [
      ["Entrepreneurial Mind", "Fundamentals of Accounting"],
      ["Opportunity Seeking", "Marketing Principles"],
      ["Business Planning", "Small Business Management"],
      ["Product Development", "Business Finance"],
      ["Enterprise Development", "Operations Management"],
      ["Business Model Innovation", "Research Methods"],
      ["Business Plan Implementation", "Entrepreneurship Elective"],
      ["Practicum / Business Launch", "Entrepreneurship Elective"]
    ]),
    degree("bshm", "BS Hospitality Management", "BSHM", "Hospitality & Tourism", [
      ["Introduction to Hospitality", "Food Safety and Sanitation"],
      ["Food and Beverage Service", "Front Office Operations"],
      ["Culinary Fundamentals", "Housekeeping Operations"],
      ["Hospitality Accounting", "Rooms Division Management"],
      ["Hospitality Marketing", "Events Management"],
      ["Hospitality Facilities Management", "Research Methods"],
      ["Hospitality Strategic Management", "HM Elective"],
      ["Industry Internship", "HM Elective"]
    ]),
    degree("bstm", "BS Tourism Management", "BSTM", "Hospitality & Tourism", [
      ["Introduction to Tourism", "Philippine Tourism Geography"],
      ["Tourism Planning", "Tour Guiding Principles"],
      ["Travel Agency Operations", "Tourism Marketing"],
      ["Tourism Policy and Planning", "Sustainable Tourism"],
      ["Events Management", "Tourism Research"],
      ["Tourism Enterprise Management", "Tourism Elective"],
      ["Tourism Development Project", "Tourism Elective"],
      ["Industry Internship", "Tourism Elective"]
    ]),
    degree("bshr", "BS Human Resource Management", "BSHRM", "Business & Management", [
      ["Principles of Management", "Business Communication"],
      ["Human Behavior in Organizations", "Fundamentals of HRM"],
      ["Recruitment and Selection", "Training and Development"],
      ["Compensation and Benefits", "Labor Relations"],
      ["Performance Management", "Labor Law"],
      ["Strategic HRM", "Research Methods"],
      ["HR Analytics", "HRM Elective"],
      ["Practicum / Internship", "HRM Elective"]
    ]),
    degree("bsbio", "BS Biology", "BSBio", "Science & Mathematics", [
      ["General Biology", "General Chemistry"],
      ["Cell and Molecular Biology", "Organic Chemistry"],
      ["Genetics", "Ecology"],
      ["Plant Biology", "Biostatistics"],
      ["Animal Biology", "Evolution"],
      ["Microbiology", "Research Methods"],
      ["Thesis / Research", "Biology Elective"],
      ["Thesis / Practicum", "Biology Elective"]
    ]),
    degree("bschem", "BS Chemistry", "BSChem", "Science & Mathematics", [
      ["General Chemistry", "College Algebra"],
      ["Analytical Chemistry", "Physics"],
      ["Organic Chemistry", "Chemical Calculations"],
      ["Physical Chemistry", "Instrumental Analysis"],
      ["Inorganic Chemistry", "Biochemistry"],
      ["Research Methods", "Chemistry Laboratory"],
      ["Thesis / Research", "Chemistry Elective"],
      ["Practicum / Thesis", "Chemistry Elective"]
    ]),
    degree("bsmath", "BS Mathematics", "BSMath", "Science & Mathematics", [
      ["College Algebra", "Trigonometry"],
      ["Calculus 1", "Discrete Mathematics"],
      ["Calculus 2", "Linear Algebra"],
      ["Differential Equations", "Abstract Algebra"],
      ["Real Analysis", "Probability"],
      ["Statistics", "Numerical Analysis"],
      ["Mathematics Seminar", "Mathematics Elective"],
      ["Thesis / Practicum", "Mathematics Elective"]
    ]),
    degree("bsphys", "BS Physics", "BSPhys", "Science & Mathematics", [
      ["General Physics", "Calculus 1"],
      ["Mechanics", "Calculus 2"],
      ["Electricity and Magnetism", "Differential Equations"],
      ["Thermal Physics", "Modern Physics"],
      ["Quantum Mechanics", "Mathematical Physics"],
      ["Electronics", "Research Methods"],
      ["Physics Laboratory", "Physics Elective"],
      ["Thesis / Practicum", "Physics Elective"]
    ]),
    degree("md", "Doctor of Medicine", "MD", "Health & Medical", [
      ["Human Anatomy", "Biochemistry"],
      ["Physiology", "Histology and Cell Biology"],
      ["Pharmacology", "Pathology"],
      ["Microbiology and Immunology", "Clinical Neuroscience"],
      ["Internal Medicine", "Surgery"],
      ["Obstetrics and Gynecology", "Pediatrics"],
      ["Family and Community Medicine", "Clinical Clerkship"],
      ["Clinical Clerkship", "Medical Ethics and Jurisprudence"]
    ], { credential: "Professional degree (post-baccalaureate)", duration: "Typically 4 years after a bachelor's degree; clinical training and requirements vary by institution" }),
    degree("dmd", "Doctor of Dental Medicine", "DMD", "Health & Medical", [
      ["General Anatomy", "Biochemistry"],
      ["Dental Anatomy", "Oral Histology"],
      ["Dental Materials", "Physiology"],
      ["Oral Pathology", "Preclinical Dentistry"],
      ["Restorative Dentistry", "Periodontology"],
      ["Oral Surgery", "Prosthodontics"],
      ["Pediatric Dentistry", "Orthodontics"],
      ["Clinical Dentistry", "Dental Public Health"],
      ["Clinical Dentistry", "Research in Dentistry"],
      ["Clinical Practice", "Dental Elective"],
      ["Clinical Practice", "Professional Ethics"],
      ["Clinical Internship", "Comprehensive Care"]
    ], { years: 6, credential: "Professional degree", duration: "Program length and pre-dentistry requirements vary by institution" }),
    degree("bspsych", "BS Psychology", "BSPsych", "Social Sciences & Humanities", [
      ["Introduction to Psychology", "General Psychology"],
      ["Developmental Psychology", "Statistics for Psychology"],
      ["Psychological Assessment", "Social Psychology"],
      ["Abnormal Psychology", "Research Methods"],
      ["Cognitive Psychology", "Industrial Psychology"],
      ["Theories of Personality", "Psychological Statistics"],
      ["Thesis / Research", "Psychology Elective"],
      ["Practicum / Internship", "Psychology Elective"]
    ]),
    degree("basoc", "BA Sociology", "BASoc", "Social Sciences & Humanities", [
      ["Introduction to Sociology", "Social Problems"],
      ["Social Institutions", "Sociological Theory"],
      ["Social Research Methods", "Population Studies"],
      ["Philippine Society", "Social Psychology"],
      ["Sociology of Development", "Gender and Society"],
      ["Community Studies", "Sociological Statistics"],
      ["Thesis / Research Seminar", "Sociology Elective"],
      ["Practicum / Internship", "Sociology Elective"]
    ]),
    degree("bahist", "BA History", "BAHistory", "Social Sciences & Humanities", [
      ["Introduction to History", "Philippine History"],
      ["World History", "Historical Methods"],
      ["Asian History", "Historiography"],
      ["History of the Philippines", "Archival Studies"],
      ["Social and Cultural History", "Research Methods"],
      ["Local History", "History Seminar"],
      ["Thesis / Research Seminar", "History Elective"],
      ["Practicum / Internship", "History Elective"]
    ]),
    degree("bacomm", "BA Communication", "BAComm", "Communication & Languages", [
      ["Introduction to Communication", "Communication Theory"],
      ["Writing for Media", "Interpersonal Communication"],
      ["Journalism Principles", "Media and Society"],
      ["Broadcast Communication", "Communication Research"],
      ["Digital Media Production", "Public Relations"],
      ["Communication Planning", "Media Ethics"],
      ["Communication Campaign", "Communication Elective"],
      ["Practicum / Internship", "Communication Elective"]
    ]),
    degree("bsdevcom", "Bachelor of Science in Development Communication", "BSDevCom", "Communication & Languages", [
      [
        "Introduction to Development Communication", "Principles of Communication",
        course("Purposive Communication", "General education / supporting"),
        course("Mathematics in the Modern World", "General education / supporting"),
        course("Introduction to Sociology", "Minor / elective example")
      ],
      [
        "Communication Theory", "Development Perspectives",
        course("Art Appreciation", "General education / supporting"),
        course("Understanding the Self", "General education / supporting"),
        course("Introduction to Economics", "Minor / elective example")
      ],
      [
        "Writing for Development", "Communication Research",
        course("Readings in Philippine History", "General education / supporting"),
        course("Science, Technology, and Society", "General education / supporting"),
        course("Community Development", "Minor / elective example")
      ],
      [
        "Community Communication", "Development Journalism",
        course("Ethics", "General education / supporting"),
        course("The Contemporary World", "General education / supporting"),
        course("Local Governance", "Minor / elective example")
      ],
      [
        "Communication Campaign Planning", "Participatory Communication",
        course("Environmental Communication", "Major elective"),
        course("Gender and Society", "General education / supporting"),
        course("Environmental Studies", "Minor / elective example")
      ],
      [
        "Development Broadcasting", "Communication for Social Change",
        course("Communication Law and Ethics", "Major"),
        course("Media and Information Literacy", "General education / supporting"),
        course("Health Promotion", "Minor / elective example")
      ],
      [
        "Development Communication Seminar", "Program Monitoring and Evaluation",
        course("Development Project Planning", "Major"),
        course("Communication Policy", "Major elective"),
        course("Entrepreneurship for Social Enterprise", "Minor / elective example")
      ],
      [
        "Development Communication Practicum", "Undergraduate Research",
        course("Communication Research Seminar", "Major"),
        course("Development Communication Elective", "Major elective"),
        course("Public Administration", "Minor / elective example")
      ]
    ], { reviewers: {
      "bsdevcom:y1s1:1": [review(
        "Development communication in practice",
        "How communication supports people-centred development.",
        [
          "Development communication applies communication processes to social change and development goals.",
          "It involves listening to communities, sharing useful information, and supporting informed participation.",
          "A communication activity should respond to a documented need and fit its local cultural context."
        ],
        [
          ["What is the purpose of development communication?", "To support development goals through communication, participation, and locally relevant information."],
          ["Why begin by listening to a community?", "To understand its needs, knowledge, priorities, and preferred ways of communicating."]
        ]
      )],
      "bsdevcom:y1s1:2": [review(
        "Elements of communication",
        "A basic model for examining how messages are shared and understood.",
        [
          "A communication event involves a source, message, channel, receiver, and context.",
          "Feedback helps the source understand how a message was received.",
          "Noise can interfere with a message; it may be physical, technical, linguistic, or cultural."
        ],
        [
          ["What does feedback help a communicator learn?", "How a message was received, understood, or acted on."],
          ["Give one example of communication noise.", "A loud environment, a weak signal, unfamiliar terms, or a cultural mismatch."]
        ]
      )],
      "bsdevcom:y1s2:1": [review(
        "Communication theory and models",
        "Use models to analyse messages, context, and audience response.",
        [
          "Linear models describe a message moving from sender to receiver; interactive models also account for feedback.",
          "Transactional models emphasize that people may send and interpret messages at the same time.",
          "A model is a tool for analysis, not a complete description of every real-world interaction."
        ],
        [
          ["What does an interactive model add to a linear model?", "Feedback from the receiver to the sender."],
          ["Why use more than one communication model?", "Different models highlight different features of a communication situation."]
        ]
      )],
      "bsdevcom:y1s2:2": [review(
        "Development and social change",
        "Compare how development perspectives shape communication work.",
        [
          "Development can include changes in well-being, opportunity, participation, and access to resources.",
          "Development perspectives make different assumptions about who sets priorities and how change happens.",
          "Communication plans should make their goals and assumptions explicit and consider whose voices are included."
        ],
        [
          ["Why do development perspectives matter to communication planning?", "They shape what change is prioritized, whose knowledge counts, and how people participate."],
          ["Name one question to ask when assessing inclusion.", "Whose voices are represented, and who may be missing from the conversation?"]
        ]
      )],
      "bsdevcom:y2s1:1": [review(
        "Writing for development audiences",
        "Adapt clear, useful written material to a specific audience and purpose.",
        [
          "Identify the reader, communication goal, and action or understanding the text should support.",
          "Use familiar language, explain necessary technical terms, and organize information for easy reading.",
          "Check accuracy, tone, accessibility, and local relevance before sharing a message."
        ],
        [
          ["What should guide word choice in development writing?", "The audience's language, knowledge, needs, and communication context."],
          ["What should be checked before a message is shared?", "Accuracy, clarity, tone, accessibility, and local relevance."]
        ]
      )],
      "bsdevcom:y2s1:2": [review(
        "Communication research basics",
        "Connect a research question to ethical and appropriate evidence gathering.",
        [
          "A research question defines what a study seeks to understand and helps guide method selection.",
          "Methods should fit the question and the setting; interviews, surveys, observation, and document review serve different purposes.",
          "Respect informed consent, privacy, and participants' right to decline or withdraw."
        ],
        [
          ["What should guide the choice of research method?", "The research question, participants, setting, and available ethical approach."],
          ["Name one basic protection for research participants.", "Informed consent, privacy protection, or the right to decline participation."]
        ]
      )],
      "bsdevcom:y2s2:1": [review(
        "Community communication",
        "Plan communication with communities rather than treating them only as an audience.",
        [
          "Community communication begins with local context, relationships, knowledge, and priorities.",
          "Participation can include helping define the issue, choose channels, create messages, and evaluate results.",
          "Accessible communication considers language, format, timing, and who may face barriers to participation."
        ],
        [
          ["What makes communication participatory?", "Community members have meaningful input into communication decisions, not only receive messages."],
          ["Name one barrier to community participation.", "Language, inaccessible formats, inconvenient timing, or unequal access to channels."]
        ]
      )],
      "bsdevcom:y2s2:2": [review(
        "Development journalism",
        "Report on development issues with evidence, context, and accountability.",
        [
          "Development journalism investigates development processes and their effects on people and communities.",
          "Good reporting verifies claims, includes relevant perspectives, and distinguishes evidence from opinion.",
          "Avoid reducing complex issues to a single cause or using sources in ways that create harm."
        ],
        [
          ["What should development reporting add beyond an announcement?", "Verified context, affected perspectives, and scrutiny of results and claims."],
          ["Why include multiple relevant perspectives?", "To represent the issue more accurately and avoid presenting one viewpoint as the whole story."]
        ]
      )],
      "bsdevcom:y3s1:1": [review(
        "Planning a communication campaign",
        "Build a campaign around a defined issue, audience, objective, and evaluation plan.",
        [
          "A campaign starts with situation analysis and a clearly described communication problem.",
          "Objectives should state the intended audience and a realistic, observable change.",
          "Choose messages and channels that fit audience needs, then plan how to assess progress."
        ],
        [
          ["What should a campaign objective make clear?", "Who it concerns and what observable change is intended."],
          ["Why plan evaluation before launching a campaign?", "To ensure evidence and measures can be collected to assess progress."]
        ]
      )],
      "bsdevcom:y3s1:2": [review(
        "Participatory communication",
        "Use dialogue and shared decision-making to support collective action.",
        [
          "Participatory communication treats people as contributors to decisions, not just targets of persuasion.",
          "Dialogue creates opportunities to share experiences, question assumptions, and negotiate priorities.",
          "Participation requires attention to power differences and whose contributions influence decisions."
        ],
        [
          ["How does participatory communication differ from one-way messaging?", "It creates space for dialogue and meaningful community influence over decisions."],
          ["Why examine power in participatory activities?", "Unequal power can prevent some people from speaking or having their input acted on."]
        ]
      )],
      "bsdevcom:y3s2:1": [review(
        "Development broadcasting",
        "Design audio or video content around audience needs and responsible production.",
        [
          "Broadcast content should have a defined audience, purpose, format, and production plan.",
          "Clear structure, sound, pacing, and accessible language help audiences follow a program.",
          "Obtain appropriate consent for recordings and verify factual claims before broadcast."
        ],
        [
          ["What should be defined before producing a broadcast segment?", "Its audience, purpose, format, and production plan."],
          ["Name one ethical check before broadcasting an interview.", "Confirm consent, represent the speaker fairly, and verify claims."]
        ]
      )],
      "bsdevcom:y3s2:2": [review(
        "Communication for social change",
        "Use dialogue, collective learning, and local agency in social-change processes.",
        [
          "Social change communication supports people as they discuss issues and shape responses together.",
          "Change may involve individual, community, institutional, and policy conditions.",
          "Communication can contribute to change but does not replace material resources or structural action."
        ],
        [
          ["Why is communication alone not always enough to address a social issue?", "Structural barriers and resource needs may also require institutional or material action."],
          ["Name two levels where social change can occur.", "Individual, community, institutional, or policy levels."]
        ]
      )],
      "bsdevcom:y4s1:1": [review(
        "Development communication seminar",
        "Synthesize evidence and debate issues in development communication practice.",
        [
          "A seminar connects concepts, research, and practice through structured discussion.",
          "Support claims with credible evidence and distinguish findings from interpretation.",
          "Consider ethical implications, limitations, and the perspectives not represented in a case."
        ],
        [
          ["What makes a seminar claim academically useful?", "It is clear, supported by credible evidence, and open to critical examination."],
          ["What should a case analysis acknowledge?", "Its evidence, limitations, ethical implications, and missing perspectives."]
        ]
      )],
      "bsdevcom:y4s1:2": [review(
        "Monitoring and evaluating programs",
        "Use indicators and evidence to understand implementation and outcomes.",
        [
          "Monitoring tracks activities and outputs as a program is implemented.",
          "Evaluation examines a program's relevance, effectiveness, outcomes, or other stated criteria.",
          "Indicators should connect to objectives and be interpreted with context and limitations."
        ],
        [
          ["How does monitoring differ from evaluation?", "Monitoring tracks implementation; evaluation judges a program against defined questions or criteria."],
          ["What makes an indicator useful?", "It is clearly defined and connected to an objective or evaluation question."]
        ]
      )],
      "bsdevcom:y4s2:1": [review(
        "Development communication practicum",
        "Apply communication skills in a supervised, reflective field setting.",
        [
          "A practicum connects academic learning with assigned responsibilities in a real organization or community setting.",
          "Agree on objectives, supervision, deliverables, and ethical boundaries before beginning field activities.",
          "Reflect on feedback and document learning without exposing confidential or identifying information."
        ],
        [
          ["What should be agreed before starting a practicum?", "Objectives, supervision, expected work, and ethical boundaries."],
          ["How can a practicum report protect people?", "Avoid identifying or confidential details unless disclosure is authorized and appropriate."]
        ]
      )],
      "bsdevcom:y4s2:2": [review(
        "Undergraduate research",
        "Develop a focused, ethical research project and communicate its findings.",
        [
          "A research project links a focused question to a justified design and transparent analysis.",
          "Document sources and methods so readers can understand the basis and limits of the findings.",
          "Report results honestly, including uncertainty and limitations; do not invent or selectively alter evidence."
        ],
        [
          ["What should a research report communicate about its findings?", "The evidence, analysis, uncertainty, and limitations."],
          ["Why document methods and sources?", "So readers can assess how conclusions were reached and what supports them."]
        ]
      )]
    } }),
    degree("baenglish", "BA English Language Studies", "BAELS", "Communication & Languages", [
      ["Introduction to Linguistics", "Academic Writing"],
      ["Phonetics and Phonology", "Grammar and Syntax"],
      ["Semantics and Pragmatics", "Language and Society"],
      ["Morphology", "Language Acquisition"],
      ["Discourse Analysis", "World Englishes"],
      ["Language Research Methods", "Applied Linguistics"],
      ["Thesis / Research Seminar", "Language Studies Elective"],
      ["Practicum / Internship", "Language Studies Elective"]
    ]),
    degree("bfa", "Bachelor of Fine Arts", "BFA", "Arts & Design", [
      ["Drawing Fundamentals", "Art History"],
      ["Color Theory", "2D Design"],
      ["Painting Studio", "Sculpture"],
      ["Figure Drawing", "Printmaking"],
      ["Contemporary Art", "Visual Research"],
      ["Studio Practice", "Art Criticism"],
      ["Thesis Exhibition", "Fine Arts Elective"],
      ["Portfolio Development", "Practicum / Internship"]
    ]),
    degree("bsma", "BS Multimedia Arts", "BSMA", "Arts & Design", [
      ["Visual Design Fundamentals", "Digital Imaging"],
      ["Typography", "Digital Illustration"],
      ["Photography", "Audio Production"],
      ["Video Production", "Animation Fundamentals"],
      ["Interactive Media", "3D Design"],
      ["Web Design", "Multimedia Research"],
      ["Portfolio Project", "Multimedia Elective"],
      ["Capstone Project", "Practicum / Internship"]
    ]),
    degree("bsarch", "BS Architecture", "BSArch", "Architecture & Built Environment", [
      ["Architectural Design 1", "Visual Communication"],
      ["Architectural Design 2", "Building Technology"],
      ["Architectural Design 3", "History of Architecture"],
      ["Architectural Design 4", "Utilities"],
      ["Architectural Design 5", "Structures"],
      ["Architectural Design 6", "Site Planning"],
      ["Architectural Design 7", "Professional Practice"],
      ["Architectural Design 8", "Research Methods"],
      ["Architectural Design 9", "Thesis Preparation"],
      ["Architectural Design 10", "Thesis / Comprehensive Design"]
    ], { years: 5 }),
    degree("bsid", "BS Interior Design", "BSID", "Architecture & Built Environment", [
      ["Interior Design Fundamentals", "Drawing and Drafting"],
      ["Space Planning", "Color and Materials"],
      ["Residential Design", "History of Interior Design"],
      ["Commercial Design", "Lighting Design"],
      ["Furniture Design", "Building Systems"],
      ["Sustainable Interior Design", "Research Methods"],
      ["Interior Design Studio", "Professional Practice"],
      ["Thesis / Portfolio", "Practicum / Internship"]
    ]),
    degree("bsag", "BS Agriculture", "BSAg", "Agriculture & Environment", [
      ["Introduction to Agriculture", "Crop Science"],
      ["Soil Science", "Animal Science"],
      ["Agricultural Economics", "Plant Pathology"],
      ["Crop Production", "Agricultural Engineering"],
      ["Agricultural Extension", "Pest Management"],
      ["Research Methods", "Agribusiness Management"],
      ["Agriculture Research", "Agriculture Elective"],
      ["Practicum / Internship", "Agriculture Elective"]
    ]),
    degree("bsenvi", "BS Environmental Science", "BSEnvSci", "Agriculture & Environment", [
      ["Introduction to Environmental Science", "General Biology"],
      ["Ecology", "General Chemistry"],
      ["Environmental Chemistry", "Geology"],
      ["Environmental Policy", "Statistics"],
      ["Environmental Impact Assessment", "Conservation Biology"],
      ["Research Methods", "Environmental Planning"],
      ["Environmental Research", "Environmental Elective"],
      ["Practicum / Fieldwork", "Environmental Elective"]
    ]),
    degree("bsfish", "BS Fisheries", "BSFish", "Agriculture & Environment", [
      ["Introduction to Fisheries", "General Biology"],
      ["Aquaculture", "Water Quality"],
      ["Fish Taxonomy", "Marine Ecology"],
      ["Fisheries Management", "Fish Nutrition"],
      ["Fish Processing", "Coastal Resource Management"],
      ["Research Methods", "Fisheries Economics"],
      ["Fisheries Research", "Fisheries Elective"],
      ["Practicum / Internship", "Fisheries Elective"]
    ]),
    degree("bsfor", "BS Forestry", "BSFor", "Agriculture & Environment", [
      ["Introduction to Forestry", "Botany"],
      ["Forest Ecology", "Soil Science"],
      ["Forest Mensuration", "Forest Protection"],
      ["Silviculture", "Forest Economics"],
      ["Forest Management", "Watershed Management"],
      ["Research Methods", "Forest Policy"],
      ["Forestry Research", "Forestry Elective"],
      ["Practicum / Fieldwork", "Forestry Elective"]
    ]),
    degree("bsmt", "BS Marine Transportation", "BSMT", "Maritime", [
      ["Navigation 1", "Ship Construction"],
      ["Navigation 2", "Meteorology"],
      ["Cargo Handling", "Marine Communications"],
      ["Bridge Watchkeeping", "Maritime Safety"],
      ["Ship Stability", "Maritime Law"],
      ["Voyage Planning", "Marine Pollution Prevention"],
      ["Ship Management", "Maritime Elective"],
      ["Shipboard Training", "Practicum / Internship"]
    ]),
    degree("bsme-marine", "BS Marine Engineering", "BSMarE", "Maritime", [
      ["Marine Engineering Fundamentals", "Engineering Drawing"],
      ["Marine Diesel Engines", "Thermodynamics"],
      ["Electrical Systems on Ships", "Fluid Mechanics"],
      ["Auxiliary Machinery", "Marine Power Systems"],
      ["Engine Room Operations", "Ship Maintenance"],
      ["Marine Automation", "Maritime Safety"],
      ["Marine Engineering Management", "Maritime Elective"],
      ["Shipboard Training", "Practicum / Internship"]
    ]),
    degree("bsavm", "BS Aviation Management", "BSAvM", "Aviation", [
      ["Introduction to Aviation", "Aviation Safety"],
      ["Airport Operations", "Air Transportation"],
      ["Aviation Law and Regulations", "Airline Management"],
      ["Airport Planning", "Aviation Security"],
      ["Air Cargo Management", "Aviation Human Factors"],
      ["Aviation Economics", "Research Methods"],
      ["Aviation Management Project", "Aviation Elective"],
      ["Practicum / Internship", "Aviation Elective"]
    ]),
    degree("bsaae", "BS Aeronautical Engineering", "BSAE", "Aviation & Engineering", [
      ["Engineering Drawing", "Calculus for Engineers"],
      ["Statics", "Engineering Physics"],
      ["Aerodynamics", "Strength of Materials"],
      ["Aircraft Structures", "Thermodynamics"],
      ["Flight Mechanics", "Propulsion"],
      ["Aircraft Design", "Control Systems"],
      ["Aerospace Systems", "Aeronautical Engineering Elective"],
      ["Design Project", "Practicum / Internship"]
    ]),
    degree("bspublicsafety", "BS Public Safety", "BSPS", "Law & Public Service", [
      ["Foundations of Public Safety", "Introduction to Criminology"],
      ["Emergency Management", "Public Administration"],
      ["Disaster Risk Reduction", "Public Safety Law"],
      ["Incident Command Systems", "Community Safety"],
      ["Investigation Principles", "Public Safety Operations"],
      ["Research Methods", "Ethics in Public Service"],
      ["Public Safety Research", "Public Safety Elective"],
      ["Practicum / Internship", "Public Safety Elective"]
    ]),
    degree("military-service", "Military / Uniformed Service Studies (institution-specific track)", "Military Studies", "Military & Uniformed Service", [
      ["Military Science and Leadership", "Civic and Public Service"],
      ["Service Law and Ethics", "Physical Readiness"],
      ["Leadership and Team Operations", "Emergency Response"],
      ["Public Safety and Security", "Service-Specific Elective"],
      ["Institutional Field Training", "Service-Specific Elective"],
      ["Leadership Practicum", "Service-Specific Elective"],
      ["Capstone / Service Project", "Institutional Elective"],
      ["Practicum / Academy Training", "Institutional Elective"]
    ], { credential: "Institution-specific degree/track", duration: "Academy and service-specific; verify entry requirements and curriculum" }),
    tesda("tesda-css-nc2", "Computer Systems Servicing NC II", "CSS NC II", "TESDA · Computing & IT", [
      ["Workplace communication and safety"],
      ["Install and configure computer systems", "Set up computer networks"],
      ["Set up computer servers", "Maintain and repair computer systems"]
    ]),
    tesda("tesda-programming-nc3", "Programming NC III", "Programming NC III", "TESDA · Computing & IT", [
      ["Workplace communication and safety"],
      ["Prepare program design", "Develop basic programs"],
      ["Develop object-oriented programs", "Test and document software"]
    ]),
    tesda("tesda-bookkeeping-nc3", "Bookkeeping NC III", "Bookkeeping NC III", "TESDA · Business", [
      ["Workplace communication and numeracy"],
      ["Journalize transactions", "Post transactions to ledgers"],
      ["Prepare trial balance and financial reports", "Reconcile accounts"]
    ]),
    tesda("tesda-caregiving-nc2", "Caregiving NC II", "Caregiving NC II", "TESDA · Health & Care", [
      ["Workplace communication and safety"],
      ["Provide care for infants and children", "Provide care for the elderly"],
      ["Maintain a healthy and safe environment", "Support clients with special needs"]
    ]),
    tesda("tesda-cookery-nc2", "Cookery NC II", "Cookery NC II", "TESDA · Hospitality & Food", [
      ["Workplace communication and food safety"],
      ["Prepare and cook hot meals", "Prepare stocks, sauces, and soups"],
      ["Prepare cold meals and desserts", "Clean and maintain kitchen equipment"]
    ]),
    tesda("tesda-fbs-nc2", "Food and Beverage Services NC II", "FBS NC II", "TESDA · Hospitality & Food", [
      ["Workplace communication and hygiene"],
      ["Prepare dining area", "Provide food and beverage service"],
      ["Receive and handle guest concerns", "Process guest orders and payments"]
    ]),
    tesda("tesda-housekeeping-nc2", "Housekeeping NC II", "Housekeeping NC II", "TESDA · Hospitality & Tourism", [
      ["Workplace communication and safety"],
      ["Provide housekeeping services", "Clean and prepare rooms"],
      ["Handle guest requests", "Maintain public areas"]
    ]),
    tesda("tesda-bpp-nc2", "Bread and Pastry Production NC II", "BPP NC II", "TESDA · Hospitality & Food", [
      ["Workplace communication and food safety"],
      ["Prepare bakery products", "Prepare pastry products"],
      ["Decorate and present baked goods", "Store bakery products"]
    ]),
    tesda("tesda-smaw-nc2", "Shielded Metal Arc Welding NC II", "SMAW NC II", "TESDA · Construction & Trades", [
      ["Workplace safety and welding equipment"],
      ["Prepare materials and joints", "Perform shielded metal arc welds"],
      ["Inspect welds and correct defects", "Maintain welding equipment"]
    ]),
    tesda("tesda-eim-nc2", "Electrical Installation and Maintenance NC II", "EIM NC II", "TESDA · Construction & Trades", [
      ["Electrical safety and basic circuits"],
      ["Install electrical wiring and fixtures", "Install lighting systems"],
      ["Test and maintain electrical installations", "Read electrical plans"]
    ]),
    tesda("tesda-auto-nc2", "Automotive Servicing NC II", "Automotive Servicing NC II", "TESDA · Automotive Trades", [
      ["Workshop safety and tools"],
      ["Service engine systems", "Service suspension and steering"],
      ["Service brake systems", "Inspect and maintain vehicles"]
    ]),
    tesda("tesda-plumbing-nc1", "Plumbing NC I", "Plumbing NC I", "TESDA · Construction & Trades", [
      ["Workplace safety and plumbing tools"],
      ["Install basic piping systems", "Install plumbing fixtures"],
      ["Test and maintain plumbing systems", "Interpret basic plans"]
    ]),
    tesda("tesda-rac-nc2", "Refrigeration and Air-Conditioning Servicing NC II", "RAC Servicing NC II", "TESDA · Construction & Trades", [
      ["Workplace safety and refrigeration principles"],
      ["Install domestic refrigeration systems", "Service air-conditioning systems"],
      ["Diagnose faults and perform maintenance", "Handle refrigerants safely"]
    ]),
    tesda("tesda-vgd-nc3", "Visual Graphic Design NC III", "Visual Graphic Design NC III", "TESDA · Arts & Design", [
      ["Design fundamentals and client communication"],
      ["Develop visual concepts", "Create digital graphic assets"],
      ["Prepare layouts and production files", "Present and revise design work"]
    ]),
    tesda("tesda-ccs-nc2", "Contact Center Services NC II", "Contact Center Services NC II", "TESDA · Communication & Business", [
      ["Workplace communication and data privacy"],
      ["Handle customer inquiries", "Communicate effectively with customers"],
      ["Resolve customer concerns", "Use contact center systems"]
    ]),
    tesda("tesda-crops-nc2", "Agricultural Crops Production NC II", "Crops Production NC II", "TESDA · Agriculture & Environment", [
      ["Farm safety and crop production basics"],
      ["Prepare land and plant crops", "Maintain crop growth"],
      ["Harvest and postharvest crops", "Operate and maintain farm tools"]
    ]),
    tesda("tesda-dressmaking-nc2", "Dressmaking NC II", "Dressmaking NC II", "TESDA · Arts & Trades", [
      ["Workplace safety and sewing tools"],
      ["Take body measurements", "Draft and cut patterns"],
      ["Construct and finish garments", "Alter and repair garments"]
    ]),
    tesda("tesda-ict-cad-nc2", "Computer-Aided Design Drafting NC II", "CAD Drafting NC II", "TESDA · Architecture & Built Environment", [
      ["Drafting fundamentals and workplace safety"],
      ["Create 2D drawings", "Prepare technical drawing layouts"],
      ["Revise and export drawing files", "Apply drafting standards"]
    ])
  ];
})();
