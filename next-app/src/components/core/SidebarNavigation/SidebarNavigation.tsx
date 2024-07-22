"use client";

import { swrKeys } from "@/fetchers/swrKeys";
import { authLocalStorage } from "@/utils/authLocalStorage";
import { Button, Heading, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { mutate, useSWRConfig } from "swr";

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
        onClick={() => {
          authLocalStorage.setAuthData(null);
          mutate(swrKeys.usersMe, null);
        }}
      >
        Log out
      </Button>
    </VStack>
  );
};
