import { SidebarNavigation } from "@/components/shared/SidebarNavigation/SidebarNavigation";
import { Box, Container, HStack } from "@chakra-ui/react";
import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <HStack spacing={4} alignItems="stretch" height="100%">
      <SidebarNavigation />
      <Box flexGrow={1} overflowY="auto">
        <Container maxW="container.xl" padding={8}>
          {children}
        </Container>
      </Box>
    </HStack>
  );
}
