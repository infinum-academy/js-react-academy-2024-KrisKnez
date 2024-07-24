import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
} from "@chakra-ui/react";
import React from "react";
import { LogoutButton } from "../LogoutButton/LogoutButton";
import { NavigationMenu } from "../NavigationMenu/NavigationMenu";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileDrawer = ({ isOpen, onClose }: MobileDrawerProps) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      variant="purple"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />

        <DrawerBody>
          <NavigationMenu />
        </DrawerBody>

        <DrawerFooter>
          <LogoutButton />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
