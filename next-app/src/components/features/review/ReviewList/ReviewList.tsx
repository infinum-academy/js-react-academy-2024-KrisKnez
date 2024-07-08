import { IReview } from "@/typings/review";
import { Stack } from "@chakra-ui/react";
import React from "react";
import ReviewItem from "../ReviewItem/ReviewItem";

interface IReviewListProps {
  reviews: IReview[];
}

const ReviewList = ({ reviews }: IReviewListProps) => {
  return (
    <Stack spacing={2}>
      {reviews.map((review, index) => (
        <ReviewItem key={index} review={review} />
      ))}
    </Stack>
  );
};

export default ReviewList;