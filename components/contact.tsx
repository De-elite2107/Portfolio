import React from 'react'
import DownArrowIcon from '@/svgs/down-arrow';
import { Box, Button, Flex, Input, Link, Text, Textarea, useMediaQuery } from '@chakra-ui/react'
import FancyText from '@carefully-coded/react-text-gradient';
import { ErrorMessage, Form, Formik } from "formik";
import SmartPhone from '@/svgs/smartphone';
import Email from '@/svgs/email';
import Location from '@/svgs/location';
import * as Yup from "yup";
import WhatsappIcon from '@/svgs/whatsapp';
import LinkedinIcon from '@/svgs/linkedin';
import InstagramIcon from '@/svgs/instagram';

const ContactUs = () => {
    const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");
    const [isLargerThan400] = useMediaQuery("(min-width: 600px)");
    const phoneRegex = /^(\+?234)?(\d{10})$/;
    const initialvalues = {
        name: "",
        email: "",
        phone: "",
        message: "",
    }
    const validationschema =  Yup.object().shape({
        name: Yup.string().required("Full Name is required"),
        email: Yup.string().email().required("Email is required"),
        phone: Yup.string().matches(phoneRegex, 'Invalid phone number format').required('Phone number is required'),
        message: Yup.string().required("Message is required"),
    })
    const onSubmit = (values: any, {resetForm} : any) => {
        const name = values.name;
        const email = values.email;
        const phone = values.phone;
        const message = values.message;

        const subject = encodeURIComponent("Contact Through Portfolio");
        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`
        );

        const mailtoLink = `mailto:delightadediran21@gmail.com?subject=${subject}&body=${body}`;

        // Open the default mail client
        window.location.href = mailtoLink;

        // Optionally reset the form
        resetForm();
    }
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
                data-text="Contacts"
                pb="1rem"
                color="#5fc9f3"
            >
                Contacts
            </Text>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <Text color="white" textAlign="center" mb="5rem">Let's Connect...</Text>
            <Link href="#contacts" className="mouse_btn" w="fit-content" display="block" m="auto">
                <DownArrowIcon width={50} height={50} fill="white"/>
            </Link>
        </Box>
        <Box id='contacts' p={isLargerThan1000 ? "4rem" : "0rem"}>
            <Box color="white">
                <Text fontSize="24px" mb="3rem">
                    <FancyText gradient={{
                    type: "linear",
                    from: "#5fc9f3",
                    to: "#1e549f",
                    }}>
                        CONTACTS
                    </FancyText>
                </Text>
                <Flex flexWrap="wrap">
                    <Link href='tel:+2347089547793' target='_blank'>
                        <Box mb="3rem" w={isLargerThan400 ? "25rem" : "100%"}>
                            <Flex alignItems="center" mb="1rem" gap={2}>
                                <SmartPhone/>
                                <Text>Phone</Text>
                            </Flex>
                            <Text>+234 708 954 7793</Text>
                        </Box>
                    </Link>
                    <Link href='mailto:delightadediran21@gmail.com' target='_blank'>
                        <Box mb="3rem" w={isLargerThan400 ? "25rem" : "100%"}>
                            <Flex alignItems="center" mb="1rem" gap={2}>
                                <Email/>
                                <Text>Email</Text>
                            </Flex>
                            <Text>delightadediran21@gmail.com</Text>
                        </Box>
                    </Link>
                    <Link href='https://maps.app.goo.gl/gHrgVXChjT9sLAYC6' target='_blank'>
                        <Box mb="3rem" w={isLargerThan400 ? "25rem" : "100%"}>
                            <Flex alignItems="center" mb="1rem" gap={2}>
                                <Location/>
                                <Text>Address</Text>
                            </Flex>
                            <Text>No. 28, Oisamoje Close, Ikola Ogunseye, Lagos</Text>
                        </Box>
                    </Link>
                    <Link href='https://wa.link/3bl1ku' target='_blank'>
                        <Box mb="3rem" w={isLargerThan400 ? "25rem" : "15rem"}>
                            <Flex alignItems="center" mb="1rem" gap={2}>
                                <WhatsappIcon/>
                                <Text>WhatsApp</Text>
                            </Flex>
                        </Box>
                    </Link>
                    <Link href='https://www.linkedin.com/in/delight-adediran-7151b022a/' target='_blank'>
                        <Box mb="3rem" w={isLargerThan400 ? "25rem" : "15rem"}>
                            <Flex alignItems="center" mb="1rem" gap={2}>
                                <LinkedinIcon/>
                                <Text>LinkedIn</Text>
                            </Flex>
                        </Box>
                    </Link>
                    <Link href='https://www.instagram.com/de_elite21/' target='_blank'>
                        <Box mb="3rem" w={isLargerThan400 ? "25rem" : "15rem"}>
                            <Flex alignItems="center" mb="1rem" gap={2}>
                                <InstagramIcon/>
                                <Text>Instagram</Text>
                            </Flex>
                        </Box>
                    </Link>
                </Flex>
            </Box>
            <Box>
                <Formik
                initialValues={initialvalues}
                validationSchema={validationschema}
                onSubmit={onSubmit}
                >
                    {({handleChange, handleSubmit, setFieldValue})=>(
                        <Form onSubmit={handleSubmit} target='_blank'>
                            <Box mb="4rem">
                                <Input color="white" variant="none" bg="#081f37" h="80px" borderRadius="0px" borderBottom="2px solid grey" placeholder='Name*' name='name' onChange={handleChange}/>
                                <Text mt="1rem" color="red"><ErrorMessage name='name'/></Text>
                            </Box>
                            <Box mb="4rem">
                                <Input color="white" variant="none" bg="#081f37" h="80px" borderRadius="0px" borderBottom="2px solid grey" placeholder='Email*' name='email' onChange={handleChange}/>
                                <Text mt="1rem" color="red"><ErrorMessage name='email'/></Text>
                            </Box>
                            <Box mb="4rem">
                                <Input color="white" variant="none" bg="#081f37" h="80px" borderRadius="0px" borderBottom="2px solid grey" placeholder='Mobile*' name='phone' onChange={handleChange}/>
                                <Text mt="1rem" color="red"><ErrorMessage name='phone'/></Text>
                            </Box>
                            <Box mb="4rem">
                                <Textarea color="white" variant="none" bg="#081f37" rows={10} borderRadius="0px" borderBottom="2px solid grey" placeholder='Message*' name='message' onChange={handleChange}/>
                                <Text mt="1rem" color="red"><ErrorMessage name='message'/></Text>
                            </Box>
                            <Button
                            p="2rem"
                            bg="#1e549f"
                            color="white"
                            type='submit'
                            _hover={{"bg" : "grey"}}
                            >
                                Send Message
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Box>
    </>
    
  )
}

export default ContactUs;