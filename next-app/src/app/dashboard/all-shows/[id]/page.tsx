"use client";

import { ShowDetailsContainer } from "@/components/features/shows/ShowDetailsContainer/ShowDetailsContainer";
import { ShowReviewSection } from "@/components/features/shows/ShowReviewSection/ShowReviewSection";
import { Container, VStack } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import React from "react";

const AllShowsByIdPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Container maxW="container.xl" padding={8} p={0}>
      <VStack alignItems="stretch" spacing={24}>
        <ShowDetailsContainer showId={id} />
        <ShowReviewSection showId={id} />
      </VStack>
    </Container>
  );
};

export default AllShowsByIdPage;
