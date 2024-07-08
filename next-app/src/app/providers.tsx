"use client";

import { ReviewProvider } from "@/contexts/review/ReviewContext";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <ReviewProvider>{children}</ReviewProvider>
    </ChakraProvider>
  );
}
