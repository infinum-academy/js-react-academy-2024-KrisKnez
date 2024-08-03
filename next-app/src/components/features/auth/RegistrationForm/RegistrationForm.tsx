"use client";

import React from "react";

import {
  chakra,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { EmailField } from "./components/EmailField/EmailField";
import { PasswordField } from "./components/PasswordField/PasswordField";
import { PasswordConfirmationField } from "./components/PasswordConfirmationField/PasswordConfirmationField";

export interface RegistrationFormFields {
  email: string;
  password: string;
  passwordConfirmation: string;
}

interface RegistrationFormProps {
  formId: string;
  onSubmit: (data: RegistrationFormFields) => void;
}

export const RegistrationForm = ({
  formId,
  onSubmit,
}: RegistrationFormProps) => {
  const { handleSubmit, register, formState } =
    useForm<RegistrationFormFields>();

  return (
    <chakra.form id={formId} onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={8}>
        {/* Email field */}
        <EmailField
          error={formState.errors.email?.message}
          register={register}
        />

        {/* Password field */}
        <PasswordField
          error={formState.errors.password?.message}
          register={register}
        />

        {/* Password confirmation field */}
        <PasswordConfirmationField
          error={formState.errors.passwordConfirmation?.message}
          register={register}
        />
      </VStack>
    </chakra.form>
  );
};
