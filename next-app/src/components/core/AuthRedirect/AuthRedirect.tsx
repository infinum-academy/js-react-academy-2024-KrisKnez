"use client";

import { isLoggedIn, useAuthState } from "@/contexts/auth/AuthContext";
import { Spinner, VStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

interface AuthRedirectProps {
  condition: "isLoggedIn" | "isNotLoggedIn";
  children: React.ReactNode;
}

export const AuthRedirect = ({ condition, children }: AuthRedirectProps) => {
  const router = useRouter();

  const authState = useAuthState();

  const loggedIn = isLoggedIn(authState);
  const redirectToLogin = condition === "isLoggedIn" && loggedIn === false;
  const redirectToDashboard =
    condition === "isNotLoggedIn" && loggedIn === true;

  useEffect(() => {
    if (redirectToLogin) router.push("/auth");
    else if (redirectToDashboard) router.push("/dashboard");
  }, [redirectToDashboard, redirectToLogin, router]);

  if (loggedIn === null || redirectToLogin || redirectToDashboard)
    return (
      <VStack py={16}>
        <Spinner size="xl" />
      </VStack>
    );

  return children;
};
