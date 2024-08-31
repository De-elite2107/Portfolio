import ContactUs from "@/components/contact";
import Homepage from "@/components/home";
import Portfolio from "@/components/portfolio";
import Resume from "@/components/resume";
import FancyText from '@carefully-coded/react-text-gradient';
import {
  Box,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
const Home = () => {
  return (
    <Box h="100%" bg="#081f37">
      <Tabs transition="ease-in-out">
        <Box
        position="fixed"
        top={0}
        zIndex={100}
        w="100%"
        bg="#081f37"
        >
          <Flex
            alignItems="end"
            justifyContent="space-between"
            color="#5fc9f3"
            flexWrap="wrap"
          >
            <Text p="1rem" fontSize="24px" >
              <FancyText gradient={{
                type: "linear",
                from: "#1e549f",
                to: "#5fc9f3",
              }}>
                De-elite Technologies
              </FancyText>
            </Text>
            <TabList>
              <Tab w="10rem">Home</Tab>
              <Tab w="10rem">Resume</Tab>
              <Tab w="10rem">Portfolio</Tab>
              <Tab w="10rem">Contacts</Tab>
            </TabList>
          </Flex>
        </Box>
        <TabPanels>
          <TabPanel>
            <Homepage/>
          </TabPanel>
          <TabPanel>
            <Resume/>
          </TabPanel>
          <TabPanel>
            <Portfolio/>
          </TabPanel>
          <TabPanel>
            <ContactUs/>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Box position="fixed" display="block" w="100%" zIndex={100} bottom={0} bg="#081f37">
        <Text color="#5fc9f3" p="1.5rem" fontSize="14px">&copy; 2024 De-elite Technologies. All rights reserved.</Text>
      </Box>
    </Box>
  );
};
export default Home;
