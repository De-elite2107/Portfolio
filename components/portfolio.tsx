import DownArrowIcon from '@/svgs/down-arrow'
import { Box, Text, Link, useMediaQuery, Flex } from '@chakra-ui/react'
import FancyText from '@carefully-coded/react-text-gradient';
import React from 'react'
import Card from './card';

const Portfolio = () => {
    const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");
    const [isLargerThan400] = useMediaQuery("(min-width: 600px)");
  return (
    <>
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
            <Link href="#portfolio" className="mouse_btn" w="fit-content" display="block" m="auto">
                <DownArrowIcon width={50} height={50} fill="white"/>
            </Link>
        </Box>
        <Box id='portfolio' p={isLargerThan1000 ? "4rem" : "0rem"}>
            <Text fontSize="24px" mb="3rem">
                <FancyText gradient={{
                type: "linear",
                from: "#5fc9f3",
                to: "#1e549f",
                }}>
                    Recent Works
                </FancyText>
            </Text>
            <Flex flexWrap="wrap" gap={8}>
                <Card
                Video='./images/portfolio/portfolio_video.mp4'
                Name="De-elite's Portfolio"
                Type="Portfolio"
                Duration="3 days"
                URL="https://de-elite.netlify.app/"
                Details="A platform built to display my niches, experience and skill level..."
                />
                <Card
                Video='./images/portfolio/propertyco.mp4'
                Name="PropertyCo's Web App"
                Type="Housing and Co."
                Duration="1 month"
                URL="https://www.propertyco.ng/"
                Details={`A platform built for sales and rentage of exclusive houses ${<br/>} (Server carrying the resources rendered on the site is under maintenance)...`}
                />
            </Flex>
        </Box>
    </>
  )
}
export default Portfolio