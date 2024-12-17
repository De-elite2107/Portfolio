/* eslint-disable react/no-unescaped-entities */
import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import TypingAnimator from "react-typing-animator";

const Homepage = () => {
  const [isLargerThan400] = useMediaQuery("(min-width: 600px)");
  return (
      <Box
        m="auto"
        w="fit-content"
        p="150px 0"
        h="96vh"
        className="fromTop"
        id="home"
      >
        <Text
          textAlign="center"
          textTransform="uppercase"
          fontSize={isLargerThan400 ? "64px" : "48px"}
          className='glitch-effect'
          data-text="I'M DELIGHT ADEDIRAN"
          mb="1rem"
          color="#5fc9f3"
        >
          I'M <span>DELIGHT ADEDIRAN</span>
        </Text>
        <Text textAlign="center">
          <TypingAnimator
            textArray={[
              "Fullstack developer and IT Specialist...",
              "Based in Lagos...",
            ]}
            cursorColor="#333"
            textColor="white"
            typingSpeed={100}
            delaySpeed={2000} // Delay between texts
            backspace // Enable backspace effect
            loop={true}
          />
        </Text>
      </Box>
  );
};

export default Homepage;
