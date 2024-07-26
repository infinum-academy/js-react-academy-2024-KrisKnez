import { Button, Link, VStack } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import React from "react";

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

export const NavigationMenu = () => {
  const pathname = usePathname();

  return (
    <VStack
      spacing={1}
      alignItems="stretch"
    >
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
  );
};
