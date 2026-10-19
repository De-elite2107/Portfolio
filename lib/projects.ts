// Every portfolio entry lives here. Order is display order; the Work grid
// shows the first few and reveals the rest on request.

export type ProjectStatus =
  | "live"
  | "launching"
  | "review"
  | "complete"
  | "awaiting-install"
  | "in-progress"
  | "not-deployed"
  | "confidential"
  | "offline";

export type ProjectCategory = "web" | "apps" | "web3" | "ai";

export type Project = {
  title: string;
  kind: string;
  duration: string;
  status: ProjectStatus;
  categories: ProjectCategory[];
  summary: string;
  stack: string[];
  // Landscape screenshot (16:9 or close to it).
  image?: string;
  // Portrait phone-width capture, used as-is in the tall grid cards.
  poster?: string;
  // Square client logo tile shown as the card's avatar.
  logo?: string;
  url?: string;
  linkLabel?: string;
};

export const statusLabel: Record<ProjectStatus, string> = {
  live: "Live",
  launching: "Launching soon",
  review: "In review",
  complete: "Complete",
  "awaiting-install": "Awaiting install",
  "in-progress": "In progress",
  "not-deployed": "Not deployed",
  confidential: "Confidential",
  offline: "Offline",
};

export const categoryLabel: Record<ProjectCategory, string> = {
  web: "Web",
  apps: "Apps & Devices",
  web3: "Web3",
  ai: "AI & Security",
};

export const projects: Project[] = [
  {
    title: "ThreeBubbles",
    kind: "Car-wash membership platform",
    duration: "4 weeks",
    status: "live",
    categories: ["web"],
    summary:
      "API behind a live car-wash membership service: Paystack-verified subscriptions, QR membership cards, partner verification and month-end settlements, with auto-deploy for the frontend.",
    stack: ["Laravel", "Sanctum", "Paystack", "MySQL", "OpenAPI", "GitHub Actions"],
    image: "/images/portfolio/threebubbles.png",
    poster: "/images/work/m-threebubbles.jpg",
    logo: "/images/clients/threebubbles.png",
    url: "https://threebubbles.com/",
  },
  {
    title: "Hightower Global Church",
    kind: "Church website + management system",
    duration: "2 weeks",
    status: "live",
    categories: ["web"],
    summary:
      "Rebuilt the church's site and admin on Laravel: member dashboard with giving statements and pledges, sermons, devotionals, cell groups, Stripe giving and first-timer registration.",
    stack: ["Laravel", "Inertia", "React", "TypeScript", "Stripe"],
    image: "/images/work/d-hightower.jpg",
    poster: "/images/work/m-hightower.jpg",
    logo: "/images/clients/hightower.png",
    url: "https://update.hightowerglobal.org/",
  },
  {
    title: "USDT Digital-Goods Vending Bot",
    kind: "Telegram bot",
    duration: "1 week",
    status: "live",
    categories: ["web3", "apps"],
    summary:
      "Telegram storefront with watch-only payment detection across TRON, BSC, Ethereum and Solana plus Binance Pay. Crash-safe delivery, encrypted stock, 382 subscribers and 50+ orders fulfilled.",
    stack: ["Python", "aiogram", "PostgreSQL", "Redis", "web3.py", "tronpy", "Docker"],
    image: "/images/portfolio/tgbot.png",
    url: "https://t.me/markkyy_bot",
    linkLabel: "Open the bot",
  },
  {
    title: "Gas Station POS",
    kind: "Desktop point of sale",
    duration: "5 days",
    status: "awaiting-install",
    categories: ["apps"],
    summary:
      "Offline-first till for cooking-gas stations: the attendant types an amount or a weight and the other is priced live, with tank levels and a cloud dashboard for the owner.",
    stack: ["Tauri", "Rust", "React", "TypeScript", "SQLite", "FastAPI", "PostgreSQL"],
  },
  {
    title: "Orblo",
    kind: "AI wallet portfolio & security agent",
    duration: "1 week",
    status: "review",
    categories: ["web3", "ai"],
    summary:
      "Wallet agent that prices on-chain holdings through Chainlink, explains them in an AI chat, and flags unlimited allowances and unverified spender contracts.",
    stack: ["React", "Wagmi", "viem", "FastAPI", "PostgreSQL", "Chainlink", "LLM"],
    image: "/images/portfolio/orbio.png",
    url: "https://github.com/De-elite2107/web3walletportfolioagent",
    linkLabel: "View source",
  },
  {
    title: "Superstore POS",
    kind: "Desktop point of sale",
    duration: "1 week",
    status: "complete",
    categories: ["apps"],
    summary:
      "Offline desktop till for superstores: product catalogue, barcode checkout, printed receipts, stock ledger and PIN logins by role, with multi-branch sync to a central server.",
    stack: ["Tauri", "Rust", "React", "TypeScript", "SQLite", "FastAPI"],
  },
  {
    title: "Lavera Nigeria",
    kind: "Building-materials store",
    duration: "1 week",
    status: "launching",
    categories: ["web"],
    summary:
      "Store with a delivery engine that prices by state and LGA zone and picks the smallest vehicle that fits each load.",
    stack: ["Next.js 15", "Prisma", "PostgreSQL", "Auth.js", "Zod"],
    image: "/images/portfolio/lavera.png",
    logo: "/images/clients/lavera.png",
  },
  {
    title: "De-elite Sentinel",
    kind: "Website threat-monitoring SaaS",
    duration: "Ongoing",
    status: "in-progress",
    categories: ["ai", "web"],
    summary:
      "Security monitoring for websites: sites report traffic through signed API calls, and threats and activity are logged per organisation, with plans and billing. This site reports to it.",
    stack: ["Laravel", "Inertia", "React", "Paddle", "Sentry", "Recharts"],
    image: "/images/portfolio/sentinel.png",
  },
  {
    title: "QuickCommerce",
    kind: "Auction & barter module",
    duration: "3 weeks",
    status: "live",
    categories: ["web"],
    summary:
      "Auction, buy-it-now and barter marketplace module for a multi-tenant commerce platform led by a teammate.",
    stack: ["Laravel 12", "Inertia", "React 19", "Paystack", "Pest"],
    image: "/images/portfolio/quickcommerce-auction.png",
  },
  {
    title: "GIRO iGaming Framework",
    kind: "Multi-tenant web app",
    duration: "4 weeks",
    status: "live",
    categories: ["web"],
    summary:
      "Team build of a white-label iGaming frontend; I built the home, PIX recharge, VIP, jackpot and PWA-install modules on an 11-theme engine.",
    stack: ["Nuxt 4", "Vue", "Pinia", "Tailwind", "Zod"],
    image: "/images/portfolio/GIRO.png",
    url: "https://giro.wdang.vip/",
  },
  {
    title: "Citi Spa & Sauna",
    kind: "WordPress website",
    duration: "3 days",
    status: "live",
    categories: ["web"],
    summary: "Designed, built, hosted and migrated the site for a wellness and spa business.",
    stack: ["WordPress", "Elementor", "cPanel"],
    image: "/images/portfolio/citispa.png",
    poster: "/images/work/m-citispa.jpg",
    logo: "/images/clients/citispa.png",
    url: "https://citispaandsauna.com/",
  },
  {
    title: "GoldenCity",
    kind: "Crypto real-estate platform",
    duration: "1 week",
    status: "not-deployed",
    categories: ["web3"],
    summary: "Fractional property shares as NFTs, with Sign-In with Ethereum and 3D property views.",
    stack: ["React", "Three.js", "Express", "MongoDB", "Solidity", "RainbowKit"],
    image: "/images/portfolio/goldencity.png",
  },
  {
    title: "ChurchConnect",
    kind: "Multi-church mobile app",
    duration: "Ongoing",
    status: "in-progress",
    categories: ["apps"],
    summary:
      "One app for many churches, each with its own branded portal: role-aware tabs for members and staff, and an offline-first registration kiosk with live camera capture.",
    stack: ["Expo", "React Native", "TypeScript", "Laravel", "Sanctum"],
  },
  {
    title: "Machine learning & security systems",
    kind: "17 systems for private clients",
    duration: "3 days to 1 week each",
    status: "confidential",
    categories: ["ai"],
    summary:
      "Phishing detection with XGBoost and fine-tuned BERT, hybrid intrusion detection, early-warning analytics, forensic log analysis and a RAG support desk.",
    stack: ["Python", "FastAPI", "Django", "XGBoost", "BERT", "SHAP", "Snort", "Suricata"],
  },
  {
    title: "LaundryPad",
    kind: "Animated hero illustration",
    duration: "1 day",
    status: "not-deployed",
    categories: ["web"],
    summary:
      "Hero illustration generated entirely in code: a Python build tool outputs animated SVG, light and dark themes, and a Figma import.",
    stack: ["Python", "SVG", "CSS animation"],
    image: "/images/portfolio/laundrypad.png",
  },
  {
    title: "StudyBuddy",
    kind: "EdTech platform",
    duration: "2 weeks",
    status: "offline",
    categories: ["web"],
    summary: "Learning platform with summarised study materials and a study buddy that keeps students motivated.",
    stack: ["Laravel", "Inertia", "React", "Radix UI"],
    image: "/images/portfolio/SB.png",
    logo: "/images/clients/studybuddy.png",
  },
  {
    title: "Delta Health",
    kind: "Health access platform",
    duration: "2 weeks",
    status: "offline",
    categories: ["web"],
    summary: "Verified health information, nearby clinics and appointment booking for residents of Delta State.",
    stack: ["Laravel", "Inertia", "React", "Leaflet"],
    image: "/images/portfolio/DH.png",
  },
  {
    title: "Church Management System API",
    kind: "REST API",
    duration: "2 days",
    status: "offline",
    categories: ["web"],
    summary: "First API behind the Hightower system, covering members, events and communications, documented with Swagger.",
    stack: ["Django", "DRF", "PostgreSQL", "Swagger"],
    image: "/images/portfolio/cmsserver.png",
  },
  {
    title: "AdeptBloc",
    kind: "Landing page",
    duration: "3 days",
    status: "offline",
    categories: ["web"],
    summary: "Landing page for a virtual internship programme connecting students with remote work experience.",
    stack: ["Next.js", "Chakra UI"],
    image: "/images/portfolio/adeptbloc.png",
    logo: "/images/clients/adeptbloc.png",
  },
  {
    title: "PropertyCo",
    kind: "Real-estate web app",
    duration: "1 month",
    status: "offline",
    categories: ["web"],
    summary: "Platform for the sale and rental of exclusive homes.",
    stack: ["Next.js", "Chakra UI", "MUI"],
    image: "/images/portfolio/propertyco.png",
    logo: "/images/clients/propertyco.png",
  },
  {
    title: "Remkay Schools",
    kind: "School website",
    duration: "3 months",
    status: "offline",
    categories: ["web"],
    summary: "School website with resources, events and updates for students and parents.",
    stack: ["Python"],
    image: "/images/portfolio/remkay.png",
  },
  {
    title: "Arduino robotics builds",
    kind: "Robotics for a client",
    duration: "1 week to 1 month each",
    status: "not-deployed",
    categories: ["apps"],
    summary:
      "A servo-driven smart dustbin with ultrasonic sensing, a Bluetooth phone-controlled RC car with PWM motor control, and a cardboard robot.",
    stack: ["Arduino", "C++", "Sensors", "Motor control"],
  },
];
