import { IReview } from "@/typings/review";
import { Stack } from "@chakra-ui/react";
import React from "react";
import { ReviewItemContainer } from "../ReviewItemContainer/ReviewItemContainer";

interface IReviewListProps {
  reviews: IReview[];
}

const ReviewList = ({ reviews }: IReviewListProps) => {
  return (
    <Stack spacing={2}>
      {reviews.map((review) => (
        <ReviewItemContainer key={review.id} review={review} />
      ))}
    </Stack>
  );
};

export default ReviewList;
