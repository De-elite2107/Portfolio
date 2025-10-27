import { AspectRatio, Box, Flex, Grid, GridItem, Img, Link, Text } from "@chakra-ui/react";
import React from "react";

type Icard = {
  Image?: string;
  Name: string;
  Type: string;
  Duration: string;
  URL: string;
  Details: string;
};

const Card = (props: Icard) => {
  return (
    <Box color="white" mb="3rem" w={{base: "100%" , md: "23rem"}}>
      <AspectRatio ratio={16/9} mb="0.5rem">
        {props.Image && (
          <Img src={props.Image} alt="Card Img" w="100%" h="100%" />
        )}
      </AspectRatio>
      <Grid gap={2} alignItems="start" templateColumns={{base: "repeat(1, 1fr)", md: "repeat(5, 1fr)"}}>
        <GridItem mb="0.5rem">
          <Text color="#5fc9f3" w="5rem">
            Title:
          </Text>
        </GridItem>
        <GridItem mb="0.5rem" colSpan={{base: 1, md: 4}}>
          <Text>{props.Name}</Text>
        </GridItem>
        <GridItem mb="0.5rem">
          <Text color="#5fc9f3" w="5rem">
            Type:
          </Text>
        </GridItem>
        <GridItem mb="0.5rem" colSpan={{base: 1, md: 4}}>
          <Text>{props.Type}</Text>
        </GridItem>
        <GridItem mb="0.5rem">
          <Text color="#5fc9f3" w="5rem">
            Duration:
          </Text>
        </GridItem>
        <GridItem mb="0.5rem" colSpan={{base: 1, md: 4}}>
          <Text>{props.Duration}</Text>
        </GridItem>
        <GridItem>
          <Text color="#5fc9f3" w="5rem">
            URL:
          </Text>
        </GridItem>
        <GridItem colSpan={{base: 1, md: 4}}>
          <Text>
            <Link textDecoration="underline" href={props.URL} target="_blank">
              Link to Site
            </Link>
          </Text>
        </GridItem>
        <GridItem mb="0.5rem">
          <Text color="#5fc9f3" w="5rem">
            Details:
          </Text>
        </GridItem>
        <GridItem mb="0.5rem" colSpan={{base: 1, md: 4}}>
          <Text>{props.Details}</Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Card;
