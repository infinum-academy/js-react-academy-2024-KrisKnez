import ShowList from "@/components/shared/ShowList/ShowList";
import { getShowsTopRated, getShowsTopRatedKey } from "@/fetchers/shows";
import { Spinner, VStack } from "@chakra-ui/react";
import React from "react";
import useSWR from "swr";

export const TopRatedShowList = () => {
  const { data, isLoading, error } = useSWR(
    getShowsTopRatedKey(),
    getShowsTopRated
  );

  if (error) {
    return <div>Error: {error.message}</div>;
  }


  if (isLoading || !data) {
    return (
      <VStack py={16}>
        <Spinner size="xl" />
      </VStack>
    );
  }

  
  return <ShowList shows={data.shows} />;
};
