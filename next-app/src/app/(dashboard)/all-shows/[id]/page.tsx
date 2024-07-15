"use client";

import { ShowDetailsContainer } from "@/components/features/shows/ShowDetailsContainer/ShowDetailsContainer";
import { ShowReviewSection } from "@/components/features/shows/ShowReviewSection/ShowReviewSection";
import { Box, Heading, HStack, VStack } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

const AllShowsByIdPage = () => {
  return (
    <VStack alignItems="stretch" spacing={24}>
      <ShowDetailsContainer />
      <ShowReviewSection />
    </VStack>
  );
};

export default AllShowsByIdPage;
