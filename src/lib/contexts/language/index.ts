import { create } from "zustand";
import { Language } from "./language.constants";

interface LanguageStore {
  language: Language;
  // eslint-disable-next-line no-unused-vars
  setLanguage: (language: Language) => void;
}

export const useLanguageStore = create<LanguageStore>((set) => ({
  language: Language.PT_BR,
  setLanguage: (language: Language) => set({ language }),
}));
