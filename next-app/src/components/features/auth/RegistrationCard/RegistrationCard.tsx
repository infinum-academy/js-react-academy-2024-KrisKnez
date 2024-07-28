"use client";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  HStack,
  Text,
  Toast,
  VStack,
} from "@chakra-ui/react";
import React, { useId } from "react";
import { RegistrationForm } from "../RegistrationForm/RegistrationForm";
import { Link } from "@chakra-ui/next-js";
import useSWRMutation from "swr/mutation";
import { swrKeys } from "@/fetchers/swrKeys";
import { mutator } from "@/fetchers/mutator";
import toast from "react-hot-toast";

export const RegistrationCard = () => {
  const formId = useId();

  const { trigger, isMutating } = useSWRMutation(swrKeys.users, mutator);

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
          <RegistrationForm
            formId={formId}
            onSubmit={async (data) => {
              try {
                await trigger(data);

                toast.success("Successfully signed up!");
              } catch (e) {
                if (e instanceof Error)
                  e.message
                    .split(", ")
                    .map((errorMessage) => toast.error(errorMessage));
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
            SIGN UP
          </Button>
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
