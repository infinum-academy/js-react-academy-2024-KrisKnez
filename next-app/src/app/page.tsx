"use client";

import { Spinner, VStack } from "@chakra-ui/react";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { isLoggedIn, useAuthState } from "@/contexts/auth/AuthContext";

export default function Home() {
  const router = useRouter();

  const authState = useAuthState();

  useEffect(() => {
    const loggedIn = isLoggedIn(authState);
    if (loggedIn === true) router.push("/dashboard");
    else if (loggedIn === false) router.push("/auth");
  }, [authState]);

  return (
    <VStack py={16}>
      <Spinner size="xl" />
    </VStack>
  );
}
