import { Box, Flex, Img, Link, Text } from '@chakra-ui/react'
import React from 'react'

type Icard = {
    Image?: string,
    Video?: string,
    Name: string,
    Type: string,
    Duration: string,
    URL: string,
    Details: string,
}

const Card = (props : Icard) => {
  return (
    <Box color="white" mb="3rem" w="20rem">
        <Box
        mb="1rem"
        w="20rem"
        h="11rem"
        >
            {props.Image && (<Img src={props.Image} alt='Card Img' w="100%" h="100%"/>)}
            {props.Video && (<video src={props.Video} controls muted/>)}
        </Box>
        <Flex gap={2} alignItems="start" mb="0.5rem">
            <Text color="#5fc9f3" w="5rem">Title:</Text>
            <Text>{props.Name}</Text>
        </Flex>
        <Flex gap={2} alignItems="start" mb="0.5rem">
            <Text color="#5fc9f3" w="5rem">Type:</Text>
            <Text>{props.Type}</Text>
        </Flex>
        <Flex gap={2} alignItems="start" mb="0.5rem">
            <Text color="#5fc9f3" w="5rem">Duration:</Text>
            <Text>{props.Duration}</Text>
        </Flex>
        <Flex gap={2} alignItems="start">
            <Text color="#5fc9f3" w="5rem">URL:</Text>
            <Text><Link href={props.URL} target='_blank'>{props.URL}</Link></Text>
        </Flex>
        <Flex alignItems="start" flexWrap="wrap" gap={2} mb="0.5rem">
            <Text color="#5fc9f3" w="5rem">Details:</Text>
            <Text>{props.Details}</Text>
        </Flex>
    </Box>
  )
}

export default Card