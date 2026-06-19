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
    description: `1LINK is the national payment switch of Pakistan, enabling banks and financial institutions to transfer funds and process transactions securely across the country. As a Quality Assurance Engineer, I work on testing and validating these financial services to ensure they function accurately and reliably for millions of users.`,
    responsibilities: [
      "Test debit and credit card services, online bill payment systems, and interbank fund transfers to ensure transactions are processed accurately and reliably",

      "Perform User Acceptance Testing (UAT), create and execute test cases, and validate new features, patches, and system enhancements before production release",

      "Conduct API testing using Postman to verify transaction requests, responses, and end-to-end payment flows across different banking partners",
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
      "An AI-powered Formula 1 assistant built using LangGraph's multi-agent architecture. The system coordinates specialized agents to retrieve live driver and constructor standings, predict championship outcomes using Monte Carlo simulations, provide real-time weather insights, deliver official YouTube race highlights, and retrieve information through Google Search. All capabilities are accessible through a natural conversational interface.",
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
    demo:"/videos/F1 assistant demo video.mp4",

  },

  {
    name: "AI Content Creation Agents",
    description:
      "A CrewAI-powered multi-agent content generation platform that automates research, writing, and SEO optimization. The system employs three specialized agents: a Media Analyst for trend research, a Content Writer for platform-specific content generation, and an SEO Optimizer for improving discoverability and audience reach.",
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
    demo:"/videos/content_creation_agents.mp4",
  },

  {
    name: "PII Detection & Redaction (Audio)",
    description:
      "An intelligent privacy-preserving AI system that detects and redacts sensitive personal information from audio recordings. The solution converts speech to text, identifies entities such as names, CNIC numbers, and account details using Named Entity Recognition (NER), and automatically removes sensitive information from recordings to support data privacy and compliance requirements.",
    tags: [
      "Python",
      "ASR",
      "NER",
      "NLP",
      "Data Privacy",
      "HuggingFace",
    ],
    category: "NLP",
    link: "https://github.com/Arfa-Ahsan/PII_Detection_and_Redaction_audio_Project",
    demo:"/videos/PII_detection&redaction.mp4"
  },

  {
    name: "UrduWhiz",
    description:
      "An AI-powered Urdu learning and reading platform designed for children. The system processes scanned Urdu storybooks in PDF format and enables interactive question answering over the content. Built using a Hybrid RAG (Retrieval-Augmented Generation) architecture that combines keyword-based retrieval, semantic search, and reranking techniques to deliver accurate and contextually relevant responses.",
    tags: [
      "Python",
      "RAG",
      "LLMs",
      "Semantic Search",
      "OCR",
      "Education AI",
    ],
    category: "Generative AI",
    link: "https://github.com/Arfa-Ahsan/UrduWhiz",
    demo:"/videos/UrduWhiz.mp4",
  },
];
