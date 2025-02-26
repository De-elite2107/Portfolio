import DownArrowIcon from '@/svgs/down-arrow'
import { Box, Text, useMediaQuery, Flex, Grid } from '@chakra-ui/react'
import FancyText from '@carefully-coded/react-text-gradient';
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
                Image='./images/portfolio/HG.png'
                Name="Hightower Global Church (Webapp + Management System)"
                Type="Webapp + API"
                Duration="2 weeks"
                URL="https://hightowerglobal.org/"
                Details="Our Church Management System is a WebApp + API designed to streamline church operations, from managing congregational data and events to enhancing communication. Scalable and user-friendly, it automates tasks like attendance tracking, donations, and announcements, fostering stronger community engagement."
                />
                <Card
                Image='./images/portfolio/cmsserver.png'
                Name="Church Management System"
                Type="API"
                Duration="2 days"
                URL="https://cmsserver.up.railway.app/"
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
                URL="https://adeptbloc.netlify.app/"
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
                URL="https://www.propertyco.ng/"
                Details='A platform built for sales and rentage of exclusive houses; (Server carrying the resources rendered on the site is under maintenance)...'
                />
                <Card
                Image='./images/portfolio/remkay.png'
                Name="Remkay's Web Page"
                Type="School Webpage"
                Duration="3 months"
                URL="https://remkayschools.pythonanywhere.com"
                Details='Explore our vibrant school website, where academic excellence meets a nurturing community. Discover resources, events, and insights that empower students and parents alike to thrive in a dynamic learning environment...'
                />
            </Grid>
        </Box>
    </Box>
  )
}
export default Portfolio