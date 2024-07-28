import ShowList from "@/components/shared/ShowList/ShowList";
import { fetcher } from "@/fetchers/fetcher";
import { getShowsTopRated, getShowsTopRatedKey } from "@/fetchers/shows";
import { swrKeys } from "@/fetchers/swrKeys";
import { IErrorResponse } from "@/typings/errors";
import { IShowTopRatedResponse } from "@/typings/show";
import { Spinner, VStack } from "@chakra-ui/react";
import React from "react";
import useSWR from "swr";

export const TopRatedShowList = () => {
  const { data, isLoading, error } = useSWR<
    IShowTopRatedResponse,
    IErrorResponse,
    string
  >(swrKeys.showsTopRated, fetcher);

  if (error) {
    return <div>Error: {error.errors}</div>;
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
