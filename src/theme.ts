import { extendTheme } from "@chakra-ui/react";

const themes = {
  styles: {
    global: {
      "html, body": {
        bg: "gray.100",
        padding: "16px",
        lineHeight: "tall",
        fontFamily: `'Inter', sans-serif`,
      },
      a: {
        color: "inherit",
        textDecoration: "none",
      },
      "*": {
        margin: "0",
        padding: "0",
        boxSizing: "border-box",
      },
      button: {
        cursor: "pointer",
      },
    },
  },
};

const theme = extendTheme(themes);
export default theme;
