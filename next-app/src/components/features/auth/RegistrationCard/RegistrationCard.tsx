"use client";

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
import React, { useId } from "react";
import { RegistrationForm } from "../RegistrationForm/RegistrationForm";
import { Link } from "@chakra-ui/next-js";
import useSWRMutation from "swr/mutation";
import { swrKeys } from "@/fetchers/swrKeys";
import { mutator } from "@/fetchers/mutator";
import toast from "react-hot-toast";
import { IErrorResponse } from "@/typings/errors";
import { LogoImage } from "@/components/core/LogoImage/LogoImage";

export const RegistrationCard = () => {
  const formId = useId();

  const { trigger, isMutating } = useSWRMutation(swrKeys.users, mutator);

  return (
    <Card bg="purple2" p={8}>
      <CardBody>
        <VStack spacing={0}>
          <HStack justifyContent="center" marginBottom="50px">
            <LogoImage width={200} />
          </HStack>
          <RegistrationForm
            formId={formId}
            onSubmit={async (data) => {
              try {
                await trigger(data);

                toast.success("Successfully signed up!");
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
            isDisabled={isMutating}
            variant="light"
            marginTop="58px"
          >
            SIGN UP
          </Button>
          <Text color="white" fontSize="sm" textAlign="center" marginTop="28px">
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
