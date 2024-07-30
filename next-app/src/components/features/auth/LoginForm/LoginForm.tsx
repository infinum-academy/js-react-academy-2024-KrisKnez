"use client";

import { PasswordInputGroup } from "@/components/shared/PasswordInputGroup/PasswordInputGroup";
import {
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
import { MdPerson } from "react-icons/md";

interface LoginFormFields {
  email: string;
  password: string;
}

interface LoginFormProps {
  formId: string;
  onSubmit: (data: LoginFormFields) => void;
}

export const LoginForm = ({ formId, onSubmit }: LoginFormProps) => {
  const { handleSubmit, register, formState } = useForm<LoginFormFields>();

  const emailField = (
    <FormControl isInvalid={Boolean(formState.errors.email)}>
      <InputGroup variant="dark">
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
      <FormErrorMessage>{formState.errors.email?.message}</FormErrorMessage>
    </FormControl>
  );

  const passwordField = (
    <FormControl isInvalid={Boolean(formState.errors.password)}>
      <PasswordInputGroup
        {...register("password", {
          required: "Password is required",
        })}
      />
      <FormErrorMessage>{formState.errors.password?.message}</FormErrorMessage>
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
