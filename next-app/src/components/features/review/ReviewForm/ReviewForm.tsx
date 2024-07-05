"use client";

import {
  Button,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";

interface ReviewFormProps {
  addShowReview: (comment: string, rating: number) => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ addShowReview }) => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);

  const [commentIsInvalid, setCommentIsInvalid] = useState(false);
  const [ratingIsInvalid, setRatingIsInvalid] = useState(false);

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
      setRatingIsInvalid(true);
      formIsInvalid = true;
    }

    return formIsInvalid;
  };

  const resetForm = () => {
    setComment("");
    setRating(5);
    setCommentIsInvalid(false);
    setRatingIsInvalid(false);
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
      <NumberInput
        defaultValue={5}
        min={1}
        max={5}
        value={rating || undefined}
        onChange={(_valueAsString, valueAsNumber) => {
          const newRating = valueAsNumber;
          setRating(newRating);
          setRatingIsInvalid(!isValidRating(newRating));
        }}
        isInvalid={ratingIsInvalid}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
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
