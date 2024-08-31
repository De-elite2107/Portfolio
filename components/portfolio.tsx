import DownArrowIcon from '@/svgs/down-arrow'
import { Box, Text, Link, useMediaQuery } from '@chakra-ui/react'
import React from 'react'

const Portfolio = () => {
    const [isLargerThan400] = useMediaQuery("(min-width: 600px)");
  return (
        <Box
        m="auto"
        w="fit-content"
        p="150px 0"
        height="100vh"
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
            <Link href="#" className="mouse_btn" w="fit-content" display="block" m="auto">
                <DownArrowIcon width={50} height={50} fill="white"/>
            </Link>
        </Box>
  )
}

export default Portfolio