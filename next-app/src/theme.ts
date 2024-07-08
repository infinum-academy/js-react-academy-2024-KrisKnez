import { extendTheme, ThemeConfig } from "@chakra-ui/react";

export const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: () => ({
      body: {
        bg: "brand.900",
        color: "white",
      },
    }),
  },
  colors: {
    brand: {
      900: "#200050", // Background color
      800: "#371586", // Card background color
    },
  },
  components: {
    Card: {
      baseStyle: {
        borderRadius: "24px", // Card border radius
      },
    },
    Button: {
      baseStyle: {
        borderRadius: "999px", // Button border radius
      },
    },
  },
}) as ThemeConfig;
