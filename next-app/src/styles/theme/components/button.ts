import { defineStyleConfig } from "@chakra-ui/react";

export const buttonTheme = defineStyleConfig({
  variants: {
    light: {
      borderRadius: "full",
      padding: "20px 50px",
      fontFamily: "buttonOrCaption",
      fontSize: "buttonOrCaption",
      background: "white",
      color: "purple2",
      minWidth: "144px",
      width: "fit-content",
    },
    dark: {
      borderRadius: "full",
      background: "transparent",
      color: "white",
      _hover: {
        background: "purple2",
      },
      _active: {
        background: "purple2",
      },
    },
  },
});
