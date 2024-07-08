import React from "react";
import ReviewForm from "../../review/ReviewForm/ReviewForm";
import ReviewList from "../../review/ReviewList/ReviewList";
import { IReview } from "@/typings/review";
import { addReview, useReviewContext } from "@/contexts/review/ReviewContext";

export const ShowReviewSection: React.FC = () => {
  const { state, dispatch } = useReviewContext();

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
          dispatch(addReview(newReview));
        }}
      />
      <ReviewList reviews={state.reviews} />
    </>
  );
};
