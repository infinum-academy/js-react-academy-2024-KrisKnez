import React from "react";
import { SidebarNavigationMobile } from "./SidebarNavigation.mobile";
import { SidebarNavigationDesktop } from "./SidebarNavigation.desktop";
import { Box } from "@chakra-ui/react";

export const SidebarNavigation = () => {
  return (
    <>
      <SidebarNavigationMobile />
      <SidebarNavigationDesktop />
    </>
  );
};
