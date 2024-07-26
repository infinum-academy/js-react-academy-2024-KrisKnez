import React from "react";

import { IReview, IReviewsResponse } from "@/typings/review";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Stack,
  Text,
} from "@chakra-ui/react";
import RatingInput from "@/components/shared/RatingInput/RatingInput";
import { mutate } from "swr";
import { swrKeys } from "@/fetchers/swrKeys";
import useSWRMutation from "swr/mutation";
import { useUser } from "@/hooks/users";
import { deleteReviewMutator } from "@/fetchers/deleteReviewMutator";
import { IMeta } from "@/typings/pagination";

interface IReviewItemProps {
  review: IReview;
}

export const ReviewItem = ({ review }: IReviewItemProps) => {
  const { data: user } = useUser();
  const userIsAuthor = review.user.id === user?.user.id;

  const { trigger } = useSWRMutation(
    swrKeys.reviewById(review.id),
    deleteReviewMutator
  );

  const handleDelete = async () => {
    await trigger();
    mutate(
      swrKeys.showByIdReviews(review.show_id.toString()),
      (res: IReviewsResponse = { reviews: [], meta: {} as IMeta }) => {
        return {
          ...res,
          reviews: res.reviews.filter((r) => r.id !== review.id),
        };
      },
      {
        revalidate: false,
      }
    );
  };

  return (
    <Card bg="brand.800" color="white">
      <CardBody>
        <Stack spacing={4} alignItems="flex-start" marginTop={2}>
          <Text>{review.comment}</Text>
          <RatingInput value={review.rating} label={`${review.rating} / 5`} />
        </Stack>
      </CardBody>
      <CardFooter>
        {userIsAuthor && (
          <Button fontSize="sm" colorScheme="gray" onClick={handleDelete}>
            Remove
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
