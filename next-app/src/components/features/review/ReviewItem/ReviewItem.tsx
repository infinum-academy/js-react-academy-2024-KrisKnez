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
  useReviewContext,
} from "@/contexts/review/ReviewContext";

interface IReviewItemProps {
  review: IReview;
}

const ReviewItem = ({ review }: IReviewItemProps) => {
  const { dispatch } = useReviewContext();

  return (
    <Card bg="brand.800" color="white" borderRadius={"24px"}>
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
          onClick={() => dispatch(deleteReview(review))}
        >
          Remove
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ReviewItem;
