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
import { authLocalStorage } from "@/utils/authLocalStorage";
import useSWRMutation from "swr/mutation";
import { mutate } from "swr";
import { IUser } from "@/typings/user";
import { IErrorResponse } from "@/typings/errors";
import { ILoginFetcherRequest, loginFetcher } from "@/fetchers/loginFetcher";

export const LoginCard = () => {
  const formId = useId();

  const { trigger, isMutating } = useSWRMutation<
    any,
    any,
    string,
    ILoginFetcherRequest
  >(swrKeys.usersSignIn, (key, options) => loginFetcher(key, options));

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
            onSubmit={async ({ email, password }) => {
              try {
                const result = await trigger({
                  email,
                  password,
                });

                authLocalStorage.setAuthData(result.authData);
                mutate<IUser>(swrKeys.usersMe, result.user);

                toast.success("Successfully logged in!");
              } catch (e) {
                if ((e as IErrorResponse).errors) {
                  const errorResponse = e as IErrorResponse;
                  errorResponse.errors.map((errorMessage) =>
                    toast.error(errorMessage)
                  );
                }
              }
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
