import { FormControl, FormErrorMessage, Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { UseFormRegister } from "react-hook-form";
import { MdPerson } from "react-icons/md";
import { RegistrationFormFields } from "../../RegistrationForm";

interface EmailFieldProps {
  error?: string
  register: UseFormRegister<RegistrationFormFields>
}

export const EmailField = ({error, register}: EmailFieldProps) => {
  return (
    <FormControl isInvalid={Boolean(error)}>
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
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};
