import { FormControl, FormErrorMessage, FormHelperText, Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { UseFormRegister } from "react-hook-form";
import { MdLock, MdPerson } from "react-icons/md";
import { RegistrationFormFields } from "../../RegistrationForm";

interface PasswordFieldProps {
  error?: string
  register: UseFormRegister<RegistrationFormFields>
}

export const PasswordField = ({error, register}: PasswordFieldProps) => {
  return (
    <FormControl isInvalid={Boolean(error)}>
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
      <FormErrorMessage>{error}</FormErrorMessage>
      {!error && (
        <FormHelperText color="white">At least 8 characters</FormHelperText>
      )}
    </FormControl>
  );
};
