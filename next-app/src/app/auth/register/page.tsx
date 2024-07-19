import React from "react";
import { Container } from "@chakra-ui/react";
import { RegistrationCard } from "@/components/features/auth/RegistrationCard/RegistrationCard";

const RegisterPage = () => {
  return (
    <Container maxHeight="100%">
      <RegistrationCard />
    </Container>
  );
};

export default RegisterPage;
