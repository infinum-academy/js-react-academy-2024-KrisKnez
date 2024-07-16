import ShowList from "@/components/shared/ShowList/ShowList";
import { getShows, getShowsKey } from "@/fetchers/shows";
import { HStack, Spinner, VStack } from "@chakra-ui/react";
import React from "react";
import useSWR from "swr";

export const AllShowsShowList = () => {
  const { data, isLoading, error } = useSWR(getShowsKey(), getShows);

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

  return <ShowList shows={data!.shows} />;
};
