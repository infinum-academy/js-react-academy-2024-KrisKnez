"use client";

import RatingInput from "@/components/shared/RatingInput/RatingInput";
import { Box, Button, Heading, Stack, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";

interface ReviewFormProps {
  addShowReview: (comment: string, rating: number) => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ addShowReview }) => {
  const [rating, setRating] = useState(5);

  return (
    <Stack
      as="form"
      alignItems="flex-start"
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
      <Heading as="h2" size="md">
        Reviews
      </Heading>
      <Textarea
        name="comment"
        required
        placeholder="Add review"
        maxH={200}
        bg="white"
        color="black"
      />
      <Box p={2}>
        <RatingInput
          label={`${rating} / 5`}
          value={rating}
          onChange={(rating) => {
            setRating(rating);
          }}
        />
      </Box>
      <Button type="submit" colorScheme="gray" fontSize="sm">
        Post
      </Button>
    </Stack>
  );
};

export default ReviewForm;
