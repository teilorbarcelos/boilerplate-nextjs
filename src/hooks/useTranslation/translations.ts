import { Translations } from "@/hooks/useTranslation/translations.interface";
import { Language } from "@/lib/contexts/language/language.constants";

export const translations: Translations = {
  helloWorld: {
    [Language.EN]: "Hello world!",
    [Language.PT_BR]: "Olá Mundo!",
  },
  login: {
    [Language.EN]: "SignIn",
    [Language.PT_BR]: "Login",
  },
  switchLanguage: {
    [Language.EN]: "Switch Language",
    [Language.PT_BR]: "Alternar Idioma",
  }
};
