import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const dark = definePartsStyle({
  element: {
    color: "white",
    height: "56px",
  },
  field: {
    height: "56px",
    border: "2px solid",
    borderColor: "white",
    background: "purple",
    borderRadius: "full",
    color: "white",
    _placeholder: {
      color: "white",
    },
    _invalid: {
      borderColor: "error",
    },
  },
  group: {},
});

export const inputTheme = defineMultiStyleConfig({
  variants: { dark },
});
