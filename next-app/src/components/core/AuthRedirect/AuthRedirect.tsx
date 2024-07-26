"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import useSWR from "swr";
import { swrKeys } from "@/fetchers/swrKeys";
import { fetcher } from "@/fetchers/fetcher";
import { Spinner, VStack } from "@chakra-ui/react";
import { useUser } from "@/hooks/users";

interface AuthRedirectProps {
  to: string;
  condition: "isLoggedIn" | "isNotLoggedIn";
  children?: React.ReactNode;
}

export const AuthRedirect = ({
  to,
  condition,
  children,
}: AuthRedirectProps) => {
  const router = useRouter();
  const { isLoading, data } = useUser();
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    if (isLoading) return;

    if (condition === "isNotLoggedIn" && data) {
      router.push(to);
    } else if (condition === "isLoggedIn" && !data) {
      router.push(to);
    } else {
      setShowSpinner(false);
    }
  }, [isLoading, data, condition, router, to]);

  if (showSpinner)
    return (
      <VStack py={16}>
        <Spinner size="xl" />
      </VStack>
    );

  return <>{children}</>;
};
