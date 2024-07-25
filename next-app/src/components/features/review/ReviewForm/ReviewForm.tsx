"use client";

import RatingInput from "@/components/shared/RatingInput/RatingInput";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  HStack,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useForm, UseFormReturn } from "react-hook-form";

interface ReviewFormFields {
  comment: string;
  rating: number;
}

interface ReviewFormProps {
  onSubmit: (
    form: UseFormReturn<ReviewFormFields, any, undefined>,
    data: ReviewFormFields
  ) => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ onSubmit }) => {
  const form = useForm<ReviewFormFields>({
    defaultValues: {
      comment: "",
      rating: 5,
    },
  });
  const { handleSubmit, watch, setValue, register, formState } = form;

  const rating = watch("rating");

  return (
    <VStack
      as="form"
      alignItems="stretch"
      spacing={6}
      onSubmit={handleSubmit((data) => onSubmit(form, data))}
    >
      <FormControl isInvalid={Boolean(formState.errors.comment)}>
        <Textarea
          placeholder="Add review"
          maxH={200}
          bg="white"
          color="black"
          borderRadius={24}
          padding={4}
          {...register("comment", {
            required: "This field is required",
          })}
        />
        <FormErrorMessage>{formState.errors.comment?.message}</FormErrorMessage>
      </FormControl>
      <HStack alignItems="flex-start" justifyContent="space-between">
        <Box p={2}>
          <RatingInput
            label={`${rating} / 5`}
            value={rating}
            onChange={(rating) => setValue("rating", rating)}
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
