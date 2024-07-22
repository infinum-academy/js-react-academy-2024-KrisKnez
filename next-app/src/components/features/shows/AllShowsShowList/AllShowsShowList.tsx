import ShowList from "@/components/shared/ShowList/ShowList";
import { fetcher } from "@/fetchers/fetcher";
import { swrKeys } from "@/fetchers/swrKeys";
import { IErrorResponse } from "@/typings/errors";
import { IShowsResponse } from "@/typings/show";
import { Spinner, VStack } from "@chakra-ui/react";
import React from "react";
import useSWR from "swr";

export const AllShowsShowList = () => {
  const { data, isLoading, error } = useSWR<
    IShowsResponse,
    IErrorResponse,
    string
  >(
    swrKeys.shows,
    (url) => fetcher(url)
  );

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
