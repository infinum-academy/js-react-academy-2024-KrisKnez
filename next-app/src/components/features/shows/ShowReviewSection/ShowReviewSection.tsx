import React from "react";
import ReviewForm from "../../review/ReviewForm/ReviewForm";
import ReviewList from "../../review/ReviewList/ReviewList";
import { IReview } from "@/typings/review";
import { addReview, useReviewDispatch, useReviewState } from "@/contexts/review/ReviewContext";

export const ShowReviewSection: React.FC = () => {
  const reviewState = useReviewState();
  const reviewDispatch = useReviewDispatch();

  return (
    <>
      <ReviewForm
        addShowReview={(comment, rating) => {
          const newReview: IReview = {
            avatar: "#",
            email: "#",
            comment: comment,
            rating: rating,
          };
          reviewDispatch(addReview(newReview));
        }}
      />
      <ReviewList reviews={reviewState.reviews} />
    </>
  );
};
