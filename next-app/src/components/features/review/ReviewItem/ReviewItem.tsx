import React from "react";

import { IReview } from "@/typings/review";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Stack,
  Text,
} from "@chakra-ui/react";
import RatingInput from "@/components/shared/RatingInput/RatingInput";
import {
  deleteReview,
  useReviewDispatch,
} from "@/contexts/review/ReviewContext";

interface IReviewItemProps {
  review: IReview;
}

const ReviewItem = ({ review }: IReviewItemProps) => {
  const reviewDispatch = useReviewDispatch();

  return (
    <Card bg="brand.800" color="white">
      <CardBody>
        <Stack spacing={4} alignItems="flex-start" marginTop={2}>
          <Text>{review.comment}</Text>
          <RatingInput value={review.rating} label={`${review.rating} / 5`} />
        </Stack>
      </CardBody>
      <CardFooter>
        <Button
          fontSize="sm"
          colorScheme="gray"
          onClick={() => reviewDispatch(deleteReview(review))}
        >
          Remove
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ReviewItem;
