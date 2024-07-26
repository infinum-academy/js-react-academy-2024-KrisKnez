import { NavigationMenu } from "@/components/shared/Sidebar/components/NavigationMenu";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { LogoutButton } from "./LogoutButton";

export const SidebarNavigationMobile = () => {
  const { isOpen, onClose, onToggle } = useDisclosure();

  return (
    <Box hideFrom="md">
      {/* Open Button */}
      <IconButton
        aria-label="open sidebar"
        color={"white"}
        variant={"transparent"}
        fontSize="24px"
        onClick={onToggle}
      >
        <HamburgerIcon />
      </IconButton>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        variant="purple"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody marginTop="80px">
            <NavigationMenu onSelect={onClose} />
          </DrawerBody>

          <DrawerFooter justifyContent="flex-start" marginBottom="50px">
            <LogoutButton />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
