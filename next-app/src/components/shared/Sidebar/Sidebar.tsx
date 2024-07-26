"use client";

import { Stack, VStack } from "@chakra-ui/react";
import React from "react";
import { LogoImage } from "@/components/core/LogoImage/LogoImage";
import { SidebarNavigation } from "./components/SidebarNavigation";

export const Sidebar = () => {
  return (
    <Stack
      as="aside"
      direction={{
        base: "row",
        md: "column",
      }}
      alignItems="flex-start"
      justifyContent="space-between"
      padding={8}
    >
      <Stack
        spacing={16}
        justifyContent="space-between"
        flexGrow={1}
        direction={{
          base: "row",
          md: "column",
        }}
      >
        {/* Logo */}
        <LogoImage width={200} />

        <SidebarNavigation />
      </Stack>
    </Stack>
  );
};
