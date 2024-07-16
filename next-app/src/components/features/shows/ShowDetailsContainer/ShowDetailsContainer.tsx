import { IShow } from "@/typings/show";
import React from "react";

import BrooklynNineNineImage from "@/assets/images/brooklyn-nine-nine.webp";
import { ShowDetails } from "../ShowDetails/ShowDetails";
import useSWR from "swr";
import { getShowById, getShowByIdKey } from "@/fetchers/shows";
import { Spinner, VStack } from "@chakra-ui/react";

interface ShowDetailsContainerProps {
  showId: string;
}

export const ShowDetailsContainer = ({ showId }: ShowDetailsContainerProps) => {
  const { data, isLoading, error } = useSWR(getShowByIdKey(showId), () =>
    getShowById(showId)
  );

  if (isLoading) {
    return (
      <VStack py={16}>
        <Spinner size="xl" />
      </VStack>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <ShowDetails show={data!} />;
};
