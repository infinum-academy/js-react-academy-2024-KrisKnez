"use client";

import { Container, Heading, Stack } from "@chakra-ui/react";

import { ShowDetailsContainer } from "@/components/features/shows/ShowDetailsContainer/ShowDetailsContainer";
import { ShowReviewSection } from "@/components/features/shows/ShowReviewSection/ShowReviewSection";

export default function Home() {
  return (
    <Container maxW="4xl">
      <Stack spacing={4} marginY={4}>
        <Heading as="h1" size="lg">
          TV shows APP
        </Heading>
        <ShowDetailsContainer />
        <ShowReviewSection />
      </Stack>
    </Container>
  );
}
