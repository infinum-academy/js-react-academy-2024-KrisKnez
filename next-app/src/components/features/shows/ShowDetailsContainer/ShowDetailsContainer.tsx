import { IShowByIdResponse } from "@/typings/show";
import React from "react";

import { ShowDetails } from "../ShowDetails/ShowDetails";
import useSWR from "swr";
import { Spinner, VStack } from "@chakra-ui/react";
import { IErrorResponse } from "@/typings/errors";
import { swrKeys } from "@/fetchers/swrKeys";
import { fetcher } from "@/fetchers/fetcher";

interface ShowDetailsContainerProps {
  showId: string;
}

export const ShowDetailsContainer = ({ showId }: ShowDetailsContainerProps) => {
  const { data, isLoading, error } = useSWR<
    IShowByIdResponse,
    IErrorResponse,
    string
  >(swrKeys.showById(showId), fetcher);

  if (error) return <div>Error: {error.errors}</div>;

  if (isLoading || !data)
    return (
      <VStack py={16}>
        <Spinner size="xl" />
      </VStack>
    );

  return <ShowDetails show={data.show} />;
};
