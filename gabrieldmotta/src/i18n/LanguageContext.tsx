import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { translations, defaultLocale, type Locale } from "./translations";

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: <T = string>(path: string) => T;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

function getByPath(obj: Record<string, unknown>, path: string): unknown {
  }
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object") return (acc as Record<string, unknown>)[key];
    return undefined;
  }, obj);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const saved = localStorage.getItem("locale");
    if (saved && saved in translations) return saved as Locale;
    return defaultLocale;
  });

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
  }, []);

  const t = useCallback(
    <T = string,>(path: string): T => {
      const value = getByPath(translations[locale], path);
      return (value ?? path) as T;
    },
    [locale]
  );

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
    }
  )
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
