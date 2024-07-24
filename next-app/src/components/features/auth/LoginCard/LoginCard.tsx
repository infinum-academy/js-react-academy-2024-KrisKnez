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
import { authLocalStorage } from "@/utils/authLocalStorage";
import useSWRMutation from "swr/mutation";
import { mutate } from "swr";
import { IUser } from "@/typings/user";
import { IErrorResponse } from "@/typings/errors";
import { loginFetcher } from "@/fetchers/loginFetcher";
import { LogoImage } from "@/components/core/LogoImage/LogoImage";

export const LoginCard = () => {
  const formId = useId();

  const { trigger, isMutating } = useSWRMutation(
    swrKeys.usersSignIn,
    loginFetcher
  );

  return (
    <Card bg="purple2" p={8}>
      <CardBody>
        <VStack spacing={0}>
          <HStack justifyContent="center" marginBottom={"50px"}>
            <LogoImage width={200} />
          </HStack>
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
