"use client";

import { ShowDetailsContainer } from "@/components/features/shows/ShowDetailsContainer/ShowDetailsContainer";
import { ShowReviewSection } from "@/components/features/shows/ShowReviewSection/ShowReviewSection";
import { Box, Heading, HStack, VStack } from "@chakra-ui/react";
import Head from "next/head";
import { useParams } from "next/navigation";
import React from "react";

const AllShowsByIdPage = () => {
  const { id } = useParams();

  if (typeof id !== "string") {
    return (
      <VStack py={16}>
        <Heading>Invalid show ID</Heading>
      </VStack>
    );
  }

  return (
    <VStack alignItems="stretch" spacing={24}>
      <ShowDetailsContainer showId={id} />
      <ShowReviewSection showId={id} />
    </VStack>
  );
};

export default AllShowsByIdPage;