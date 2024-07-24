"use client";

import {
  chakra,
  IconButton,
  Stack,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { LogoImage } from "../LogoImage/LogoImage";
import { HamburgerIcon } from "@chakra-ui/icons";
import { MobileDrawer } from "@/components/core/SidebarNavigation/components/MobileDrawer/MobileDrawer";
import { NavigationMenu } from "./components/NavigationMenu/NavigationMenu";
import { LogoutButton } from "./components/LogoutButton/LogoutButton";

export const SidebarNavigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    if (!isMobile) {
      setMobileMenuOpen(false);
    }
  }, [isMobile]);

  return (
    <Stack
      direction={{
        base: "row",
        md: "column",
      }}
      alignItems="flex-start"
      justifyContent="space-between"
      padding={8}
    >
      <VStack spacing={16} alignItems="flex-start">
        {/* Logo */}
        <LogoImage width={200} />

        <chakra.div
          display={{
            base: "none",
            md: "flex",
          }}
        >
          <NavigationMenu />
        </chakra.div>
      </VStack>

      {/* Logout */}
      <chakra.div
        display={{
          base: "none",
          md: "flex",
        }}
      >
        <LogoutButton />
      </chakra.div>

      <IconButton
        display={{
          base: "flex",
          md: "none",
        }}
        aria-label="open sidebar"
        color={"white"}
        variant={"transparent"}
        fontSize="24px"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <HamburgerIcon />
      </IconButton>

      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </Stack>
  );
};
