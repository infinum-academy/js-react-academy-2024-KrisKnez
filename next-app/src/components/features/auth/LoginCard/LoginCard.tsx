"use client";

import React, { useId } from "react";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

import { Link } from "@chakra-ui/next-js";

import { LoginForm } from "../LoginForm/LoginForm";
import toast from "react-hot-toast";
import { swrKeys } from "@/fetchers/swrKeys";
import useSWRMutation from "swr/mutation";
import { mutate } from "swr";
import { mutator } from "@/fetchers/mutator";

export const LoginCard = () => {
  const formId = useId();

  const { trigger, isMutating } = useSWRMutation(swrKeys.usersSignIn, mutator, {
    onSuccess(data, key, config) {
      mutate(swrKeys.usersMe, data, {
        revalidate: false,
      });
      toast.success("Successfully logged in!");
    },
    onError(err, key, config) {
      err.errors?.map((errorMessage: string) => toast.error(errorMessage));
    },
    throwOnError: false,
  });

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
          <LoginForm
            formId={formId}
            onSubmit={async (data) => {
              trigger(data);
            }}
          />
          <Button
            type="submit"
            form={formId}
            size="lg"
            fontSize="small"
            color="brand.800"
            isDisabled={isMutating}
          >
            LOGIN
          </Button>
          <Text color="white" fontSize="sm" textAlign="center">
            Don&apos;t have an account?{" "}
            <Link href="/auth/register" fontWeight={600}>
              Sign Up
            </Link>
          </Text>
        </VStack>
      </CardBody>
    </Card>
  );
};
