import React from "react";

import { IReview } from "@/typings/review";
import { Card, CardBody, Text } from "@chakra-ui/react";

interface IReviewItemProps {
  review: IReview;
}

const ReviewItem = ({ review }: IReviewItemProps) => {
  return (
    <Card>
      <CardBody>
        <Text pt="2">{review.comment}</Text>
        <Text pt="2">{review.rating} / 5</Text>
      </CardBody>
    </Card>
  );
};

export default ReviewItem;
