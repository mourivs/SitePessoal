import { useLanguage } from "../../i18n/LanguageContext";
import type { Locale } from "../../i18n/translations";
import "./LanguageSwitcher.css";

const flags: Record<Locale, string> = {
  pt: "https://flagcdn.com/w40/br.png",
  en: "https://flagcdn.com/w40/us.png",
  es: "https://flagcdn.com/w40/es.png",
};

const labels: Record<Locale, string> = {
  pt: "PT",
  en: "EN",
  es: "ES",
};

const locales: Locale[] = ["pt", "en", "es"];

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="lang-switcher">
      {locales.map((l) => (
        <button
          key={l}
          className={`lang-switcher__btn${locale === l ? " lang-switcher__btn--active" : ""}`}
          onClick={() => setLocale(l)}
          aria-label={`Switch to ${labels[l]}`}
        >
          <img src={flags[l]} alt="" className="lang-switcher__flag" />
          {labels[l]}
        </button>
      ))}
    </div>
  );
}
