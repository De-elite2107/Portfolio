import ContactUs from "@/components/contact";
import Homepage from "@/components/home";
import Portfolio from "@/components/portfolio";
import Resume from "@/components/resume";
import FancyText from '@carefully-coded/react-text-gradient';
import Hamburger from 'hamburger-react';
import {
  Box,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { Link } from 'react-scroll'
import { RefObject, useEffect, useRef, useState } from "react";
const Home = () => {
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");
  const [isLargerThan400] = useMediaQuery("(min-width: 400px)");
  const [isOpen, setOpen] = useState(false);
  const [stylesLoaded, setStylesLoaded] = useState(false);
  const menuRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);
    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [])
  useEffect(() => {
    setTimeout(() => {
      setStylesLoaded(true);
    }, 1000);
  }, []);
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <>
      {stylesLoaded ? (
        <Box h="100%" bg="#081f37">
            <Box
            position="fixed"
            top={0}
            zIndex={100}
            w="100%"
            bg="#081f37"
            >
              <Flex
                alignItems="center"
                justifyContent="space-between"
                color="#5fc9f3"
              >
                <Link activeClass="disabled" to="home" spy={true} smooth={true}>
                  <Text p="1rem" fontSize="24px" cursor="pointer">
                    <FancyText className="fromLeft" gradient={{
                      type: "linear",
                      from: "#1e549f",
                      to: "#5fc9f3",
                    }}>
                      De-elite Technologies
                    </FancyText>
                  </Text>
                </Link>
                {isLargerThan1000 ? (
                <Flex w="35%" className="fromRight">
                  <Link activeClass="active" to="home" spy={true} smooth={true}>
                    <Box w="7rem" cursor="pointer">
                      <Text w="fit-content">Home</Text>
                    </Box>
                  </Link>
                  <Link activeClass="active" to="resume" spy={true} smooth={true}>
                    <Box w="7rem" cursor="pointer">
                      <Text w="fit-content">Resume</Text>
                    </Box>
                  </Link>
                  <Link activeClass="active" to="portfolio" spy={true} smooth={true}>
                    <Box w="7rem" cursor="pointer">
                      <Text w="fit-content">Portfolio</Text>
                    </Box>
                  </Link>
                  <Link activeClass="active" to="contact" spy={true} smooth={true}>
                    <Box w="7rem" cursor="pointer">
                      <Text w="fit-content">Contact Us</Text>
                    </Box>
                  </Link>
                </Flex>
                ) : (
                  <Box
                    ref={menuRef}
                    color="white"
                    className="fromRight"
                  >
                    <Menu>
                      <MenuButton _hover={{"bg" : "none"}} _active={{"bg" : "none"}} bg="none" as={IconButton} icon={<Hamburger toggled={isOpen} toggle={setOpen} color="#2e79ba"/>}/>
                      <MenuList lineHeight={10} className="menulist" bg="#081f37" border="none" minW="100vw" borderRadius="none">
                        <Link activeClass="active" to="home" spy={true} smooth={true}>
                          <MenuItem
                          justifyContent="center"
                          onClick={() => {
                            setOpen(false)
                          }}
                          bg=""
                          >
                            Home
                          </MenuItem>
                        </Link>
                        <Link activeClass="active" to="resume" spy={true} smooth={true}>
                          <MenuItem
                          justifyContent="center"
                          onClick={() => {
                            setOpen(false)
                          }}
                          bg=""
                          >
                            Resume
                          </MenuItem>
                        </Link>
                        <Link activeClass="active" to="portfolio" spy={true} smooth={true}>
                          <MenuItem
                          justifyContent="center"
                          onClick={() => {
                            setOpen(false)
                          }}
                          bg=""
                          >
                            Portfolio
                          </MenuItem>
                        </Link>
                        <Link activeClass="active" to="contact" spy={true} smooth={true}>
                          <MenuItem
                          justifyContent="center"
                          onClick={() => {
                            setOpen(false)
                          }}
                          bg=""
                          >
                            Contact Us
                          </MenuItem>
                        </Link>
                      </MenuList>
                    </Menu>
                  </Box>
                )}
              </Flex>
            </Box>
            <Box p="0rem 2rem 0rem 2rem">
              <Homepage/>
              <Resume/>
              <Portfolio/>
              <ContactUs/>
            </Box>
          <Box position={isLargerThan400 ? "fixed" : "relative"} display="block" w="100%" zIndex={100} bottom={0} bg="#081f37">
            <Text className="fromBottom" color="#5fc9f3" p="1.5rem" fontSize="14px">&copy; 2024 De-elite Technologies. All rights reserved.</Text>
          </Box>
        </Box>
      ) : (
        <Box bg="#081f37" height="100vh">
          <Text mt="40vh" color="white" p="2rem" fontSize="24px" textAlign="center">
            Loading...
          </Text>
        </Box>
      )}
    </>
  );
};
export default Home;
