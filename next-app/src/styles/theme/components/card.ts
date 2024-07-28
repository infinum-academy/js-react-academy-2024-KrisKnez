import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const light = definePartsStyle({
  container: {
    bg: "white",
    color: "purple2",
  },
});

const dark = definePartsStyle({
  container: {
    bg: "purple2",
    color: "white",
  },
});

const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {
    borderRadius: "24px",
  },
});

export const cardTheme = defineMultiStyleConfig({
  baseStyle,
  variants: { light, dark },
});
