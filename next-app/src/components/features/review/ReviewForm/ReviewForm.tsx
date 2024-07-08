"use client";

import RatingInput from "@/components/shared/RatingInput/RatingInput";
import { Button, Stack, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";

interface ReviewFormProps {
  addShowReview: (comment: string, rating: number) => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ addShowReview }) => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);

  const [commentIsInvalid, setCommentIsInvalid] = useState(false);

  const isValidComment = (comment: string): boolean => {
    if (!comment) return false;

    return true;
  };
  const isValidRating = (rating: number): boolean => {
    if (!(rating >= 1 && rating <= 5)) return false;

    return true;
  };

  // Validate form, set invalid states and return true if invalid
  const validateForm = (): boolean => {
    let formIsInvalid = false;
    if (!isValidComment(comment)) {
      setCommentIsInvalid(true);
      formIsInvalid = true;
    }
    if (!isValidRating(rating)) {
      formIsInvalid = true;
    }

    return formIsInvalid;
  };

  const resetForm = () => {
    setComment("");
    setRating(5);
    setCommentIsInvalid(false);
  };

  return (
    <Stack alignItems="flex-start">
      <Textarea
        placeholder="Add review"
        maxH={200}
        value={comment}
        onChange={(e) => {
          const newComment = e.target.value;
          setComment(newComment);
          setCommentIsInvalid(!isValidComment(newComment));
        }}
        isInvalid={commentIsInvalid}
      />
      <RatingInput
        label={`${rating} / 5`}
        onChange={(rating) => {
          setRating(rating);
        }}
        value={rating}
      />
      <Button
        colorScheme="teal"
        size="lg"
        onClick={() => {
          if (validateForm()) return;

          addShowReview(comment, rating);
          resetForm();
        }}
      >
        Button
      </Button>
    </Stack>
  );
};

export default ReviewForm;
