"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ReviewProvider } from "@/contexts/review/ReviewContext";

import { theme } from "@/theme";
import { AuthProvider } from "@/contexts/auth/AuthContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <ReviewProvider>{children}</ReviewProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}
