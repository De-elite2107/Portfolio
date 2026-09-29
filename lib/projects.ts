// Every portfolio entry lives here. Order is display order; `featured` entries
// get the large treatment at the top of the Work section.

export type ProjectStatus =
  | "live"
  | "launching"
  | "review"
  | "not-deployed"
  | "confidential"
  | "offline";

export type Project = {
  title: string;
  kind: string;
  duration: string;
  status: ProjectStatus;
  summary: string;
  details?: string;
  stack: string[];
  image?: string;
  url?: string;
  linkLabel?: string;
  featured?: boolean;
};

export const statusLabel: Record<ProjectStatus, string> = {
  live: "Live",
  launching: "Launching soon",
  review: "In review",
  "not-deployed": "Not deployed",
  confidential: "Confidential",
  offline: "Offline",
};

export const projects: Project[] = [
  {
    title: "ThreeBubbles",
    kind: "Car-wash membership platform",
    duration: "4 weeks",
    status: "live",
    summary: "Laravel API for a monthly car-wash membership business, replacing a spreadsheet-run operation.",
    details:
      "Built the API behind a live membership service: Paystack-verified subscriptions, QR membership cards, partner service verification with admin approval, and month-end partner settlements calculated from approved services only. Added role-based access with Sanctum and auto-generated API docs, and set up hosting and GitHub Actions auto-deploy for the Next.js frontend.",
    stack: ["Laravel", "Sanctum", "Paystack", "MySQL", "OpenAPI", "Cloudflare R2", "GitHub Actions"],
    image: "/images/portfolio/threebubbles.png",
    url: "https://threebubbles.com/",
    featured: true,
  },
  {
    title: "USDT Digital-Goods Vending Bot",
    kind: "Telegram bot",
    duration: "1 week",
    status: "live",
    summary: "Telegram storefront that sells digital goods for USDT across four chains.",
    details:
      "Built a Telegram storefront for a client with watch-only payment detection across TRON, BSC, Ethereum and Solana plus Binance Pay. Row-level locking means two buyers never claim the same stock unit, delivery is crash-safe and idempotent, and stock is encrypted at rest. Now serving 382 subscribers with 500+ orders fulfilled.",
    stack: ["Python", "aiogram", "PostgreSQL", "Redis", "web3.py", "tronpy", "Docker"],
    image: "/images/portfolio/tgbot.png",
    url: "https://t.me/markkyy_bot",
    linkLabel: "Open the bot",
    featured: true,
  },
  {
    title: "Orblo",
    kind: "AI wallet portfolio & security agent",
    duration: "1 week",
    status: "review",
    summary: "Wallet agent that prices on-chain holdings and flags risky token approvals.",
    details:
      "Built an on-chain wallet agent that reads real holdings, prices them in USD through Chainlink feeds, and explains the portfolio in an AI chat. Its security scan flags unlimited allowances and unverified spender contracts, so users see what is risky, not just what they hold. Submitted to Orbio's Build Week, currently under review.",
    stack: ["React", "Wagmi", "viem", "FastAPI", "PostgreSQL", "Chainlink", "LLM"],
    image: "/images/portfolio/orbio.png",
    url: "https://github.com/De-elite2107/web3walletportfolioagent",
    linkLabel: "View source",
    featured: true,
  },
  {
    title: "Lavera Nigeria",
    kind: "Building-materials store",
    duration: "1 week",
    status: "launching",
    summary:
      "Store with a delivery engine that prices by state and LGA zone and picks the smallest vehicle that fits each load.",
    stack: ["Next.js 15", "Prisma", "PostgreSQL", "Auth.js", "Zod"],
    image: "/images/portfolio/lavera.png",
  },
  {
    title: "QuickCommerce",
    kind: "Auction & barter module",
    duration: "3 weeks",
    status: "live",
    summary:
      "Auction, buy-it-now and barter marketplace module for a multi-tenant commerce platform led by a teammate.",
    stack: ["Laravel 12", "Inertia", "React 19", "Paystack", "Pest"],
    image: "/images/portfolio/quickcommerce-auction.png",
  },
  {
    title: "GoldenCity",
    kind: "Crypto real-estate platform",
    duration: "1 week",
    status: "not-deployed",
    summary: "Fractional property shares as NFTs, with Sign-In with Ethereum and 3D property views.",
    stack: ["React", "Three.js", "Express", "MongoDB", "Solidity", "RainbowKit"],
    image: "/images/portfolio/goldencity.png",
  },
  {
    title: "LaundryPad",
    kind: "Animated hero illustration",
    duration: "1 day",
    status: "not-deployed",
    summary:
      "Hero illustration generated entirely in code: a Python build tool outputs animated SVG, light and dark themes, and a Figma import.",
    stack: ["Python", "SVG", "CSS animation"],
    image: "/images/portfolio/laundrypad.png",
  },
  {
    title: "Machine learning & security systems",
    kind: "17 systems for private clients",
    duration: "3 days – 1 week each",
    status: "confidential",
    summary:
      "Phishing detection with XGBoost and fine-tuned BERT, hybrid intrusion detection, early-warning analytics, forensic log analysis and a RAG support desk.",
    stack: ["Python", "FastAPI", "Django", "XGBoost", "BERT", "SHAP", "Snort", "Suricata"],
  },
  {
    title: "GIRO iGaming Framework",
    kind: "Multi-tenant web app",
    duration: "4 weeks",
    status: "live",
    summary:
      "Team build of a white-label iGaming frontend; I built the home, PIX recharge, VIP, jackpot and PWA-install modules on an 11-theme engine.",
    stack: ["Nuxt 4", "Vue", "Pinia", "Tailwind", "Zod"],
    image: "/images/portfolio/GIRO.png",
    url: "https://giro.wdang.vip/",
  },
  {
    title: "StudyBuddy",
    kind: "EdTech platform",
    duration: "2 weeks",
    status: "live",
    summary: "Learning platform with summarised study materials and a study buddy that keeps students motivated.",
    stack: ["Laravel", "Inertia", "React", "Radix UI"],
    image: "/images/portfolio/SB.png",
    url: "https://usestudybuddy.org/homepage",
  },
  {
    title: "Delta Health",
    kind: "Health access platform",
    duration: "2 weeks",
    status: "live",
    summary: "Verified health information, nearby clinics and appointment booking for residents of Delta State.",
    stack: ["Laravel", "Inertia", "React", "Leaflet"],
    image: "/images/portfolio/DH.png",
    url: "https://deltahealth.usestudybuddy.org/",
  },
  {
    title: "Citi Spa & Sauna",
    kind: "WordPress website",
    duration: "3 days",
    status: "live",
    summary: "Designed, built, hosted and migrated the site for a wellness and spa business.",
    stack: ["WordPress", "Elementor", "cPanel"],
    image: "/images/portfolio/citispa.png",
    url: "https://citispaandsauna.com/",
  },
  {
    title: "Hightower Global Church",
    kind: "Website + management system",
    duration: "2 weeks",
    status: "live",
    summary: "Church website and admin system for members, events, attendance, donations and announcements.",
    stack: ["Next.js", "Chakra UI", "Django REST"],
    image: "/images/portfolio/HG.png",
    url: "https://hightowerglobal.org/",
  },
  {
    title: "Church Management System API",
    kind: "REST API",
    duration: "2 days",
    status: "offline",
    summary: "API behind the Hightower system, covering members, events and communications, documented with Swagger.",
    stack: ["Django", "DRF", "PostgreSQL", "Swagger"],
    image: "/images/portfolio/cmsserver.png",
  },
  {
    title: "AdeptBloc",
    kind: "Landing page",
    duration: "3 days",
    status: "offline",
    summary: "Landing page for a virtual internship programme connecting students with remote work experience.",
    stack: ["Next.js", "Chakra UI"],
    image: "/images/portfolio/adeptbloc.png",
  },
  {
    title: "PropertyCo",
    kind: "Real-estate web app",
    duration: "1 month",
    status: "offline",
    summary: "Platform for the sale and rental of exclusive homes.",
    stack: ["Next.js", "Chakra UI", "MUI"],
    image: "/images/portfolio/propertyco.png",
  },
  {
    title: "Remkay Schools",
    kind: "School website",
    duration: "3 months",
    status: "offline",
    summary: "School website with resources, events and updates for students and parents.",
    stack: ["Python"],
    image: "/images/portfolio/remkay.png",
  },
  {
    title: "Arduino robotics builds",
    kind: "Robotics for a client",
    duration: "1 week – 1 month each",
    status: "not-deployed",
    summary:
      "A servo-driven smart dustbin with ultrasonic sensing, a Bluetooth phone-controlled RC car with PWM motor control, and a cardboard robot.",
    stack: ["Arduino", "C++", "Sensors", "Motor control"],
  },
];
