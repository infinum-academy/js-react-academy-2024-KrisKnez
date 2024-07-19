"use client";

import { authLogout, useAuthDispatch } from "@/contexts/auth/AuthContext";
import { Button, Heading, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface ISidebarItem {
  label: string;
  href: string;
}

const SIDEBAR_ITEMS = [
  {
    label: "All shows",
    href: "/dashboard/all-shows",
  },
  {
    label: "Top rated",
    href: "/dashboard/top-rated",
  },
  {
    label: "Profile",
    href: "/dashboard/profile",
  },
];

export const SidebarNavigation = () => {
  const pathname = usePathname();

  const authDispatch = useAuthDispatch();

  return (
    <VStack alignItems="flex-start" justifyContent="space-between" padding={8}>
      <VStack spacing={16} alignItems="flex-start">
        {/* Logo */}
        <Heading size="md">TV SHOW APP</Heading>

        {/* Navigation */}
        <VStack spacing={1} alignItems="stretch">
          {SIDEBAR_ITEMS.map(({ label, href }) => {
            const isActive = pathname === href;

            return (
              <Link key={href} href={href}>
                <Button
                  variant={isActive ? "solid" : "ghost"}
                  colorScheme="white"
                  bg={isActive ? "brand.800" : "transparent"}
                  _hover={{
                    bg: "brand.800",
                  }}
                >
                  {label}
                </Button>
              </Link>
            );
          })}
        </VStack>
      </VStack>

      {/* Logout */}
      <Button
        variant="ghost"
        colorScheme="white"
        _hover={{
          bg: "brand.800",
        }}
        onClick={() => authDispatch(authLogout())}
      >
        Log out
      </Button>
    </VStack>
  );
};
