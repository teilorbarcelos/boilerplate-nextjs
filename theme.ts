import { themeConstants } from "@/styles/theme.constants";
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    backgroundColor: string;
  }
}

const theme: DefaultTheme = themeConstants.dark;

export default theme;
