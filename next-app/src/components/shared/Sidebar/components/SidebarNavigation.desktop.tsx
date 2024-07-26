import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import { NavigationMenu } from "./NavigationMenu";
import { LogoutButton } from "./LogoutButton";

export const SidebarNavigationDesktop = () => {
  return (
    <VStack hideBelow="md" flexGrow={1} alignItems="flex-start" justifyContent="space-between">
      <NavigationMenu />

      <LogoutButton />
    </VStack>
  );
};
