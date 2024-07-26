import {
  extendTheme,
  ThemeConfig,
} from "@chakra-ui/react";
import { cardTheme } from "./components/card";
import { buttonTheme } from "./components/button";
import { inputTheme } from "./components/input";
import { drawerTheme } from "./components/drawer";

const colors = {
  darkPurple: "#1B004C",
  purple: "#371687",
  error: "#FF2498",
  lightPurple: "#8D5CE5",
  white: "#FFFFFF",
  purple2: "#371687",
};

const fonts = {
  headline: "Roboto, sans-serif",
  title: "Roboto, sans-serif",
  body: "Roboto, sans-serif",
  subtitle: "Roboto, sans-serif",
  smallCaption: "Roboto, sans-serif",
  buttonOrCaption: "Roboto, sans-serif",
  note: "Roboto, sans-serif",
};
const fontSizes = {
  headline: "40px",
  title: "24px",
  body: "20ptx",
  subtitle: "18px",
  smallCaption: "16px",
  buttonOrCaption: "14px",
  note: "12px",
};
const fontLineHeights = {
  headline: "52px",
  title: "32px",
  body: "30px",
  subtitle: "24px",
  smallCaption: "22px",
  buttonOrCaption: "20px",
  note: "18px",
};
const fontWeight = {
  regular: 400,
  bold: 700,
};

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
  fontWeight,
  components: {
    Card: cardTheme,
    Button: buttonTheme,
    Input: inputTheme,
    Drawer: drawerTheme
  },
}) as ThemeConfig;
