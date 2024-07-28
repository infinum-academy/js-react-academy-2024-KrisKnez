"use client";

import React, { useId } from "react";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  chakra,
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
import { LogoImage } from "@/components/core/LogoImage/LogoImage";

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
    <Card bg="purple2" p={8}>
      <CardBody>
        <VStack spacing={0}>
          <HStack justifyContent="center" marginBottom={"50px"}>
            <LogoImage width={200} />
          </HStack>
          <LoginForm
            formId={formId}
            onSubmit={async (data) => {
              trigger(data);
            }}
          />
          <Button
            marginTop="58px"
            type="submit"
            form={formId}
            isDisabled={isMutating}
            variant="light"
          >
            <chakra.div>LOG IN</chakra.div>
          </Button>
          <Text marginTop="28px" color="white" fontSize="sm" textAlign="center">
            Don&apos;t have an account?{" "}
            <Link href="/auth/register" fontWeight={600}>
              Register
            </Link>
          </Text>
        </VStack>
      </CardBody>
    </Card>
  );
};
