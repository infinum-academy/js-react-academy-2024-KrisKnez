"use client";

import { swrKeys } from "@/fetchers/swrKeys";
import { authLocalStorage } from "@/utils/authLocalStorage";
import { Button, Heading, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { mutate, useSWRConfig } from "swr";
import { LogoImage } from "../LogoImage/LogoImage";

interface ISidebarItem {
  label: string;
  href: string;
}

const SIDEBAR_ITEMS: Array<ISidebarItem> = [
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
        <LogoImage width={200} />

        {/* Navigation */}
        <VStack spacing={1} alignItems="stretch">
          {SIDEBAR_ITEMS.map(({ label, href }) => {
            const isActive = pathname === href;

            return (
              <Link key={href} href={href}>
                <Button variant={"dark"} isActive={isActive}>
                  {label}
                </Button>
              </Link>
            );
          })}
        </VStack>
      </VStack>

      {/* Logout */}
      <Button
        variant="dark"
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
