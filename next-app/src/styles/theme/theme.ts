import {
  extendTheme,
  ThemeConfig,
} from "@chakra-ui/react";
import { cardTheme } from "./components/card";
import { buttonTheme } from "./components/button";
import { inputTheme } from "./components/input";

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
  headline: "40pt",
  title: "24pt",
  body: "20pt",
  subtitle: "18pt",
  smallCaption: "16pt",
  buttonOrCaption: "14pt",
  note: "12pt",
};
const fontLineHeights = {
  headline: "52pt",
  title: "32pt",
  body: "30pt",
  subtitle: "24pt",
  smallCaption: "22pt",
  buttonOrCaption: "20pt",
  note: "18pt",
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
    Input: inputTheme
  },
}) as ThemeConfig;
