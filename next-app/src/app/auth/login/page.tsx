import React from "react";
import { Container } from "@chakra-ui/react";
import { LoginCard } from "@/components/features/auth/LoginCard/LoginCard";

const LoginPage = () => {
  return (
    <Container maxHeight="100%">
      <LoginCard />
    </Container>
  );
};

export default LoginPage;
