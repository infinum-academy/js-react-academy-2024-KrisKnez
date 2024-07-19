"use client";

import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { RegistrationForm } from "../RegistrationForm/RegistrationForm";
import { Link } from "@chakra-ui/next-js";

export const RegistrationCard = () => {
  return (
    <Card bg="brand.800" p={8}>
      <CardHeader>
        {/* Logo */}
        <HStack justifyContent="center">
          <Heading size="md" color="white">
            TV SHOW APP
          </Heading>
        </HStack>
      </CardHeader>
      <CardBody>
        <VStack spacing={8} alignItems="stretch">
          <RegistrationForm onSubmit={(data) => console.log(data)} />
          <Text color="white" fontSize="sm" textAlign="center">
            Already have an account?{" "}
            <Link href="/auth/login" fontWeight={600}>
              Login
            </Link>
          </Text>
        </VStack>
      </CardBody>
    </Card>
  );
};
