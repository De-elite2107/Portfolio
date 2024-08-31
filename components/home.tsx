/* eslint-disable react/no-unescaped-entities */
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Croissant_One, Arvo } from "next/font/google";
import TypingAnimator from "react-typing-animator";
const croissant = Croissant_One({
  subsets: ["latin"],
  weight: "400",
});


const Homepage = () => {
  return (
      <Box
        m="auto"
        w="fit-content"
        p="150px 0"
      >
        <Text
          textAlign="center"
          textTransform="uppercase"
          fontSize="64px"
          className={`${croissant.className} glitch-effect`}
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
