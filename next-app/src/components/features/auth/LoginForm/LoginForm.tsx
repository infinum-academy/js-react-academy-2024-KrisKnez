"use client";

import {
  Button,
  chakra,
  FormControl,
  FormErrorMessage,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { MdLock, MdPerson } from "react-icons/md";

interface LoginFormFields {
  email: string;
  password: string;
}

interface LoginFormProps {
  formId: string
  onSubmit: (data: LoginFormFields) => void;
}

export const LoginForm = ({ formId, onSubmit }: LoginFormProps) => {
  const { handleSubmit, register, formState } = useForm<LoginFormFields>();

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
          })}
        />
      </InputGroup>
      {formState.errors.password && (
        <FormErrorMessage>{formState.errors.password.message}</FormErrorMessage>
      )}
    </FormControl>
  );

  return (
    <chakra.form id={formId} onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={8}>
        {/* Email field */}
        {emailField}

        {/* Password field */}
        {passwordField}
      </VStack>
    </chakra.form>
  );
};
