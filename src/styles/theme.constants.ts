import { DefaultTheme } from "styled-components";

interface ThemesConstantsProps {
  dark: DefaultTheme;
  light: DefaultTheme;
}

const colorVariables = {
    COLOR001: "#19202E",
    COLOR002: "#FFFFFF",
};

export const themeConstants: ThemesConstantsProps = {
  dark: {
    backgroundColor: colorVariables.COLOR001,
  },
  light: {
    backgroundColor: colorVariables.COLOR002,
  },
};
