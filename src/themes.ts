import { DefaultTheme as DefaultThemeProps } from "styled-components";

export enum Font {
  GilroyLight = "Gilroy-Light",
  GilroyMedium = "Gilroy-Medium",
  GilroyBold = "Gilroy-Bold",
  GilroySemiBold = "Gilroy-SemiBold",
  GilroyExtraBold = "Gilroy-ExtraBold",
  GilroyRegular = "Gilroy-Regular",
}

export const DefaultConfigs = {
  typography: {
    fontFamily: {
      light: Font.GilroyLight,
      medium: Font.GilroyMedium,
      regular: Font.GilroyRegular,
      semiBold: Font.GilroySemiBold,
      bold: Font.GilroyBold,
      extraBold: Font.GilroyExtraBold,
    },
    sizes: {
      h1: {
        size: 38,
        lineHeight: 44,
      },
      h2: {
        size: 32,
        lineHeight: 36,
      },
      h3: {
        size: 24,
        lineHeight: 30,
      },
      large: {
        size: 18,
        lineHeight: 26,
      },
      regular: {
        size: 16,
        lineHeight: 18,
      },
      small: {
        size: 14,
        lineHeight: 20,
      },
    },
  },
};

export const SparxColors = {
  primary: "#8aecff",
  primaryDark: "#5dd9f5",
  primaryLight: "#b3f0ff",
  accent: "#00d4ff",
  gradient: {
    primary: ["#8aecff", "#5dd9f5"],
    secondary: ["#b3f0ff", "#8aecff"],
    accent: ["#00d4ff", "#8aecff"],
  },
};

export const DarkTheme: DefaultThemeProps = {
  ...DefaultConfigs,
  dark: true,
  colors: {
    primary: SparxColors.primary,
    text: "#ffffff",
    background: "#0a1a2e",
    secondaryBackground: "#16213e",
    border: "#16213e",
  },
};

export const LightTheme: DefaultThemeProps = {
  ...DefaultConfigs,
  dark: false,
  colors: {
    primary: SparxColors.primary,
    text: "#0a1a2e",
    background: "#ffffff",
    secondaryBackground: "#f0fbff",
    border: "#e6f9ff",
  },
};

export const DefaultTheme = LightTheme;
