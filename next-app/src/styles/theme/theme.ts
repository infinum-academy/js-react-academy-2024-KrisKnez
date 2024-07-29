import { extendTheme, Modal, ThemeConfig } from "@chakra-ui/react";
import { cardTheme } from "./components/card";
import { buttonTheme } from "./components/button";
import { inputTheme } from "./components/input";
import { drawerTheme } from "./components/drawer";

import { fonts } from "./foundations/fonts";
import { colors } from "./foundations/colors";
import { fontSizes } from "./foundations/font-sizes";
import { fontLineHeights } from "./foundations/font-line-heights";
import { modalTheme } from "./components/modal";
import { progressTheme } from "./components/progress";

export const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  styles: {
    global: () => ({
      body: {
        bg: "darkPurple",
        color: "white",
        fontFamily: "Roboto, sans-serif",
      },
    }),
  },
  colors,
  fonts,
  fontSizes,
  fontLineHeights,
  components: {
    Card: cardTheme,
    Button: buttonTheme,
    Input: inputTheme,
    Drawer: drawerTheme,
    Modal: modalTheme,
    Progress: progressTheme,
  },
}) as ThemeConfig;
