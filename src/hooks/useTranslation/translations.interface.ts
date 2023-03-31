import { Language } from "@/lib/contexts/language/language.constants";

export interface Translations {
  [key: string]: {
    [Language.EN]: string;
    [Language.PT_BR]: string;
    [Language.DEFAULT]: string;
  };
}
