import { AuthRedirect } from "@/components/core/AuthRedirect/AuthRedirect";
import { Sidebar } from "@/components/shared/Sidebar/Sidebar";
import { Box, Container, HStack, Stack } from "@chakra-ui/react";
import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <AuthRedirect to="/auth/login" condition="isLoggedIn">
      <Stack
        direction={{
          base: "column",
          md: "row",
        }}
        spacing={4}
        alignItems="stretch"
        height="100%"
      >
        <Sidebar />
        <Box flexGrow={1} overflowY="auto">
          <Container maxW="container.2xl" padding={8}>
            {children}
          </Container>
        </Box>
      </Stack>
    </AuthRedirect>
  );
}
