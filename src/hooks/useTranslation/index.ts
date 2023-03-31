import { useLanguageStore } from "@/lib/contexts/language";
import { translations } from "@/hooks/useTranslation/translations";

export function useTranslation() {
  const { language } = useLanguageStore();

  return (key: string): string => {
    return translations[key][language];
  };
}
