"use client";

import { ShowDetailsContainer } from "@/components/features/shows/ShowDetailsContainer/ShowDetailsContainer";
import { ShowReviewSection } from "@/components/features/shows/ShowReviewSection/ShowReviewSection";
import { VStack } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import React from "react";

const AllShowsByIdPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <VStack alignItems="stretch" spacing={24}>
      <ShowDetailsContainer showId={id} />
      <ShowReviewSection showId={id} />
    </VStack>
  );
};

export default AllShowsByIdPage;
