import { useTranslation } from "@/hooks/useTranslation";
import { useLanguageStore } from "@/lib/contexts/language";
import { Language } from "@/lib/contexts/language/language.constants";

export default function TranslationTest() {
  const { language, setLanguage } = useLanguageStore();
  const t = useTranslation();

  const handleChangeLanguage = async () => {
    if(language === Language.PT_BR) return setLanguage(Language.EN);

    setLanguage(Language.PT_BR);
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="text-3xl font-bold underline max-w-max">{t("helloWorld")}</div>
      <button onClick={handleChangeLanguage} className="font-bold">
        {t("switchLanguage")}
      </button>
    </div>
  );
}
