import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import React from "react";
import { UseFormRegister } from "react-hook-form";
import { RegistrationFormFields } from "../../RegistrationForm";
import { PasswordInputGroup } from "@/components/shared/PasswordInputGroup/PasswordInputGroup";

interface PasswordFieldProps {
  error?: string;
  register: UseFormRegister<RegistrationFormFields>;
}

export const PasswordField = ({ error, register }: PasswordFieldProps) => {
  return (
    <FormControl isInvalid={Boolean(error)}>
      <PasswordInputGroup
        inputProps={{
          ...register("password", {
            required: "Password is required",
            validate: (value) =>
              value.length >= 8 || "Password must be at least 8 characters",
          }),
        }}
      />
      <FormErrorMessage>{error}</FormErrorMessage>
      {!error && (
        <FormHelperText color="white">At least 8 characters</FormHelperText>
      )}
    </FormControl>
  );
};
