import { IReview } from "@/typings/review";
import { Stack } from "@chakra-ui/react";
import React from "react";
import ReviewItem from "../ReviewItem/ReviewItem";
import {
  deleteReview,
  useReviewDispatch,
} from "@/contexts/review/ReviewContext";

interface IReviewListProps {
  reviews: IReview[];
}

const ReviewList = ({ reviews }: IReviewListProps) => {
  const reviewDispatch = useReviewDispatch();

  return (
    <Stack spacing={2}>
      {reviews.map((review, index) => (
        <ReviewItem
          key={index}
          review={review}
          onDelete={(review) => reviewDispatch(deleteReview(review))}
        />
      ))}
    </Stack>
  );
};

export default ReviewList;
