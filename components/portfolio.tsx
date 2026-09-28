import DownArrowIcon from '@/svgs/down-arrow'
import { Box, Text, useMediaQuery, Flex, Grid } from '@chakra-ui/react'
import FancyText from '@/components/fancy-text';
import React from 'react'
import Card from './card';
import { Link } from 'react-scroll';

const Portfolio = () => {
    const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");
    const [isLargerThan400] = useMediaQuery("(min-width: 600px)");
  return (
    <Box id='portfolio'>
        <Box
        m="auto"
        w="fit-content"
        p="150px 0"
        height="100vh"
        className="fromTop"
        >
            <Text
                textAlign="center"
                textTransform="uppercase"
                fontSize={isLargerThan400 ? "64px" : "48px"}
                className="glitch-effect"
                data-text="Portfolio"
                pb="1rem"
                color="#5fc9f3"
            >
                Portfolio
            </Text>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <Text color="white" textAlign="center" mb="5rem">Recent works...</Text>
            <Link to="portfolios" className="mouse_btn" smooth={true} spy={true}>
                <Box w="fit-content" m="auto">
                    <DownArrowIcon width={50} height={50} fill="white"/>
                </Box>
            </Link>
        </Box>
        <Box id='portfolios' p={isLargerThan1000 ? "4rem" : "0rem"}>
            <Text fontSize="24px" mb="3rem">
                <FancyText gradient={{
                type: "linear",
                from: "#5fc9f3",
                to: "#1e549f",
                }}>
                    Recent Works
                </FancyText>
            </Text>
            <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)",lg: "repeat(3, 1fr)" }} gap={3}>
                <Card
                Image='./images/portfolio/threebubbles.png'
                Name="ThreeBubbles (Car-Wash Membership Platform)"
                Type="Webapp + API"
                Duration="4 weeks"
                URL="https://threebubbles.com/"
                Details="Built the Laravel API behind a live monthly car-wash membership service: Paystack-verified subscriptions, QR membership cards, partner service verification with admin approval, and month-end partner settlements calculated from approved services only. Added role-based access with Sanctum and auto-generated API docs, and set up hosting and GitHub Actions auto-deploy for the Next.js frontend..."
                />
                <Card
                Image='./images/portfolio/tgbot.png'
                Name="USDT Digital-Goods Vending Bot"
                Type="Telegram Bot"
                Duration="1 week"
                URL="https://t.me/markkyy_bot"
                Details="Built a Telegram storefront for a client that sells digital goods for USDT, with watch-only payment detection across TRON, BSC, Ethereum and Solana plus Binance Pay. Used row-level locking so two buyers never claim the same stock unit, crash-safe idempotent delivery, and encrypted stock. Now serving 382 subscribers with 500+ orders fulfilled..."
                />
                <Card
                Image='./images/portfolio/orbio.png'
                Name="Orblo (AI Wallet Portfolio & Security Agent)"
                Type="Webapp + API"
                Duration="1 week"
                URL="https://github.com/De-elite2107/web3walletportfolioagent"
                LinkLabel="View on GitHub"
                Details="Built an on-chain wallet agent that reads real holdings, prices them in USD via Chainlink feeds, and explains the portfolio through an AI chat. Its security scan flags risky token approvals (unlimited allowances and unverified spender contracts) so users see what's risky, not just what they hold. Submitted to Orbio's Build Week (under review)..."
                />
                <Card
                Image='./images/portfolio/lavera.png'
                Name="Lavera Nigeria (Building Materials Store)"
                Type="E-commerce Webapp"
                Duration="1 week"
                Details="Developed a building-materials store for Lavera Nigeria Limited with Next.js 15, Prisma and PostgreSQL, where customers submit order requests settled offline. Built a delivery engine that prices by state/LGA zone and picks the smallest vehicle that fits each load, server-side bulk and quote pricing, order tracking, and role-based admin for sales and logistics staff. (Launching soon!)..."
                />
                <Card
                Image='./images/portfolio/quickcommerce-auction.png'
                Name="QuickCommerce (Auction & Barter Module)"
                Type="Webapp"
                Duration="3 weeks"
                Details="Built the auction and barter marketplace module for QuickCommerce, a multi-tenant commerce platform led by a teammate. Listings sell three ways: timed auctions with outbid alerts and scheduled closing, buy-it-now, and item-for-item barter offers. Developed with Laravel 12, Inertia and React 19, with Paystack payments and Pest tests covering every core business rule..."
                />
                <Card
                Image='./images/portfolio/goldencity.png'
                Name="GoldenCity (Crypto Real-Estate Platform)"
                Type="Web3 Webapp"
                Duration="1 week"
                Details="Built a real-estate investment platform where users buy fractional property shares as NFTs and pay in crypto. React and Tailwind frontend with 3D property views in Three.js, an Express/MongoDB API, Sign-In with Ethereum (nonce, signed message, JWT session) over RainbowKit/Wagmi, and Solidity contracts for listings, a marketplace, and dynamic NFTs..."
                />
                <Card
                Image='./images/portfolio/laundrypad.png'
                Name="LaundryPad (Animated Hero Illustration)"
                Type="Illustration + Landing Page"
                Duration="1 day"
                Details="Built an animated hero illustration for LaundryPad, a laundry pickup and delivery service, generated entirely in code from the client's mockup. A Python build tool draws the scene once and outputs the webpage, an animated SVG with light and dark themes, per-layer files, an editable Figma import, and social previews. Animation is pure CSS with reduced-motion support..."
                />
                <Card
                Name="Machine Learning & Cybersecurity Systems (Private Clients)"
                Type="ML / Security Systems"
                Duration="3 days – 1 week each"
                Details="Built 17 end-to-end systems for private clients, including phishing detection across email, SMS and voice with XGBoost and fine-tuned BERT ensembles explained through SHAP, hybrid and cooperative intrusion detection (signature rules plus ML anomaly detection, Snort and Suricata on Docker), a student-dropout early-warning platform, AI forensic log analysis, and a RAG-powered IT support desk. Client details kept confidential..."
                />
                <Card
                Image='./images/portfolio/GIRO.png'
                Name="Advanced Multi-Tenant iGaming UI Framework"
                Type="Webapp"
                Duration="4 weeks"
                URL="https://giro.wdang.vip/"
                Details="Developed, as part of a team, a high-performance multi-tenant iGaming platform using Nuxt 4 and Tailwind CSS. Built the home, recharge (PIX payments), VIP and jackpot modules and the PWA install flow on a Zod-validated API layer, with a dynamic 11-theme engine for instant white-label deployment..."
                />
                <Card
                Image='./images/portfolio/SB.png'
                Name="StudyBuddy Edutech Solutions (An ongoing software for students to collaborate and learn)"
                Type="Webapp"
                Duration="2 weeks"
                URL="https://usestudybuddy.org/homepage"
                Details="StudyBuddy is a digital-first learning platform that offers summarized learning materials and a study buddy that keeps students motivated, right in their pocket. Built with a teammate on Laravel, Inertia and React with Radix UI components and reCAPTCHA-protected forms..."
                />
                <Card
                Image='./images/portfolio/DH.png'
                Name="Delta Health"
                Type="Webapp"
                Duration="2 weeks"
                URL="https://deltahealth.usestudybuddy.org/"
                Details="This platform helps residents in Delta State access verified health information, find clinics nearby, and book appointments—all from their phone. (A final year student project I built from scratch. A complete system)..."
                />
                <Card
                Image='./images/portfolio/citispa.png'
                Name="Citi Spa & Sauna"
                Type="WordPress Website"
                Duration="3 days"
                URL="https://citispaandsauna.com/"
                Details="Designed and built the website for Citi Spa & Sauna, a wellness and spa business, on WordPress with Elementor, covering services, gallery, and board-of-advisors pages. Handled the full setup end to end, from hosting on cPanel to migrating the live site and database..."
                />
                <Card
                Image='./images/portfolio/HG.png'
                Name="Hightower Global Church (Webapp + Management System)"
                Type="Webapp + API"
                Duration="2 weeks"
                URL="https://hightowerglobal.org/"
                Details="Our Church Management System is a WebApp + API designed to streamline church operations, from managing congregational data and events to enhancing communication. Scalable and user-friendly, it automates tasks like attendance tracking, donations, and announcements, fostering stronger community engagement..."
                />
                <Card
                Image='./images/portfolio/cmsserver.png'
                Name="Church Management System"
                Type="API"
                Duration="2 days"
                Details='Our Church Management System API offers seamless integration for managing congregational data, events, and communications, enhancing community engagement and operational efficiency. Designed for flexibility and scalability, it empowers churches to streamline their administrative tasks and foster stronger connections within their communities...'
                />
                {/* <Card
                Image='./images/portfolio/crms.png'
                Name="Course Resources Management System"
                Type="LMS"
                Duration="3 weeks"
                URL="https://crmsys.netlify.app/"
                Details='Our Course Resource Management System streamlines the organization and accessibility of educational materials, enhancing the learning experience for students and educators alike. With intuitive navigation and robust features, it empowers users to efficiently manage resources and collaborate effectively...'
                /> */}
                <Card
                Image='./images/portfolio/adeptbloc.png'
                Name="AdeptBloc's Landing Page"
                Type="Landing Page"
                Duration="3 days"
                Details='Discover exciting opportunities on our Virtual Internship web page, designed to connect students with valuable remote work experiences across various industries. With user-friendly navigation and comprehensive resources, we empower aspiring professionals to gain practical skills and enhance their career prospects from anywhere. (Site is in progress!)...'
                />
                <Card
                Image='./images/portfolio/portfolio.png'
                Name="De-elite's Portfolio"
                Type="Portfolio"
                Duration="3 days"
                URL="https://de-elite.netlify.app/"
                Details='A platform built to display my niches, experience and skill level...'
                />
                <Card
                Image='./images/portfolio/propertyco.png'
                Name="PropertyCo's Web App"
                Type="Housing and Co."
                Duration="1 month"
                Details='A platform built for sales and rentage of exclusive houses; (Server carrying the resources rendered on the site is under maintenance)...'
                />
                <Card
                Image='./images/portfolio/remkay.png'
                Name="Remkay's Web Page"
                Type="School Webpage"
                Duration="3 months"
                Details='Explore our vibrant school website, where academic excellence meets a nurturing community. Discover resources, events, and insights that empower students and parents alike to thrive in a dynamic learning environment...'
                />
                <Card
                Name="Arduino Robotics Builds"
                Type="Robotics / Embedded"
                Duration="1 week – 1 month each"
                Details="Built a set of Arduino robotics projects for a client: an automatic smart dustbin that opens its lid with a servo when an ultrasonic sensor detects someone nearby, a smartphone-controlled Bluetooth RC car with PWM speed control through a dual motor driver, and a cardboard-bodied robot. Covered sensor reading, actuator control, and serial command handling in embedded C++..."
                />
            </Grid>
        </Box>
    </Box>
  )
}
export default Portfolio