import React from "react";

import { IReview } from "@/typings/review";
import { Button, Card, CardBody, Stack, Text } from "@chakra-ui/react";
import RatingInput from "@/components/shared/RatingInput/RatingInput";
import {
  deleteReview,
  useReviewContext,
} from "@/contexts/review/ReviewContext";

interface IReviewItemProps {
  review: IReview;
}

const ReviewItem = ({ review }: IReviewItemProps) => {
  const { dispatch } = useReviewContext();

  return (
    <Card>
      <CardBody>
        <Stack spacing={4} alignItems="flex-start" marginTop={2}>
          <Text>{review.comment}</Text>
          <RatingInput value={review.rating} label={`${review.rating} / 5`} />
          <Button onClick={() => dispatch(deleteReview(review))}>Delete</Button>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ReviewItem;
