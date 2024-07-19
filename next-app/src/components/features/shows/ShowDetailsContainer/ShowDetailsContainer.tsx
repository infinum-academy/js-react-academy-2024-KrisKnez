import { IShowByIdResponse } from "@/typings/show";
import React from "react";

import { ShowDetails } from "../ShowDetails/ShowDetails";
import useSWR from "swr";
import { Spinner, VStack } from "@chakra-ui/react";
import { getHeaders, useAuthState } from "@/contexts/auth/AuthContext";
import { IErrorResponse } from "@/typings/errors";
import { swrKeys } from "@/fetchers/swrKeys";
import { fetcher } from "@/fetchers/fetcher";

interface ShowDetailsContainerProps {
  showId: string;
}

export const ShowDetailsContainer = ({ showId }: ShowDetailsContainerProps) => {
  const authState = useAuthState();
  const { data, isLoading, error } = useSWR<
    IShowByIdResponse,
    IErrorResponse,
    [RequestInfo, RequestInit]
  >(
    [
      swrKeys.showById(showId),
      {
        headers: getHeaders(authState)!,
      },
    ],
    ([url, init]) => fetcher(url, init)
  );

  if (isLoading) {
    return (
      <VStack py={16}>
        <Spinner size="xl" />
      </VStack>
    );
  }

  console.log(error);

  if (error) {
    return <div>Error: {error.errors}</div>;
  }

  return <ShowDetails show={data!.show} />;
};
