import "./home.css";
import { homeContent } from "./homeContent";
import { useScrollReveal } from "../../../hooks/useScrollReveal";
import { useLanguage } from "../../../i18n/LanguageContext";

export function HomeSection() {
  useScrollReveal();
  const { t } = useLanguage();

  return (
    <section className="home">
      <video
        className="home__video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={homeContent.heroVideo} type="video/mp4" />
      </video>

      <div className="home__overlay" />

      <div className="home__container">
        <div className="home__image reveal">
          <img src={homeContent.heroImage} alt="Mourivs" />
        </div>

        <div className="home__text reveal">
          <span className="home__name">{t("home.name")}</span>
          <h1 className="home__brand">{t("home.brand")}</h1>
          <h2 className="home__role">{t("home.role")}</h2>
        </div>
      </div>

      <span className="home__label">{t("home.portfolio")}</span>
    </section>
  );
}
