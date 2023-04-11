import { create } from "zustand";

export enum Theme {
  DARK = "dark",
  LIGHT = "light",
}

type ThemeState = {
  themeState: Theme;
  setLight: () => void;
  setDark: () => void;
};

export const useThemeStore = create<ThemeState>((set) => ({
  themeState: Theme.DARK,
  setLight: () => set(() => ({ themeState: Theme.LIGHT })),
  setDark: () => set(() => ({ themeState: Theme.DARK })),
}));
