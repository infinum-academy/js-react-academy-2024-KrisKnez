import { progressAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  filledTrack: {
    bg: "lightPurple",
  },
  track: {
    bg: "white",
    borderRadius: "full",
  },
});

export const progressTheme = defineMultiStyleConfig({
  baseStyle,
});
