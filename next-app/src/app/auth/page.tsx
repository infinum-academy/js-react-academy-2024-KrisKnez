"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Spinner, VStack } from "@chakra-ui/react";

const AuthPage = () => {
  //Redirect to login page

  const router = useRouter();

  router.push("/auth/login");

  return (
    <VStack py={16}>
      <Spinner size="xl" />
    </VStack>
  );
};

export default AuthPage;
