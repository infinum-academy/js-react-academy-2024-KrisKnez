import { FormControl, FormErrorMessage, Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { UseFormRegister } from "react-hook-form";
import { MdPerson } from "react-icons/md";
import { RegistrationFormFields } from "../../RegistrationForm";

interface PasswordConfirmationFieldProps {
  error?: string
  register: UseFormRegister<RegistrationFormFields>
}

export const PasswordConfirmationField = ({error, register}: PasswordConfirmationFieldProps) => {
  return (
    <FormControl isInvalid={Boolean(error)}>
      <InputGroup variant="dark">
        <InputLeftElement pointerEvents="none">
          <Icon as={MdPerson} boxSize={6} />
        </InputLeftElement>
        <Input
          type="password"
          placeholder="Repeat Password"
          {...register("passwordConfirmation", {
            required: "Password confirmation is required",
          })}
        />
      </InputGroup>
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};
