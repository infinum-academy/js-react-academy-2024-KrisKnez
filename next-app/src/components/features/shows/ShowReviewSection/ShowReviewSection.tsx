import React from "react";
import ReviewForm from "../../review/ReviewForm/ReviewForm";
import ReviewList from "../../review/ReviewList/ReviewList";
import { IReviewsResponse } from "@/typings/review";
import { Heading, HStack, VStack } from "@chakra-ui/react";
import useSWR from "swr";
import { IErrorResponse } from "@/typings/errors";
import { swrKeys } from "@/fetchers/swrKeys";
import { fetcher } from "@/fetchers/fetcher";
import useSWRMutation from "swr/mutation";
import toast from "react-hot-toast";
import { createReviewMutator } from "@/fetchers/createReviewMutator";

interface ShowReviewSectionProps {
  showId: string;
}

export const ShowReviewSection: React.FC<ShowReviewSectionProps> = ({
  showId,
}) => {
  const { trigger } = useSWRMutation(swrKeys.reviews, createReviewMutator);

  const { data, isLoading, error } = useSWR<
    IReviewsResponse,
    IErrorResponse,
    string
  >(swrKeys.showByIdReviews(showId), fetcher);

  if (error) return <div>Error: {error.errors}</div>;

  if (isLoading || !data) return <div>Loading...</div>;

  return (
    <HStack alignItems="flex-start" spacing={24}>
      <Heading size="lg">Reviews</Heading>
      <VStack flexGrow={1} alignItems="stretch" spacing={16}>
        <ReviewForm
          onSubmit={async (form, data) => {
            try {
              await trigger({ ...data, show_id: showId });
              toast.success("Review added successfully");
              form.reset();
            } catch (err: any) {
              err.errors?.map((errorMessage: string) =>
                toast.error(errorMessage)
              );
            }
          }}
        />
        <ReviewList reviews={data?.reviews!} />
      </VStack>
    </HStack>
  );
};
