/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Button,
  Flex,
  Grid,
  Img,
  Link,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { Link as Anc } from "react-scroll";
import React from "react";
import DownArrowIcon from "@/svgs/down-arrow";
import FancyText from "@carefully-coded/react-text-gradient";
import Checkmark from "@/svgs/checkmark";
import Html5 from "@/svgs/html";
import Terminal from "@/svgs/terminal";
import API from "@/svgs/api";
import Database from "@/svgs/database";
import Optimize from "@/svgs/optimize";
import UiUx from "@/svgs/UI_UX";
import Quality from "@/svgs/quality";
import Support from "@/svgs/support";
import DevOps from "@/svgs/devops";

const Resume = () => {
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");
  const [isLargerThan400] = useMediaQuery("(min-width: 600px)");
  return (
    <Box id="resume">
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
          data-text="Resume"
          pb="1rem"
          color="#5fc9f3"
        >
          Resume
        </Text>
        <Text color="white" textAlign="center" mb="5rem">
          My Resume...
        </Text>
        <Anc to="resumes" className="mouse_btn" smooth={true} spy={true}>
          <Box w="fit-content" m="auto">
            <DownArrowIcon width={50} height={50} fill="white" />
          </Box>
        </Anc>
      </Box>
      <Box id="resumes" p={isLargerThan1000 ? "4rem" : "0rem"}>
        <Box color="white" mb="10rem">
          <Text fontSize="24px" mb="3rem">
            <FancyText
              gradient={{
                type: "linear",
                from: "#5fc9f3",
                to: "#1e549f",
              }}
            >
              ABOUT ME
            </FancyText>
          </Text>
          <Flex alignItems="start" flexWrap="wrap">
            <Box
              w="15rem"
              mr="3rem"
              pb="3rem"
              m={isLargerThan1000 ? "none" : "auto"}
            >
              <Img
                className="fromLeft"
                src="./images/Delight.jpg"
                borderRadius="50%"
              />
            </Box>
            <Box className="fromLeft" w={isLargerThan1000 ? "75%" : "100%"}>
              <Text mb="3rem" textAlign="justify" lineHeight={7}>
                I&apos;m Delight, a passionate Full-Stack Developer and Robotics
                Engineer with over 5 years of experience creating secure,
                scalable, and user-centered digital solutions. I specialize in
                building high-performing web and mobile applications that merge
                functionality, design, and performance. My journey began with
                HTML, CSS, and JavaScript, which sparked my interest in
                interactive development. Over time, I&apos;ve mastered modern
                frameworks and tools, including Next.js, TypeScript, React,
                Redux Toolkit, and Angular for front-end engineering, ensuring
                clean UI architecture and responsive design with Chakra UI and
                Tailwind CSS. On the backend, I develop robust APIs and secure
                systems using Laravel and Django, implementing Role-Based Access
                Control (RBAC) and transaction workflows to strengthen data
                integrity and user trust. I&apos;m proficient in SQL (PostgreSQL,
                MySQL), RESTful API design, and have hands-on experience with
                Docker, CI/CD pipelines, and cloud platforms like AWS. Beyond
                development, I focus on DevSecOps principles, security
                hardening, and real-time system monitoring to ensure reliable
                performance and protection against vulnerabilities — a mindset
                I&apos;ve now backed with formal academic grounding, having just
                signed out with a B.Sc. in Cyber Security, which sharpened my
                eye for threat modeling, secure system design, and risk-aware
                engineering. My problem-solving mindset, collaborative spirit,
                and passion for clean architecture allow me to consistently
                deliver products that meet both business and technical goals.
                I&apos;m deeply committed to continuous learning and innovation,
                exploring cutting-edge technologies across web, mobile,
                robotics, and cybersecurity — always driven to build solutions
                that make an impact.
              </Text>
              <Flex
                alignItems="center"
                justifyContent="space-between"
                gap={3}
                mb="1rem"
                flexWrap="wrap"
              >
                <Box lineHeight={10}>
                  <Flex>
                    <Text color="#5fc9f3">Name:</Text>
                    <Text>&nbsp;Delight Adediran</Text>
                  </Flex>
                  <Flex>
                    <Text color="#5fc9f3">Citizenship:</Text>
                    <Text>&nbsp;Nigeria</Text>
                  </Flex>
                </Box>
                <Box lineHeight={10}>
                  <Flex>
                    <Text color="#5fc9f3">Age:</Text>
                    <Text>&nbsp;NaN Years</Text>
                  </Flex>
                  <Flex>
                    <Text color="#5fc9f3">Residence:</Text>
                    <Text>&nbsp;Lagos</Text>
                  </Flex>
                </Box>
                <Box lineHeight={10}>
                  <Flex>
                    <Text color="#5fc9f3">Job:</Text>
                    <Text>&nbsp;Full-Stack Web Developer</Text>
                  </Flex>
                  <Flex>
                    <Text color="#5fc9f3">E-mail:</Text>
                    <Text>&nbsp;delightadediran21@gmail.com</Text>
                  </Flex>
                </Box>
              </Flex>
              <Link href="./delight_resume.pdf" download="Delight's Resume">
                <Button p="2rem" bg="#1e549f" color="white">
                  Download CV
                </Button>
              </Link>
            </Box>
          </Flex>
        </Box>
        <Box color="white" mb="10rem">
          <Text fontSize="24px" mb="3rem">
            <FancyText
              gradient={{
                type: "linear",
                from: "#5fc9f3",
                to: "#1e549f",
              }}
            >
              DESIGN SKILLS
            </FancyText>
          </Text>
          <Box mb="3rem">
            <Flex justifyContent="space-between" w="90%" mb="1rem">
              <Text>Web design</Text>
              <Text>90%</Text>
            </Flex>
            <Box bg="grey" h="5px">
              <Box bg="#1e549f" w="90%" h="100%"></Box>
            </Box>
          </Box>
          <Box mb="3rem">
            <Flex justifyContent="space-between" w="80%" mb="1rem">
              <Text>Illustrations</Text>
              <Text>80%</Text>
            </Flex>
            <Box bg="grey" h="5px">
              <Box bg="#1e549f" w="80%" h="100%"></Box>
            </Box>
          </Box>
        </Box>
        <Box color="white" mb="7rem">
          <Text fontSize="24px" mb="3rem">
            <FancyText
              gradient={{
                type: "linear",
                from: "#5fc9f3",
                to: "#1e549f",
              }}
            >
              LANGUAGE SKILLS
            </FancyText>
          </Text>
          <Flex flexWrap="wrap">
            <Box
              w={isLargerThan400 ? "35rem" : "100%"}
              mr={isLargerThan400 ? "5rem" : ""}
            >
              <Box mb="3rem">
                <Text mb="1rem">English</Text>
                <Flex gap={5} flexWrap="wrap">
                  <Box
                    h="20px"
                    bg="#1e549f"
                    w="20px"
                    borderRadius="100%"
                    mr="1rem"
                  ></Box>
                  <Box
                    h="20px"
                    bg="#1e549f"
                    w="20px"
                    borderRadius="100%"
                    mr="1rem"
                  ></Box>
                  <Box
                    h="20px"
                    bg="#1e549f"
                    w="20px"
                    borderRadius="100%"
                    mr="1rem"
                  ></Box>
                  <Box
                    h="20px"
                    bg="#1e549f"
                    w="20px"
                    borderRadius="100%"
                    mr="1rem"
                  ></Box>
                  <Box
                    h="20px"
                    bg="#1e549f"
                    w="20px"
                    borderRadius="100%"
                    mr="1rem"
                  ></Box>
                  <Box
                    h="20px"
                    bg="#1e549f"
                    w="20px"
                    borderRadius="100%"
                    mr="1rem"
                  ></Box>
                  <Box
                    h="20px"
                    bg="#1e549f"
                    w="20px"
                    borderRadius="20px"
                    mr="1rem"
                  ></Box>
                  <Box
                    h="20px"
                    bg="#1e549f"
                    w="20px"
                    borderRadius="100%"
                    mr="1rem"
                  ></Box>
                  <Box
                    h="20px"
                    bg="#1e549f"
                    w="20px"
                    borderRadius="100%"
                    mr="1rem"
                  ></Box>
                  <Box h="20px" bg="grey" w="20px" borderRadius="100%"></Box>
                </Flex>
              </Box>
              <Box mb="3rem">
                <Text mb="1rem">Yoruba</Text>
                <Flex gap={5} flexWrap="wrap">
                  <Box
                    h="20px"
                    bg="#1e549f"
                    w="20px"
                    borderRadius="100%"
                    mr="1rem"
                  ></Box>
                  <Box
                    h="20px"
                    bg="#1e549f"
                    w="20px"
                    borderRadius="100%"
                    mr="1rem"
                  ></Box>
                  <Box
                    h="20px"
                    bg="#1e549f"
                    w="20px"
                    borderRadius="100%"
                    mr="1rem"
                  ></Box>
                  <Box
                    h="20px"
                    bg="#1e549f"
                    w="20px"
                    borderRadius="100%"
                    mr="1rem"
                  ></Box>
                  <Box
                    h="20px"
                    bg="#1e549f"
                    w="20px"
                    borderRadius="100%"
                    mr="1rem"
                  ></Box>
                  <Box
                    h="20px"
                    bg="#1e549f"
                    w="20px"
                    borderRadius="100%"
                    mr="1rem"
                  ></Box>
                  <Box
                    h="20px"
                    bg="#1e549f"
                    w="20px"
                    borderRadius="100%"
                    mr="1rem"
                  ></Box>
                  <Box
                    h="20px"
                    bg="#1e549f"
                    w="20px"
                    borderRadius="100%"
                    mr="1rem"
                  ></Box>
                  <Box
                    h="20px"
                    bg="#1e549f"
                    w="20px"
                    borderRadius="100%"
                    mr="1rem"
                  ></Box>
                  <Box h="20px" bg="grey" w="20px" borderRadius="100%"></Box>
                </Flex>
              </Box>
            </Box>
            <Box mb="3rem" w={isLargerThan400 ? "35rem" : "100%"}>
              <Box>
                <Text mb="1rem">French</Text>
                <Flex gap={5} flexWrap="wrap">
                  <Box
                    h="20px"
                    bg="#1e549f"
                    w="20px"
                    borderRadius="100%"
                    mr="1rem"
                  ></Box>
                  <Box
                    h="20px"
                    bg="#1e549f"
                    w="20px"
                    borderRadius="100%"
                    mr="1rem"
                  ></Box>
                  <Box
                    h="20px"
                    bg="#1e549f"
                    w="20px"
                    borderRadius="100%"
                    mr="1rem"
                  ></Box>
                  <Box
                    h="20px"
                    bg="#1e549f"
                    w="20px"
                    borderRadius="100%"
                    mr="1rem"
                  ></Box>
                  <Box
                    h="20px"
                    bg="#1e549f"
                    w="20px"
                    borderRadius="100%"
                    mr="1rem"
                  ></Box>
                  <Box
                    h="20px"
                    bg="grey"
                    w="20px"
                    borderRadius="100%"
                    mr="1rem"
                  ></Box>
                  <Box
                    h="20px"
                    bg="grey"
                    w="20px"
                    borderRadius="100%"
                    mr="1rem"
                  ></Box>
                  <Box
                    h="20px"
                    bg="grey"
                    w="20px"
                    borderRadius="100%"
                    mr="1rem"
                  ></Box>
                  <Box
                    h="20px"
                    bg="grey"
                    w="20px"
                    borderRadius="100%"
                    mr="1rem"
                  ></Box>
                  <Box h="20px" bg="grey" w="20px" borderRadius="100%"></Box>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Box>
        <Box color="white" mb="10rem">
          <Text fontSize="24px" mb="3rem">
            <FancyText
              gradient={{
                type: "linear",
                from: "#5fc9f3",
                to: "#1e549f",
              }}
            >
              CODING SKILLS
            </FancyText>
          </Text>
          <Flex justifyContent="space-between" flexWrap="wrap">
            <Box pb="3rem" m="auto">
              <Box
                mb="1rem"
                className="ninety"
                textAlign="center"
                p="1rem"
                borderRadius="50%"
              >
                <Box p="3rem" bg="#081f37" borderRadius="50%">
                  90%
                </Box>
              </Box>
              <Text textAlign="center">WordPress</Text>
            </Box>
            <Box pb="3rem" m="auto">
              <Box
                mb="1rem"
                className="ninety-eight"
                textAlign="center"
                p="1rem"
                borderRadius="50%"
              >
                <Box p="3rem" bg="#081f37" borderRadius="50%">
                  98%
                </Box>
              </Box>
              <Text textAlign="center">React / JavaScript</Text>
            </Box>
            <Box pb="3rem" m="auto">
              <Box
                mb="1rem"
                className="ninety-eight"
                textAlign="center"
                p="1rem"
                borderRadius="50%"
              >
                <Box p="3rem" bg="#081f37" borderRadius="50%">
                  98%
                </Box>
              </Box>
              <Text textAlign="center">Next / Nuxt</Text>
            </Box>
            <Box pb="3rem" m="auto">
              <Box
                mb="1rem"
                className="ninety-five"
                textAlign="center"
                p="1rem"
                borderRadius="50%"
              >
                <Box p="3rem" bg="#081f37" borderRadius="50%">
                  95%
                </Box>
              </Box>
              <Text textAlign="center">Database / SQL</Text>
            </Box>
            <Box pb="3rem" m="auto">
              <Box
                mb="1rem"
                className="ninety-five"
                textAlign="center"
                p="1rem"
                borderRadius="50%"
              >
                <Box p="3rem" bg="#081f37" borderRadius="50%">
                  95%
                </Box>
              </Box>
              <Text textAlign="center">Python / Django</Text>
            </Box>
            <Box pb="3rem" m="auto">
              <Box
                mb="1rem"
                className="ninety-eight"
                textAlign="center"
                p="1rem"
                borderRadius="50%"
              >
                <Box p="3rem" bg="#081f37" borderRadius="50%">
                  98%
                </Box>
              </Box>
              <Text textAlign="center">PHP / Laravel</Text>
            </Box>
            <Box pb="3rem" m="auto">
              <Box
                mb="1rem"
                className="ninety-eight"
                textAlign="center"
                p="1rem"
                borderRadius="50%"
              >
                <Box p="3rem" bg="#081f37" borderRadius="50%">
                  98%
                </Box>
              </Box>
              <Text textAlign="center">HTML / CSS</Text>
            </Box>
          </Flex>
        </Box>
        <Box color="white" mb="10rem">
          <Text fontSize="24px" mb="2rem">
            <FancyText
              gradient={{
                type: "linear",
                from: "#5fc9f3",
                to: "#1e549f",
              }}
            >
              KNOWLEDGE
            </FancyText>
          </Text>
          <Flex flexWrap="wrap" alignItems="start">
            <Box
              lineHeight={10}
              w={isLargerThan400 ? "20rem" : "100%"}
              mr={isLargerThan400 ? "5rem" : ""}
            >
              <ul>
                <li>Web Technologies</li>
                <li>Front-End Technologies (HTML/CSS, Javascript)</li>
                <li>Back-End Technologies (Python)</li>
                <li>Database and Storage (SQL, PostgreSQL, AWS)</li>
                <li>Server Creation and Configuration</li>
              </ul>
            </Box>
            <Box
              lineHeight={10}
              w={isLargerThan400 ? "20rem" : "100%"}
              mr={isLargerThan400 ? "5rem" : ""}
            >
              <ul>
                <li>Cloud Services</li>
                <li>Front-End frameworks (ReactJs, NextJs)</li>
                <li>RESTful APIs</li>
                <li>Version Control (Git, Github)</li>
                <li>Cyber-Security Basics</li>
              </ul>
            </Box>
            <Box
              lineHeight={10}
              w={isLargerThan400 ? "20rem" : "100%"}
            >
              <ul>
                <li>Mobile Application Technologies (Flutter, React Native)</li>
                <li>Responsive Design</li>
                <li>Testing and Debugging</li>
                <li>State Management(Redux)</li>
                <li>DevOps Practices</li>
              </ul>
            </Box>
          </Flex>
        </Box>
        <Box color="white">
          <Text fontSize="24px" mb="3rem">
            <FancyText
              gradient={{
                type: "linear",
                from: "#5fc9f3",
                to: "#1e549f",
              }}
            >
              MY SERVICES
            </FancyText>
          </Text>
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={3}
          >
            <Box
              mr={isLargerThan400 ? "5rem" : ""}
              w={isLargerThan400 ? "20rem" : "100%"}
              mb="3rem"
            >
              <Flex alignItems="center" gap={2} mb="1rem">
                <Html5 />
                <Text fontWeight={800}>Frontend Development</Text>
              </Flex>
              <Text lineHeight={8}>
                We build the client-side of applications using HTML, CSS, and
                JavaScript frameworks to create responsive and interactive user
                interfaces.
              </Text>
            </Box>
            <Box
              mr={isLargerThan400 ? "5rem" : ""}
              w={isLargerThan400 ? "20rem" : "100%"}
              mb="3rem"
            >
              <Flex alignItems="center" gap={2} mb="1rem">
                <Terminal />
                <Text fontWeight={800}>Backend Development</Text>
              </Flex>
              <Text lineHeight={8}>
                We develop server-side logic, manage databases, and also create
                application programming interfaces (APIs) that supports the
                frontend.
              </Text>
            </Box>
            <Box
              mr={isLargerThan400 ? "5rem" : ""}
              w={isLargerThan400 ? "20rem" : "100%"}
              mb="3rem"
            >
              <Flex alignItems="center" gap={2} mb="1rem">
                <API />
                <Text fontWeight={800}>API Development</Text>
              </Flex>
              <Text lineHeight={8}>
                We design and implement APIs that facilitate communication
                between different software systems, enabling data exchange and
                functionality.
              </Text>
            </Box>
            <Box
              mr={isLargerThan400 ? "5rem" : ""}
              w={isLargerThan400 ? "20rem" : "100%"}
              mb="3rem"
            >
              <Flex alignItems="center" gap={2} mb="1rem">
                <Database />
                <Text fontWeight={800}>Database Management</Text>
              </Flex>
              <Text lineHeight={8}>
                We design, implement, and maintain databases to store and manage
                application data efficiently, ensuring data integrity and
                security.
              </Text>
            </Box>
            <Box
              mr={isLargerThan400 ? "5rem" : ""}
              w={isLargerThan400 ? "20rem" : "100%"}
              mb="3rem"
            >
              <Flex alignItems="center" gap={2} mb="1rem">
                <Optimize />
                <Text fontWeight={800}>Performance Optimization</Text>
              </Flex>
              <Text lineHeight={8}>
                We analyze and enhance application performance to ensure fast
                load times, efficient resource usage, and a smooth user
                experience.
              </Text>
            </Box>
            <Box
              mr={isLargerThan400 ? "5rem" : ""}
              w={isLargerThan400 ? "20rem" : "100%"}
              mb="3rem"
            >
              <Flex alignItems="center" gap={2} mb="1rem">
                <UiUx />
                <Text fontWeight={800}>UI/UX Design</Text>
              </Flex>
              <Text lineHeight={8}>
                We focus on user interface (UI) design and user experience (UX)
                to create intuitive, user-friendly applications that enhance
                user satisfaction.
              </Text>
            </Box>
            <Box
              mr={isLargerThan400 ? "5rem" : ""}
              w={isLargerThan400 ? "20rem" : "100%"}
              mb="3rem"
            >
              <Flex alignItems="center" gap={2} mb="1rem">
                <Quality />
                <Text fontWeight={800}>Testing and Quality Assurance</Text>
              </Flex>
              <Text lineHeight={8}>
                We conduct various tests to ensure the application is bug-free
                and meets the required standards before deployment.
              </Text>
            </Box>
            <Box
              mr={isLargerThan400 ? "5rem" : ""}
              w={isLargerThan400 ? "20rem" : "100%"}
              mb="3rem"
            >
              <Flex alignItems="center" gap={2} mb="1rem">
                <Support />
                <Text fontWeight={800}>Technical Support and Maintenance</Text>
              </Flex>
              <Text lineHeight={8}>
                We provide ongoing support and maintenance for applications
                post-launch to ensure they run smoothly and meet user needs.
              </Text>
            </Box>
            <Box
              mr={isLargerThan400 ? "5rem" : ""}
              w={isLargerThan400 ? "20rem" : "100%"}
              mb="3rem"
            >
              <Flex alignItems="center" gap={2} mb="1rem">
                <DevOps />
                <Text fontWeight={800}>DevOps Practices</Text>
              </Flex>
              <Text lineHeight={8}>
                We integrate developments and operations to streamline
                deployment processes, improve application reliability, and
                automate workflows.
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;
