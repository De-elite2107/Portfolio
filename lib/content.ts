// Copy for the sections other than Work. Numbers, prices and answers here were
// approved by Delight; do not add figures or quotes that Delight has not supplied.

export type ServiceMedia =
  | { type: "reel"; images: string[] }
  | { type: "carousel"; slides: ({ kind: "image"; src: string; alt: string } | { kind: "phones"; srcs: string[]; alt: string })[] }
  | { type: "compare"; before: string; after: string; beforeAlt: string; afterAlt: string };

export type Service = { title: string; body: string; media: ServiceMedia };

export const services: Service[] = [
  {
    title: "Full-Stack Web Apps",
    body: "Production web apps and APIs from database to deployment: payments, logins and roles, admin dashboards and automated deploys, built on Laravel, Next.js, Django or FastAPI.",
    media: {
      type: "reel",
      images: ["/images/work/d-threebubbles.jpg", "/images/work/d-hightower.jpg", "/images/work/d-citispa.jpg"],
    },
  },
  {
    title: "Mobile, Desktop & Bots",
    body: "Cross-platform mobile apps in Flutter and React Native, offline-first desktop tills built with Tauri, and Telegram bots that take crypto payments.",
    media: {
      type: "carousel",
      slides: [
        {
          kind: "phones",
          srcs: ["/images/work/m-threebubbles.jpg", "/images/work/m-hightower.jpg", "/images/work/m-citispa.jpg"],
          alt: "ThreeBubbles, Hightower and Citi Spa on a phone",
        },
        { kind: "image", src: "/images/portfolio/tgbot.png", alt: "The USDT vending bot in Telegram" },
        { kind: "image", src: "/images/portfolio/GIRO.png", alt: "The GIRO installable web app" },
      ],
    },
  },
  {
    title: "Web3 & AI Products",
    body: "Wallet-connected apps, Solidity contracts and multi-chain payment watchers, plus LLM features and trained models: RAG search, chat agents and fraud detection.",
    media: {
      type: "carousel",
      slides: [
        { kind: "image", src: "/images/portfolio/orbio.png", alt: "Orblo wallet agent dashboard" },
        { kind: "image", src: "/images/portfolio/goldencity.png", alt: "GoldenCity property marketplace" },
      ],
    },
  },
  {
    title: "Rebuilds & Redesigns",
    body: "Outgrown your current site? I rebuild legacy systems on a modern stack and move your content and users across, hardening security on the way. Drag to compare Hightower before and after.",
    media: {
      type: "compare",
      before: "/images/work/ba-hightower-before.jpg",
      after: "/images/work/ba-hightower-after.jpg",
      beforeAlt: "Hightower Global Church's previous website",
      afterAlt: "Hightower Global Church's rebuilt website",
    },
  },
];

export const whyMe = {
  feature: {
    title: "Security-First",
    body: "A B.Sc. in Cyber Security shapes every build: role-based access, hardened defaults and monitoring from day one. This grid is the SHA-256 of my name, computed in your browser.",
  },
  points: [
    {
      icon: "stack",
      title: "End-to-End Builder",
      body: "Database, API, front end, mobile and deployment from one person, so nothing gets lost between handoffs.",
    },
    {
      icon: "lightning",
      title: "Fast Turnaround",
      body: "Landing pages in 1–2 weeks and full apps in 3–6 weeks, with progress you can see along the way.",
    },
  ],
} as const;

export const processSteps = [
  { title: "Discovery call", body: "We talk through your goals, users and timeline on a free 15-minute call." },
  { title: "Scope & design", body: "You get a written plan with milestones, a fixed quote and screens before code starts." },
  { title: "Build & review", body: "I build in milestones and share progress, with two rounds of changes at each one." },
  { title: "Launch & support", body: "Deployed, monitored and handed over, with support included after launch." },
];

export const stats = [
  { value: 6, suffix: "+", label: "Years Building" },
  { value: 10, suffix: "+", label: "Clients Served" },
  { value: 20, suffix: "+", label: "Projects Built" },
  { value: 50, suffix: "+", label: "Bot Orders Fulfilled" },
];

export const CLIENT_COUNT = "10+";

export const clients = [
  { name: "Hightower Global Church", logo: "/images/clients/hightower.png" },
  { name: "ThreeBubbles", logo: "/images/clients/threebubbles.png" },
  { name: "Lavera Nigeria", logo: "/images/clients/lavera.png" },
  { name: "Citi Spa & Sauna", logo: "/images/clients/citispa.png" },
  { name: "PropertyCo", logo: "/images/clients/propertyco.png" },
  { name: "StudyBuddy", logo: "/images/clients/studybuddy.png" },
  { name: "AdeptBloc", logo: "/images/clients/adeptbloc.png" },
];

export type Currency = "USD" | "NGN";

export type Plan = {
  name: string;
  from: boolean;
  price: Record<Currency, number>;
  per: string;
  audience: string;
  badge?: string;
  cta: string;
  features: string[];
};

export const plans: Plan[] = [
  {
    name: "Launch",
    from: true,
    price: { USD: 300, NGN: 450_000 },
    per: "/project",
    audience: "Landing pages and business sites",
    cta: "Get Started",
    features: [
      "Up to 5 responsive pages",
      "WordPress or custom code",
      "Basic SEO and analytics",
      "Contact form",
      "Domain and hosting setup",
      "2 rounds of changes",
      "2 weeks of support",
    ],
  },
  {
    name: "Build",
    from: true,
    price: { USD: 1500, NGN: 2_250_000 },
    per: "/project",
    audience: "Full web or mobile apps",
    badge: "2 slots left.",
    cta: "Book a Call",
    features: [
      "Discovery and written scope",
      "Front end, API and database",
      "Logins and user roles",
      "Payments (Paystack or Stripe)",
      "Admin dashboard",
      "Security review",
      "Deployment and CI/CD",
      "30 days of support",
    ],
  },
  {
    name: "Care",
    from: false,
    price: { USD: 400, NGN: 600_000 },
    per: "/month",
    audience: "Ongoing support after launch",
    cta: "Get Started",
    features: [
      "Bug fixes and small features",
      "Security updates",
      "Uptime monitoring",
      "Monthly report",
      "Replies within 24 hours",
      "Priority booking",
    ],
  },
];

export const faqs = [
  {
    q: "How long does a project take?",
    a: "Landing pages take 1–2 weeks and full apps 3–6 weeks. You get a firm timeline after our first call, once the scope is clear.",
  },
  {
    q: "How does payment work?",
    a: "50% to start and 50% on delivery. Bigger builds are split into milestones, so you pay as each part is finished and approved.",
  },
  {
    q: "Do you keep client work confidential?",
    a: "Yes. I'm happy to sign an NDA before we talk details, and some of my client work isn't shown here for exactly that reason.",
  },
  {
    q: "What do you need from me to start?",
    a: "Your goals, any brand files and content you already have, and access to existing systems I'll be working with. If something is missing, we'll plan around it.",
  },
  {
    q: "Do you work with clients outside Nigeria?",
    a: "Yes. I work remotely with clients anywhere, with regular written updates and calls whenever they help.",
  },
  {
    q: "What happens after launch?",
    a: "Launch includes 2 weeks of fixes and Build includes 30 days. After that, the Care plan keeps your product updated, monitored and secure.",
  },
];

export type Testimonial = { name: string; role: string; quote: string; avatar?: string };

// Real, approved quotes only. While this is empty the section is hidden on the
// live site; in development it shows labelled sample cards for layout.
export const testimonials: Testimonial[] = [];
