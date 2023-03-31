import { useLanguageStore } from "@/lib/contexts/language";
import { Language } from "@/lib/contexts/language/language.constants";
import { act, renderHook } from "@testing-library/react";

describe("useLanguageStore", () => {
  test("initial language is Portuguese", () => {
    const { result } = renderHook(() => useLanguageStore());
    expect(result.current.language).toBe(Language.PT_BR);
  });

  test("setLanguage updates the language", () => {
    const { result } = renderHook(() => useLanguageStore());
    const { setLanguage } = result.current;

    act(() => {
      setLanguage(Language.EN);
    });

    expect(result.current.language).toBe(Language.EN);
  });
});
