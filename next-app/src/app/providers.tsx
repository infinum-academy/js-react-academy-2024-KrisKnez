"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ReviewProvider } from "@/contexts/review/ReviewContext";

import { theme } from "@/theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <ReviewProvider>{children}</ReviewProvider>
    </ChakraProvider>
  );
}
