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

interface IReviewItemProps {
  review: IReview;
  onDelete?: (review: IReview) => void;
}

const ReviewItem = ({ review, onDelete }: IReviewItemProps) => {
  return (
    <Card bg="brand.800" color="white">
      <CardBody>
        <Stack spacing={4} alignItems="flex-start" marginTop={2}>
          <Text>{review.comment}</Text>
          <RatingInput value={review.rating} label={`${review.rating} / 5`} />
        </Stack>
      </CardBody>
      <CardFooter>
        {onDelete && (
          <Button
            fontSize="sm"
            colorScheme="gray"
            onClick={() => onDelete(review)}
          >
            Remove
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ReviewItem;
