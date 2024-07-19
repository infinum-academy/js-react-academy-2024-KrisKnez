"use client";

import React from "react";

import {
  Button,
  chakra,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { MdLock, MdPerson } from "react-icons/md";

interface RegistrationFormFields {
  email: string;
  password: string;
  passwordConfirmation: string;
}

interface RegistrationFormProps {
  onSubmit: (data: RegistrationFormFields) => void;
}

export const RegistrationForm = ({ onSubmit }: RegistrationFormProps) => {
  const { handleSubmit, register, formState } =
    useForm<RegistrationFormFields>();

  const emailField = (
    <FormControl isInvalid={Boolean(formState.errors.email)}>
      <InputGroup color="white" size="lg">
        <InputLeftElement pointerEvents="none">
          <Icon as={MdPerson} boxSize={6} />
        </InputLeftElement>
        <Input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
          })}
        />
      </InputGroup>
      {formState.errors.email && (
        <FormErrorMessage>{formState.errors.email.message}</FormErrorMessage>
      )}
    </FormControl>
  );

  const passwordField = (
    <FormControl isInvalid={Boolean(formState.errors.password)}>
      <InputGroup color="white" size="lg">
        <InputLeftElement pointerEvents="none">
          <Icon as={MdLock} boxSize={6} />
        </InputLeftElement>
        <Input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
            validate: (value) =>
              value.length >= 8 || "Password must be at least 8 characters",
          })}
        />
      </InputGroup>
      {(formState.errors.password && (
        <FormErrorMessage>{formState.errors.password.message}</FormErrorMessage>
      )) || (
        <FormHelperText color="white">At least 8 characters</FormHelperText>
      )}
    </FormControl>
  );

  const passwordConfirmationField = (
    <FormControl isInvalid={Boolean(formState.errors.passwordConfirmation)}>
      <InputGroup color="white" size="lg">
        <InputLeftElement pointerEvents="none">
          <Icon as={MdLock} boxSize={6} />
        </InputLeftElement>
        <Input
          type="password"
          placeholder="Repeat Password"
          {...register("passwordConfirmation", {
            required: "Password confirmation is required",
          })}
        />
      </InputGroup>
      {formState.errors.passwordConfirmation && (
        <FormErrorMessage>
          {formState.errors.passwordConfirmation.message}
        </FormErrorMessage>
      )}
    </FormControl>
  );

  return (
    <chakra.form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={8}>
        {/* Email field */}
        {emailField}

        {/* Password field */}
        {passwordField}

        {/* Password confirmation field */}
        {passwordConfirmationField}

        {/* Submit button */}
        <Button type="submit" size="lg" fontSize="small" color="brand.800">
          SIGN UP
        </Button>
      </VStack>
    </chakra.form>
  );
};
