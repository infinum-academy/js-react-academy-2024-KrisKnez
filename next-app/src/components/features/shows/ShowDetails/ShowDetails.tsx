"use client";

import React from "react";
import { Box, Card, CardBody, Heading, Text } from "@chakra-ui/react";

import { IShow } from "@/typings/show";
import { Image } from "@chakra-ui/next-js";
import {
  getAverageRating,
  useReviewContext,
} from "@/contexts/review/ReviewContext";

interface ShowDetailsProps {
  show: IShow;
}

export const ShowDetails = ({ show }: ShowDetailsProps) => {
  const { state } = useReviewContext();

  const averageRating = getAverageRating(state);

  return (
    <Card overflow="hidden" borderRadius={"24px"}>
      <Box position="relative" width="100%" height="400px">
        <Image
          src={show.imageUrl || "https://fakeimg.pl/600x400"}
          alt={show.title}
          fill
          sx={{ objectFit: "cover" }}
        />
      </Box>
      <CardBody>
        <Heading size="md" color="brand.800">
          {show.title}
        </Heading>
        <Text pt="2" color="brand.800">
          {show.description}
        </Text>
        <Text pt="2" fontWeight="bold" color="brand.800">
          {averageRating ? `${averageRating.toFixed(1)} / 5` : "No ratings"}
        </Text>
      </CardBody>
    </Card>
  );
};
