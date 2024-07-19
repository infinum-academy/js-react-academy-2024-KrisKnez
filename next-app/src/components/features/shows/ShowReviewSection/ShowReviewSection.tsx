import React from "react";
import ReviewForm from "../../review/ReviewForm/ReviewForm";
import ReviewList from "../../review/ReviewList/ReviewList";
import { IReview } from "@/typings/review";
import {
  addReview,
  getReviewsByShowId,
  useReviewDispatch,
  useReviewState,
} from "@/contexts/review/ReviewContext";
import { Heading, HStack, VStack } from "@chakra-ui/react";

interface ShowReviewSectionProps {
  showId: string;
}

export const ShowReviewSection: React.FC<ShowReviewSectionProps> = ({
  showId,
}) => {
  const reviewState = useReviewState();
  const reviewDispatch = useReviewDispatch();

  return (
    <HStack alignItems="flex-start" spacing={24}>
      <Heading size="lg">Reviews</Heading>
      <VStack flexGrow={1} alignItems="stretch" spacing={16}>
        <ReviewForm
          onSubmit={(form, data) => {
            const newReview: IReview = {
              avatar: "#",
              email: "#",
              comment: data.comment,
              rating: data.rating,
              showId,
            };
            reviewDispatch(addReview(newReview));
            form.reset();
          }}
        />
        <ReviewList reviews={getReviewsByShowId(reviewState, showId)} />
      </VStack>
    </HStack>
  );
};
