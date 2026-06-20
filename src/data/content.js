// ─── All portfolio content lives here. Edit this file to update the site. ───

export const profile = {
  name: "Arfa Ahsan",
  title: "Quality Assurance Engineer",
  email: "arfaahsan382@email.com",
  github: "https://github.com/Arfa-Ahsan",
  githubUsername: "Arfa-Ahsan",
  linkedin: "https://www.linkedin.com/in/arfa-ahsan-82a552295/",
  location: "Karachi, Pakistan",
  bio: [
    `I work as a Quality Assurance Engineer in the fintech industry, where I help ensure that financial transactions are processed correctly and reliably. My day-to-day work involves testing services such as bill payments, interbank fund transfers, and card transactions, making sure everything works as expected before reaching customers.`,
    `My interest in Artificial Intelligence started long before my career in Quality Assurance. Coming from a background with a strong interest in AI and data-driven problem solving, I have always been curious about how technology can be used to make systems smarter and more efficient. When I entered the fintech industry, I naturally began looking for ways to apply that mindset to my work.`,
    `One area where this has been particularly valuable is automation. I have used AI and automation techniques to reduce repetitive manual tasks, such as verifying logs and validating transaction data across card payment and bill payment systems. This not only saves time but also improves accuracy and allows teams to focus on more complex problems.`,
  ],
};

export const experience = [
  {
    company: "1LINK Pvt Limited",
    role: "Quality Assurance Engineer",
    period: "2025 — Present",
    location: "Karachi, Pakistan",
    description: `1LINK is Pakistan's national payment switch, helping banks transfer funds and process transactions securely across the country. As a QA Engineer, I test and validate these financial services to make sure they work accurately for millions of users.`,
    responsibilities: [
      "Test debit/credit card services, bill payments, and fund transfers to ensure accurate, reliable transactions.",

      "Perform UAT, create and run test cases, and validate new features and updates before release.",

      "Conduct API testing using Postman to verify transaction requests, responses, and payment flows across banking partners.",
    ],

    technologies: [
      "Postman",
      "SQL",
      "SoapUI",
      "Java",
      "persevalPro",
      "Ubuntu",
      "Payment Gateways",
    ],
  },
];

export const skills = [
  {
    category: "Quality Assurance & FinTech",
    items: [
      "Test Planning",
      "UAT",
      "API Testing",
      "Postman",
      "Financial Systems Testing",
      "Card Network Testing",
      "SoapUI",
    ],
  },
  {
    category: "AI & Machine Learning",
    items: [
      "Python",
      "Scikit-Learn",
      "TensorFlow",
      "NLP",
      "LLM Applications",
      "Agentic AI",
      "RAG",
      "Transformers",
      "Classification Models",
      "Feature Engineering",
    ],
  },
  {
    category: "Backend & APIs",
    items: [
      "FastAPI",
      "Flask",
      "SQLAlchemy",
      "PostgreSQL",
      "Pydantic",
      "JWT Auth",
      "RESTful APIs",
    ],
  },
  {
    category: "Frontend & Data",
    items: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "JavaScript",
      "Pandas",
      "NumPy",
      "Jupyter",
      "Matplotlib",
    ],
  },
];

export const projects = [
  {
    name: "RadioCheck F1 Assistant",

    description:
      "An AI-powered Formula 1 assistant built with LangGraph's multi-agent system. It shows live driver and team standings, predicts race outcomes using Monte Carlo simulations, gives weather updates, and finds race highlights. You can chat with it like a normal conversation.",

    tags: [
      "Python",

      "LangGraph",

      "Multi-Agent Systems",

      "LLMs",

      "Web Scraping",

      "Monte Carlo Simulation",
    ],

    category: "AI Agents",

    link: "https://github.com/Arfa-Ahsan/RadioCheck-F1-Assistant",

    demo: "/videos/F1 assistant demo video.mp4",
  },

  {
    name: "AI Content Creation Agents",

    description:
      "A CrewAI-powered platform that automates content creation. Three AI agents work together: one researches trends, one writes content, and one optimizes it for SEO. This makes content creation faster and easier.",

    tags: [
      "Python",

      "CrewAI",

      "LLMs",

      "SEO",

      "Content Generation",

      "Multi-Agent Systems",
    ],

    category: "AI Agents",

    link: "https://github.com/Arfa-Ahsan/Content_Creation_Agents",

    demo: "/videos/content_creation_agents.mp4",
  },

  {
    name: "PII Detection & Redaction (Audio)",

    description:
      "An AI system that finds and removes private information from audio recordings. It converts speech to text, then detects sensitive data like names and CNIC numbers using NER. This helps protect privacy and meet data protection rules.",

    tags: ["Python", "ASR", "NER", "NLP", "Data Privacy", "HuggingFace"],

    category: "NLP",

    link: "https://github.com/Arfa-Ahsan/PII_Detection_and_Redaction_audio_Project",

    demo: "/videos/PII_detection&redaction.mp4",
  },

  {

    name: "UrduWhiz",

    description:

      "An AI-powered platform that helps kids learn to read Urdu. It reads scanned Urdu storybooks (PDFs) and answers questions about the story. It uses a Hybrid RAG system, mixing keyword search, semantic search, and reranking to give accurate answers.",

    tags: ["Python", "RAG", "LLMs", "Semantic Search", "OCR", "Education AI"],

    category: "Generative AI",

    link: "https://github.com/Arfa-Ahsan/UrduWhiz",

    demo: "/videos/UrduWhiz.mp4",

  },
];
