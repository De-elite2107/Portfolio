# Portfolio update notes

Working file for the portfolio update session (started 2026-09-28). Not meant to be committed.
Source: `/home/de-elite/Desktop/De-elite Files/Jobs`. "Commits" = `git shortlog -sne --all`; "you" = Delight / De-elite / theroyalimage (all delightadediran21@gmail.com).

## Status
- Phase 0: done. Optional `URL` added to `components/card.tsx` (fallback text "Link not available at the moment").
- Phase 1: survey done (below).
- User decisions (2026-09-28):
  1. Group D (academic): ONE anonymised card, with no student names, universities or links.
  2. Group C: user built most of them, EXCEPT milepact and AYICOIN (drop both). Git history doesn't show this
     (no nested .git, and only small uncommitted diffs), so authorship rests on the user's word. Ask what they built for each.
  3. Update existing cards (GIRO theme count, PropertyCo rebuild, add CMS mobile app, etc.).
  4. Group E exclusions confirmed. Also excluded: Web3/Budget Planner (xlsx), Web3/Word (docs).
  Added: Web3/laundrypad (hand-coded animated SVG hero illustration + generator tooling, light/dark, Figma export).
- Phase 2: in progress. Queue: ThreeBubbles → TG Bot → Orblo → Lavera → Decima → Auction → Vatebra FRSC →
  Vatebra TIA → Group C (quickcommerce, Aviator, Goldencity, Polymarket bot, crypto_betting, DeFi Estate, MetaRace,
  novaremix, subway-runner, bitscorpus, pg117) → smaller B items → anonymised academic card → existing-card updates.

---

## A. Already on the portfolio (update or leave?)
| Folder | What | Stack | Commits | Portfolio card |
|---|---|---|---|---|
| Web3/unified-baseline-sprint | GIRO iGaming Nuxt 4 SPA, 11 white-label themes | Nuxt 4, Vue 3.5, Pinia, Tailwind, Zod, vue-i18n (pt-BR), Playwright | team of about 7; you 122 of ~900 | GIRO (card says "9-theme engine"; README says 11 sites) |
| Web3/pg117-bet | Nuxt PWA betting front end (probably a GIRO-related site) | Nuxt, Tailwind, @vite-pwa/nuxt | no git | — |
| StudyBuddy/sb_webapp | StudyBuddy web app | Laravel + Inertia React, Radix/shadcn, reCAPTCHA, Zod | you 45, Fortstar09 11 | StudyBuddy |
| StudyBuddy/studdybuddy | earlier StudyBuddy front end | React + Vite, Chakra, Redux Toolkit | no git | (same) |
| delta_health | Delta Health | Laravel 12 + Inertia React, Fortify, Sanctum, Leaflet maps, Radix | no git | Delta Health |
| Church Management System/cms | CMS API (cms_server) | Django, DRF, allauth, drf-yasg, Twilio, Postgres/MySQL, Railway | you 319 | Church Management System API |
| Church Management System/cms_official_web | Hightower site + admin (api.hightowerglobal.org) | Next.js, Chakra, Formik/Yup, jsPDF, xlsx export | you 261 | Hightower Global |
| Church Management System/Management System | management dashboard | Next.js, Chakra (same deps) | you 243 | (part of Hightower) |
| Church Management System/cms_official_web_demo | "godschamber" demo site | Next.js, Tailwind, Swiper | you 3 | — |
| Church Management System/user_form | member details form | static HTML | you 27 | — |
| Church Management System/cms_mobile_app | **CMS mobile app (not on portfolio)** | Flutter, provider, http, shared_preferences | no git | — |
| adeptbloc | AdeptBloc landing page | Next.js, Chakra | you 29 | AdeptBloc |
| property-co/property-co | PropertyCo v1 | Next.js, Chakra + MUI, easy-peasy, Google Maps | you 433 | PropertyCo |
| propco_refined | PropertyCo rebuild (2025) | Next.js, Chakra, Redux Toolkit + persist, RHF + Zod | you 143 | (same) |

## B. New work that is clearly yours (strong candidates)
| Folder | What | Stack / notable | Commits | Live URL |
|---|---|---|---|---|
| Temilolu/threebubbles + threebubbles-api | ThreeBubbles: Next.js front end + Laravel API; Paystack payments, QR codes, S3 storage, Resend email, Scramble API docs, Docker | Next.js, Tailwind, @paystack/inline-js, qrcode.react · Laravel, Sanctum, endroid/qr-code, flysystem-s3, Resend | web: you 8 / Theo Fortune 8 · API: you 49 (only author) | api.threebubbles.com [? front-end domain] |
| TG Bot | USDT digital-goods vending Telegram bot; watch-only multi-chain payments (TRON/BSC/ETH/Solana) + Binance Pay, encrypted stock, in-bot balance | Python, aiogram, SQLAlchemy/asyncpg, Alembic, Redis, tronpy, web3, solders, Docker | you 57 (only author) | — |
| Web3/Orblo | On-chain wallet portfolio agent: holdings, Chainlink/CoinGecko pricing, contract verification, exploit lookup, LLM chat | React + Vite + TS, Wagmi/RainbowKit, viem · FastAPI, Postgres, Alchemy, Etherscan/Sourcify, Tavily, LLM via OpenAI-compatible gateway | you 14 (only author) | — |
| Lavera | Lavera Nigeria building-materials store: cart → order request, delivery pricing / vehicle planning, staff roles (Super Admin/Sales/Logistics) | Next.js 15 App Router, Prisma + Postgres, Auth.js, Zod, RHF, Cloudinary, Resend, pdf-lib | no git [? authorship] | — |
| OT/Auction Project | Auction platform | Laravel + Inertia React, Radix/shadcn, Ziggy | you 31 (only author) | — |
| OT/Decima project/decima | Decima web (landing) | React + Vite + TS, Tailwind | you 2 | — |
| OT/Decima project/decima mobile | Decima mobile app (also copied in OwoHQ/) | Expo / React Native, expo-router, Zustand, biometrics (local-auth), notifications, QR, image picker | you 6, pdowodunni 1 | — |
| Vatebra/FRSCV2 UI | FRSC V2 front end (employer/client work at Vatebra) | React (CRA), MUI, Redux Toolkit, Chart.js, Formik | team; you 79 of 107 (top) | — |
| Vatebra/Trauma Inform App (TIA) | Trauma Inform App front end (Vatebra) | React + Vite + TS, Chakra, Redux, SignalR (real-time), TipTap editor, FullCalendar, TanStack Table | team of about 8; you 74 of ~336 | — |
| Web3/customer-service-app | Customer-service screen replica | Nuxt 3, Tailwind, nuxt-security (CSP) | you 10 | — |
| crypto-deposit-app | Crypto deposit app | React (CRA) + Express, JWT, bcrypt | no git | — |
| Daniel's/superside-enterprise-clone | Superside enterprise page clone | React + Vite, Tailwind, Framer Motion | no git | — |
| Grandma | Tribute page | static HTML + gallery | you 10 | — |
| LUSHBERRIESBYNADIA | Business one-pager | static HTML | you 2 | — |
| Citispa | WordPress/Elementor site (cPanel backup + DB dump only) | WordPress, Elementor | — | [?] |
| Uncle Ayo | Arduino builds: smart dustbin (ultrasonic + servo), Bluetooth RC car, robot | Arduino C++ (.ino) | — | — |

## C. Repos where you have few or no commits (ask what you did)
| Folder | What | Commits |
|---|---|---|
| OT/quickcommerce | Multi-tenant Laravel commerce (stancl/tenancy, passkeys, Cloudinary, Resend) | pleasantddev 34, you 0 |
| Web3/milepact-smartcontract-test | Escrow contract (Foundry) + Next.js dashboard, "cofounder test" | StackAurora 6, founder 2, you 1 |
| Web3/Aviator-Crash-Game | Laravel 12 + Vue/Inertia crash game, Reverb WebSockets, provably fair | no git |
| Web3/Goldencity | Crypto real-estate site (React, Three.js, RainbowKit, Express, Mongo) | no git |
| Web3/polymarket-copy-trading-bot | NestJS + TypeORM Polymarket CLOB copy-trading bot | no git |
| Web3/AYICOIN_Platform | NFT marketplace (Hardhat) | jacksnitrusa 20, other 7, you 0 |
| Web3/bitscorpus | Supply-chain hackathon (MERN + Foundry) | bitscorpus 1, you 0 |
| Web3/crypto_betting | Crypto casino | Simon G 1, you 0 |
| Web3/DeFi Estate | DeFi real estate | redBu1l 19, you 0 |
| Web3/MetaRace_next.js | P2E horse racing | standardhub 13, you 0 |
| Web3/novaremix-vault-zoom-v2 | Lending vault | about 8 others, you 0 |
| Web3/subway-runner | Three.js runner + token | Jame pack 1, you 0 |

## D. Final-year / academic projects built for students (sensitive, see chat)
Abraham/Project (AI resume screening, "Lush Hair NG"; FastAPI, spaCy, OCR, geospatial scoring) ·
Alexander/scanner (Flask web vulnerability scanner) · Dandan (cooperative Snort+Suricata IDS on Docker) ·
Destiny (hybrid NIDS: scapy + ML, FastAPI + React) · Edna (student-dropout early-warning system; Django + React, XGBoost, RBAC) ·
Emmanuella (phishing email detector) · Isaac/forensiq (ML forensic monitor; Flask-SocketIO, XGBoost, PyTorch, SHAP) ·
Jamaal/PhishGuard (FastAPI/Celery, BERT ensemble, SHAP, React SOC dashboard) · Jason (multi-channel phishing/smishing/vishing detector; DistilBERT + XGBoost, Celery, Nginx) ·
Kenny (AI forensic log analysis; FastAPI + React) · Kiitan (fake-news detector; NLTK, TF-IDF, Flask) ·
Lawal/AiChatbot (AI support desk + GRC RAG; Next.js + Flask; you 21 of 35 commits) · Paul (Django SOC dashboard) ·
Philinx (Flask app) · Rahman (adaptive-threshold IDS; IsolationForest, Streamlit) · Wilson (AURA digital-twin risk engine; Flask-SocketIO) ·
Dayo/Project (AI-NIDS; Django, DRF, SimpleJWT, scikit-learn) · Dayo/CalebMiniSuperMart (OWASP ZAP scan reports + a static page).

## E. Excluded (not code, or not yours)
Data Analytics, Doc, KayC, Mr. Alaba, Ola K, Pelumi, Priestley, Risky, Stanley (documents, media, thesis chapters) ·
Kenny's Sister (Python course exercises) · AdexxFire (third-party "BTC Flasher" zips, not your code) ·
Personal/github-activity-generator (commit generator, not a portfolio piece) · OwoHQ (duplicate of Decima mobile).

---

## Per-project drafts & answers
### 1. ThreeBubbles: WRITTEN (top of grid)
- Answers: user did the API plus the frontend's hosting/deploy only (Theo Fortune built the UI). Name "ThreeBubbles", live,
  URL https://threebubbles.com/, 4 weeks, image public/images/portfolio/threebubbles.png.
### 2. TG Bot (USDT Digital-Goods Vending Bot): WRITTEN (2nd)
- Answers: client work, generic title OK, live at https://t.me/markkyy_bot, 382 subscribers and 500+ orders (user-supplied),
  1 week, solo (57 of 57 commits), image tgbot.png.
### 3. Orblo: WRITTEN (3rd)
- Answers: solo personal project for Orbio's Build Week (under review; ₦8M pool not mentioned on the card). Public GitHub link,
  1 week, image orbio.png. Added an optional `LinkLabel` prop to Card (default "Link to Site"); Orblo uses "View on GitHub".
  FOLLOW-UP: update the card if it places.
### 4. Lavera: WRITTEN (4th)
- Answers: solo, client Lavera Nigeria Limited (OK to name), not live yet (no URL, "(Launching soon!)"), 1 week, lavera.png.
  FOLLOW-UP: add the URL once it's live.
### 5. Decima: ON HOLD (NDA until launch), nothing written to the site
- User built the Flutter client (main branch, 29 Jul–9 Sep 2026) + React landing page. The Expo demo branch is pdowodunni's.
- FOLLOW-UP: revisit once the NDA lifts. Skills from it were confirmed without naming the project on the site.
### 6. QuickCommerce (Auction & Barter Module): WRITTEN (5th)
- OT/Auction Project (user, 31 commits) + OT/quickcommerce (teammate pleasantddev is the main dev) on ONE card. OK to name.
  Live, but the user will add the URL later. 3 weeks. Screenshot taken locally from seeded data (marketplace grid) →
  quickcommerce-auction.png. Ran `npm run build` in Auction Project (rewrote public/build only).
  FOLLOW-UP: user adds URL; optionally swap in a live-site screenshot.
### 7–8. Vatebra FRSC V2 UI + Trauma Inform App: CONFIDENTIAL, no cards (all Vatebra work is confidential)
- Skills check run anyway, without naming either project.
### 9. Aviator Crash Game: LEFT OFF (user's choice)
- The README claims "provably fair", but the code has an admin forced-crash queue + auto-lowering of crash points toward a daily
  profit target, so the claim is false. User chose to leave it off. No skills taken from it.
### 10. GoldenCity: WRITTEN (6th)
- User built the whole platform (own project), OK to name, not live, no repo link, 1 week. Screenshot from a local build
  (ran `react-app-rewired build`, which rewrote the project's build/ folder) → goldencity.png.
### 11. Polymarket copy-trading bot: DROPPED (not the user's work)
- Group C follow-up: of crypto_betting, DeFi Estate, MetaRace, novaremix, subway-runner, bitscorpus and pg117, the user selected
  only pg117 (the first question came back blank, so assuming none of those four; the user can correct this).
### 12. pg117-bet: LEFT OFF
- It's a fake "Google Play" listing page (Header.vue:8) pushing a betting PWA install with FB Pixel. Impersonation, so not showcased.
### 13. customer-service-app: SKIPPED (too small, one day, one page)
### 14. crypto-deposit-app: SKIPPED (2024 prototype: no real chain deposits, unauthenticated admin routes, userId from body)
### 15. Superside clone / Grandma / LushBerries: SKIPPED (user: "don't even dare", read as don't include)
### 16. Citi Spa & Sauna: WRITTEN (after Delta Health, before Hightower)
- User built it on WordPress + Elementor, hosted + migrated it. Live https://citispaandsauna.com/, 3 days. Screenshot of the live site → citispa.png.
- No new skills.
### 17. LaundryPad: WRITTEN (after GoldenCity)
- Client OK to name, not live, 1 day. Screenshot of the local index.html, cropped and padded to 16:9 → laundrypad.png.
### 18. Arduino Robotics Builds (Uncle Ayo): WRITTEN (last in grid, no image)
- Client work (unnamed). Durations 1 week to 1 month each. The cardboard robot had code (not in the folder). No photos (user changed phones).
  Rejected "Your paragraph text.png": third-party "ktronic" watermarked wiring diagram whose pins don't match the user's sketch.
  FOLLOW-UP: add a photo if the user gets one.
### 19. Anonymised academic card "Machine Learning & Cybersecurity Systems (Private Clients)": WRITTEN (after LaundryPad)
- 17 code projects from Group D. No names, universities, links or image. "3 days – 1 week each".
### 20. Existing-card updates: APPLIED (user: "just remove the broken links", suggested defaults applied)
- GIRO: 9 → 11 themes; "as part of a team" + the user's areas (home, recharge/PIX, VIP, jackpot, PWA install). Duration left at 4 weeks.
- StudyBuddy: rewrote the garbled Details (with a teammate; Laravel + Inertia + React, Radix, reCAPTCHA). Title and duration unchanged.
- Removed dead URLs: CMS API (Railway 404), AdeptBloc (unreachable), PropertyCo (unreachable), Remkay (404) → "Link not available".
- CMS Flutter app left out (316-line starter). propco_refined not added (no deployed URL). CRMS left commented out (its link works again).

## Phase 4: DONE (2026-09-28)
- Summary approved: Cybersecurity replaces "Basics", OpenAPI folded into RESTful APIs, Knowledge regrouped into 3 labelled
  columns (Web & Back-End 14 / Data, AI & Security 12 / Mobile, DevOps & Hardware 12 = 38).
- `npm run build`: passes. Next 16 auto-rewrote tsconfig.json (jsx → react-jsx, target ES2017; mandatory for Next 16).
- `npm run lint` is broken on its own: Next 16 removed `next lint`. `npx eslint components pages --ext .ts,.tsx` → exit 0, no issues.
- All 18 card image paths resolve; Delight.jpeg (the user renamed it from .jpg) resolves.
- Post-launch fixes (pushed): 43691c7 .nvmrc Node 22 · fd5053e no-image card crash · a838d69 16:9 image padding,
  TG chat-list crop (privacy), /api/monitor Sentinel proxy, meta/OG tags, age line removed, Knowledge spacing.
- 21a5006 (pushed 2026-09-29): hero lines, About Me (B.Sc. 7 Aug 2026, which assumes 2026; FastAPI/Node; Web3/AI/Flutter sentence),
  rings TS 95 / Node 90 / Flutter 85 / Solidity 85, services Mobile / Web3 / AI with new icons.
- NEEDS USER: set MONITOR_API_SECRET on Netlify. Still open: Job field wording, resume PDF refresh.
- Open follow-ups: QuickCommerce URL · Lavera URL at launch · Orblo result · Decima after the NDA · Arduino photo · lint script.

## Confirmed skills (apply in Phase 4)
All go in the KNOWLEDGE list unless noted.
- Payment gateway integration (Paystack): from ThreeBubbles
- CI/CD (GitHub Actions): from ThreeBubbles
- API documentation (OpenAPI): from ThreeBubbles. Default is to fold into the existing bullet as
  "RESTful APIs & API Documentation (OpenAPI)" (user didn't pick, so confirm in Phase 4)
- Blockchain / Web3 integration: from TG Bot (TRON/EVM/Solana watchers) + Orblo (wallet connect via Wagmi/RainbowKit/viem).
  Wording: "Blockchain / Web3 Integration (wallets, on-chain data)"
- AI / LLM integration: from Orblo (analysis, chat, structured outputs, model tiers)
- FastAPI: from Orblo. Fold into the existing Knowledge bullet as "Back-End Technologies (Python: Django, FastAPI)"
- Prisma: from Lavera. Fold into "Database and Storage (SQL, PostgreSQL, Prisma, AWS)"
- Authentication & Authorization (Auth.js, Sanctum, JWT, RBAC): from Lavera + ThreeBubbles
- Web accessibility (WCAG): from Lavera. One light use, but the user confirmed they're confident
- Riverpod: from NDA project #5. Fold in: "State Management (Redux, Riverpod)"
- Clean architecture (feature-first, layered): from NDA project #5
- Mobile security (biometrics, secure storage): from NDA project #5
- Push notifications (Firebase Cloud Messaging): from NDA project #5
- Pest: from QuickCommerce. Fold in: "Testing and Debugging (Pest)"
- Inertia.js: from QuickCommerce/Delta Health/StudyBuddy. Fold in: "Front-End frameworks (ReactJs, NextJs, Inertia.js)"
- Background jobs & scheduling: from QuickCommerce (scheduler, queued notifications)
- TypeScript: fold into "Front-End Technologies (HTML/CSS, JavaScript, TypeScript)"
- MUI: from Vatebra (confidential, not named). Fold into "Front-End frameworks (ReactJs, NextJs, Inertia.js, MUI)"
- Form handling & validation (Formik, Yup, React Hook Form, Zod): from Vatebra + Lavera
- Data Visualisation & Tables (Chart.js, TanStack Table): from Vatebra. Folded, since the user didn't pick (default)
- Smart contract development (Solidity): from GoldenCity
- 3D web graphics (Three.js / React Three Fiber): from GoldenCity
- Node.js / Express: from GoldenCity. Fold in: "Back-End Technologies (Python: Django, FastAPI; Node.js: Express)"
- MongoDB: from GoldenCity. Fold in: "Database and Storage (SQL, PostgreSQL, MongoDB, Prisma, AWS)"
- SIWE: from GoldenCity. Fold into the Auth bullet "(Auth.js, Sanctum, JWT, SIWE, RBAC)"
- SVG, CSS Animation & Programmatic Graphics (Python): from LaundryPad (merged #1 and #2)
- Figma: from LaundryPad, light use, but the user confirmed. No % given, so it goes in KNOWLEDGE rather than a Design Skills bar
- Embedded Systems & Robotics (Arduino, sensors, motor control): from Arduino builds
- Machine Learning (scikit-learn, XGBoost, SHAP): from the academic card
- Deep Learning & NLP (PyTorch, BERT/DistilBERT fine-tuning, spaCy, NLTK): from the academic card
- Cybersecurity (Intrusion Detection, Vulnerability Scanning, OWASP ZAP): REPLACES "Cyber-Security Basics" (default from my
  suggestion; the user said "yes to all" without picking replace vs add, so confirm in Phase 4)
- RAG: fold into "AI / LLM Integration & RAG"
- Flask: fold into "Back-End Technologies (Python: Django, FastAPI, Flask; Node.js: Express)" (Streamlit left out)
- Celery: fold into "Background Jobs & Scheduling (Celery, Laravel Scheduler)"
- Real-time (SignalR): from Vatebra TIA. Light use (1 import), but the user confirmed. Consider "Real-time (WebSockets, SignalR, Socket.IO)"
- Telegram bot development (aiogram): from TG Bot
- Redis (caching, rate limiting, queues): from TG Bot
- Docker / Docker Compose: from TG Bot

## Redesign (2026-09-29)
- Concept "Verified": light audit-report page + navy hero; live SHA-256 fingerprint of the name (Web Crypto) as the one
  animated element and the new asset (also favicon.svg, og.png). Archivo (wdth axis) + JetBrains Mono for code only.
- Structure: header (name) → hero → Selected work (3 featured) → More projects list → Capabilities (5 domains, no %)
  → About → Contact → footer ("trading as De-elite Technologies"). Content in lib/projects.ts, lib/capabilities.ts, lib/site.ts.
- Dropped: loader, glitch, typing animation, skill %, the self-referential portfolio card. Removed Chakra/Emotion/etc.
- Security: Next 16.3.0 → 16.3.6 (critical image-optimizer RCE; next/image now used), sharp fix → npm audit 0.
- /code-review: 10 findings, 9 fixed (phone-optional validation bug, font variable scope, form cleared after mailto,
  footer year hydration, menu Escape/outside tap, hash a11y, fingerprint memo, single hash helper, shared constants).
