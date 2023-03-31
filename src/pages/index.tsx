import { useTranslation } from "@/hooks/useTranslation";
import { useLanguageStore } from "@/lib/contexts/language";
import { Language } from "@/lib/contexts/language/language.constants";
import { HomeContainer } from "./Home.styles";
import { Button } from "@/components/Button";

export default function Home() {
  const { language, setLanguage } = useLanguageStore();
  const t = useTranslation();

  const handleChangeLanguage = async () => {
    if (language === Language.PT_BR) return setLanguage(Language.EN);

    setLanguage(Language.PT_BR);
  };

  return (
    <HomeContainer>
      <div className="title">{t("helloWorld")}</div>
      <Button onClick={handleChangeLanguage}>{t("switchLanguage")}</Button>
    </HomeContainer>
  );
}
