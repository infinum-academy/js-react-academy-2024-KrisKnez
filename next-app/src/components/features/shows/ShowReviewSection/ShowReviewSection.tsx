import React from "react";
import ReviewForm from "../../review/ReviewForm/ReviewForm";
import ReviewList from "../../review/ReviewList/ReviewList";
import { IReviewsResponse } from "@/typings/review";
import { Heading, HStack, VStack } from "@chakra-ui/react";
import { getHeaders, useAuthState } from "@/contexts/auth/AuthContext";
import useSWR from "swr";
import { IErrorResponse } from "@/typings/errors";
import { swrKeys } from "@/fetchers/swrKeys";
import { fetcher } from "@/fetchers/fetcher";
import useSWRMutation from "swr/mutation";
import { mutator } from "@/fetchers/mutator";
import toast from "react-hot-toast";

interface ShowReviewSectionProps {
  showId: string;
}

export const ShowReviewSection: React.FC<ShowReviewSectionProps> = ({
  showId,
}) => {
  const authState = useAuthState();

  const { trigger } = useSWRMutation(swrKeys.reviews, mutator);

  const { data, isLoading, error } = useSWR<
    IReviewsResponse,
    IErrorResponse,
    [RequestInfo, RequestInit]
  >(
    [
      swrKeys.showByIdReviews(showId),
      {
        headers: getHeaders(authState)!,
      },
    ],
    ([url, init]) => fetcher(url, init)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.errors}</div>;
  }

  return (
    <HStack alignItems="flex-start" spacing={24}>
      <Heading size="lg">Reviews</Heading>
      <VStack flexGrow={1} alignItems="stretch" spacing={16}>
        <ReviewForm
          onSubmit={async (form, data) => {
            try {
              await trigger(data);
              toast.success("Review added successfully");
              form.reset();
            } catch (e) {
              if (e instanceof Error)
                e.message
                  .split(", ")
                  .map((errorMessage) => toast.error(errorMessage));
            }
          }}
        />
        <ReviewList reviews={data?.reviews!} />
      </VStack>
    </HStack>
  );
};
