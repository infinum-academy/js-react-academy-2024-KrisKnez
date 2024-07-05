import React from "react";
import ReviewForm from "../../review/ReviewForm/ReviewForm";
import ReviewList from "../../review/ReviewList/ReviewList";
import { IReview } from "@/typings/review";

export const ShowReviewSection: React.FC = () => {
  const [reviewList, setReviewList] = React.useState<IReview[]>([]);

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
          setReviewList([...reviewList, newReview]);
        }}
      />
      <ReviewList reviews={reviewList} />
    </>
  );
};
