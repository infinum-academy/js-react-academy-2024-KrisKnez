"use client";

import RatingInput from "@/components/shared/RatingInput/RatingInput";
import {
  Box,
  Button,
  Heading,
  HStack,
  Stack,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

interface ReviewFormProps {
  addShowReview: (comment: string, rating: number) => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ addShowReview }) => {
  const [rating, setRating] = useState(5);

  return (
    <VStack
      as="form"
      alignItems="stretch"
      spacing={6}
      onSubmit={(event) => {
        event.preventDefault();

        const form = event.target as HTMLFormElement;

        // Get form values
        const formData = new FormData(form);
        const comment = formData.get("comment") as string;

        addShowReview(comment, rating);

        // Reset form
        setRating(5);
        form.reset();
      }}
    >
      <Textarea
        name="comment"
        required
        placeholder="Add review"
        maxH={200}
        bg="white"
        color="black"
        borderRadius={24}
        padding={4}
      />
      <HStack alignItems="flex-start" justifyContent="space-between">
        <Box p={2}>
          <RatingInput
            label={`${rating} / 5`}
            value={rating}
            onChange={(rating) => {
              setRating(rating);
            }}
          />
        </Box>
        <Button type="submit" colorScheme="gray" fontSize="sm" minW={130}>
          Post
        </Button>
      </HStack>
    </VStack>
  );
};

export default ReviewForm;
