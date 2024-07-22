import { mutator } from "@/fetchers/mutator";
import { swrKeys } from "@/fetchers/swrKeys";
import { IReview } from "@/typings/review";
import React from "react";
import useSWRMutation from "swr/mutation";
import ReviewItem from "../ReviewItem/ReviewItem";
import useSWR, { mutate } from "swr";
import { fetcher } from "@/fetchers/fetcher";
import { IUser } from "@/typings/user";

interface ReviewItemContainerProps {
  review: IReview;
}

export const ReviewItemContainer = ({ review }: ReviewItemContainerProps) => {
  const { data: user } = useSWR(swrKeys.usersMe, fetcher<{ user: IUser }>);
  const userIsAuthor = review.user.id === user?.user.id;

  const { trigger } = useSWRMutation<any, any, string, RequestInit>(
    swrKeys.reviewById(review.id),
    (key, options) => mutator(key, options.arg)
  );

  const handleDelete = async (review: IReview) => {
    await trigger({
      method: "DELETE",
      body: JSON.stringify({
        id: review.id,
      }),
    });
    mutate(swrKeys.showByIdReviews(review.show_id.toString()));
  };

  return (
    <ReviewItem
      review={review}
      // Render the delete button only if the user is the author of the review
      // (If onDelete callback is not passed, the delete button will not be rendered)
      {...(userIsAuthor && { onDelete: handleDelete })}
    />
  );
};
