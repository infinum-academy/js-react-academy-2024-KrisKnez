import { AuthRedirect } from "@/components/core/AuthRedirect/AuthRedirect";
import { SidebarNavigation } from "@/components/core/SidebarNavigation/SidebarNavigation";
import { Box, Container, HStack, Stack } from "@chakra-ui/react";
import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <AuthRedirect to="/auth" condition="isLoggedIn">
      <Stack
        direction={{
          base: "column",
          md: "row",
        }}
        spacing={4}
        alignItems="stretch"
        height="100%"
      >
        <SidebarNavigation />
        <Box flexGrow={1} overflowY="auto">
          <Container maxW="container.xl" padding={8}>
            {children}
          </Container>
        </Box>
      </Stack>
    </AuthRedirect>
  );
}
