import React, { ComponentProps } from "react";

import {
  Box,
  Card,
  CardBody,
  CardProps,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/next-js";

import { IShow } from "@/typings/show";
import { StarIcon } from "@chakra-ui/icons";

interface IShowCardProps extends CardProps {
  show: IShow;
}

const ShowCard = ({ show, ...restProps }: IShowCardProps) => {
  return (
    <Card
      overflow="hidden"
      flexGrow={1}
      variant="light"
      minWidth={0}
      {...restProps}
    >
      <Box position="relative" width="100%" flexGrow={1}>
        <Image
          src={show.image_url || "https://fakeimg.pl/600x400"}
          // src={"https://fakeimg.pl/600x400"}
          sizes="(max-width: 768px) 25vw"
          alt={show.title}
          fill
          sx={{ objectFit: "cover" }}
        />
      </Box>
      <CardBody color="brand.800" flexGrow={0}>
        <Heading
          size="md"
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {show.title}
        </Heading>
        <HStack>
          <StarIcon />
          <Text>
            {show.average_rating ? `${show.average_rating}/5` : "No rating"}
          </Text>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default ShowCard;
