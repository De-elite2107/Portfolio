// Capability domains: what I build in each area, then the tools I use there.
// Merges the old Knowledge list, Coding Skills and My Services sections.

export type Capability = {
  title: string;
  summary: string;
  tools: string[];
};

export const capabilities: Capability[] = [
  {
    title: "Full-stack web",
    summary:
      "Web apps and APIs from database design to deployment, with payments, auth and dashboards that hold up in production.",
    tools: [
      "TypeScript", "React", "Next.js", "Nuxt / Vue", "Inertia.js", "Laravel", "Django", "FastAPI", "Flask",
      "Node.js / Express", "PostgreSQL", "MySQL", "MongoDB", "Prisma", "Redis", "REST & OpenAPI", "Paystack",
      "WordPress", "Chart.js", "Three.js", "WCAG accessibility",
    ],
  },
  {
    title: "Security",
    summary:
      "Security built in from the start: strong authentication and access control, intrusion detection and vulnerability assessment, grounded in a B.Sc. in Cyber Security.",
    tools: [
      "Auth.js", "Sanctum", "JWT", "RBAC", "Intrusion detection", "Snort", "Suricata", "Vulnerability scanning",
      "OWASP ZAP", "Mobile security",
    ],
  },
  {
    title: "AI & machine learning",
    summary:
      "LLM features and trained models inside real products, from chat assistants and RAG search to detection and prediction systems.",
    tools: [
      "LLM integration", "RAG", "scikit-learn", "XGBoost", "SHAP", "PyTorch", "BERT / DistilBERT", "spaCy", "NLTK",
    ],
  },
  {
    title: "Web3",
    summary:
      "Smart contracts and wallet-connected apps, plus payment systems that watch several chains at once.",
    tools: [
      "Solidity", "Wagmi", "RainbowKit", "viem", "Sign-In with Ethereum", "EVM chains", "TRON", "Solana",
    ],
  },
  {
    title: "Mobile, DevOps & hardware",
    summary:
      "Cross-platform apps, bots and the pipelines that ship them, plus embedded robotics builds.",
    tools: [
      "Flutter", "React Native", "Riverpod", "Firebase Cloud Messaging", "Telegram bots", "Docker", "GitHub Actions",
      "Celery", "AWS", "Git", "Pest", "Arduino", "Figma", "SVG & CSS animation",
    ],
  },
];

export const spokenLanguages = "English and Yoruba fluently, and French at an intermediate level.";
