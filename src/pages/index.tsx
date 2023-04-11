import { useTranslation } from "@/hooks/useTranslation";
import { useLanguageStore } from "@/lib/contexts/language";
import { Language } from "@/lib/contexts/language/language.constants";
import { HomeContainer } from "./Home.styles";
import { Button } from "@/components/Button";
import { Theme, useThemeStore } from "@/lib/contexts/theme";

export default function Home() {
  const { themeState, setDark, setLight } = useThemeStore();
  const { language, setLanguage } = useLanguageStore();
  const t = useTranslation();

  const handleChangeLanguage = async () => {
    if (language === Language.PT_BR) return setLanguage(Language.EN);

    setLanguage(Language.PT_BR);
  };

  const handleChangeTheme = async () => {
    if (themeState === Theme.DARK) return setLight();

    setDark();
  };

  return (
    <HomeContainer data-testid="home-page">
      <div className="title">{t("helloWorld")}</div>
      <Button onClick={handleChangeLanguage} data-testid="switch-language-button">{t("switchLanguage")}</Button>
      <Button onClick={handleChangeTheme} data-testid="switch-theme-button">{t("switchTheme")}</Button>
    </HomeContainer>
  );
}
