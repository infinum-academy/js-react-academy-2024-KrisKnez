import {
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import React from "react";
import { UseFormRegister } from "react-hook-form";
import { RegistrationFormFields } from "../../RegistrationForm";
import { PasswordInputGroup } from "@/components/shared/PasswordInputGroup/PasswordInputGroup";

interface PasswordConfirmationFieldProps {
  error?: string;
  register: UseFormRegister<RegistrationFormFields>;
}

export const PasswordConfirmationField = ({
  error,
  register,
}: PasswordConfirmationFieldProps) => {
  return (
    <FormControl isInvalid={Boolean(error)}>
      <PasswordInputGroup
        inputProps={{
          ...register("passwordConfirmation", {
            required: "Password confirmation is required",
          }),
          placeholder: "Repeat Password",
        }}
      />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};
