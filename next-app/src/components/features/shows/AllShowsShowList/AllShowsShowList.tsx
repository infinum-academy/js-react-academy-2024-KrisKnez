import ShowList from "@/components/shared/ShowList/ShowList";
import { getHeaders, useAuthState } from "@/contexts/auth/AuthContext";
import { fetcher } from "@/fetchers/fetcher";
import { swrKeys } from "@/fetchers/swrKeys";
import { IErrorResponse } from "@/typings/errors";
import { IShowsResponse } from "@/typings/show";
import { Spinner, VStack } from "@chakra-ui/react";
import React from "react";
import useSWR from "swr";

export const AllShowsShowList = () => {
  const authState = useAuthState();
  const { data, isLoading, error } = useSWR<
    IShowsResponse,
    IErrorResponse,
    [RequestInfo, RequestInit]
  >(
    [
      swrKeys.shows,
      {
        headers: getHeaders(authState)!,
      },
    ],
    ([url, init]) => fetcher(url, init)
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
