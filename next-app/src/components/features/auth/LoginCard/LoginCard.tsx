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
import { LoginForm } from "../LoginForm/LoginForm";
import { Link } from "@chakra-ui/next-js";

export const LoginCard = () => {
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
          <LoginForm onSubmit={(data) => console.log(data)} />
          <Text color="white" fontSize="sm" textAlign="center">
            Don't have an account?{" "}
            <Link href="/auth/register" fontWeight={600}>
              Sign Up
            </Link>
          </Text>
        </VStack>
      </CardBody>
    </Card>
  );
};
