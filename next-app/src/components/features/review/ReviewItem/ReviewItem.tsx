import React from "react";

import { IReview } from "@/typings/review";
import { Card, CardBody, Text } from "@chakra-ui/react";
import RatingInput from "@/components/shared/RatingInput/RatingInput";

interface IReviewItemProps {
  review: IReview;
}

const ReviewItem = ({ review }: IReviewItemProps) => {
  return (
    <Card>
      <CardBody>
        <Text pt={2} pb={4}>{review.comment}</Text>
        <RatingInput
          value={review.rating}
          label={`${review.rating} / 5`}
        />
      </CardBody>
    </Card>
  );
};

export default ReviewItem;
