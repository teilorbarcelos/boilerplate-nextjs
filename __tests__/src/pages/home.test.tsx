import {
  act,
  fireEvent,
  render,
  renderHook,
  screen,
} from "@testing-library/react";
import Home from "@/pages/index";
import { Language } from "@/lib/contexts/language/language.constants";
import { translations } from "@/hooks/useTranslation/translations";
import { Theme, useThemeStore } from "@/lib/contexts/theme";

describe("Home", () => {
  test("renders helloWorld text in Portuguese by default", () => {
    render(<Home />);

    const helloWorldText = screen.getByText(
      translations.helloWorld[Language.PT_BR]
    );

    expect(helloWorldText).toBeInTheDocument();
  });

  test("changes helloWorld text to English when clicking the button", async () => {
    render(<Home />);

    const switchLanguageButton = screen.getByText(
      translations.switchLanguage[Language.PT_BR]
    );
    fireEvent.click(switchLanguageButton);

    await act(async () => {
      const helloWorldText = await screen.findByText(
        translations.helloWorld[Language.EN]
      );
      expect(helloWorldText).toBeInTheDocument();
    });
  });

  test("changes button text to Portuguese when clicking the button", async () => {
    render(<Home />);

    const switchLanguageButton = screen.getByText(
      translations.switchLanguage[Language.EN]
    );
    fireEvent.click(switchLanguageButton);

    await act(async () => {
      const switchLanguageButtonText = await screen.findByText(
        translations.switchLanguage[Language.PT_BR]
      );
      expect(switchLanguageButtonText).toBeInTheDocument();
    });
  });

  test("changes theme when theme button is clicked", () => {
    const { result } = renderHook(() => useThemeStore());
    const { getByTestId } = render(<Home />);
    const themeButton = getByTestId("switch-theme-button");
    expect(result.current.themeState).toBe(Theme.DARK);
    fireEvent.click(themeButton);
    expect(result.current.themeState).toBe(Theme.LIGHT);
    fireEvent.click(themeButton);
    expect(result.current.themeState).toBe(Theme.DARK);
  });
});
