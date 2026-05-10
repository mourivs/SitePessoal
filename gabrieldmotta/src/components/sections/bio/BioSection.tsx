import "./bio.css";
import { bioContent } from "./bioContent";
import { useScrollReveal } from "../../../hooks/useScrollReveal";
import { useLanguage } from "../../../i18n/LanguageContext";

export function BioSection() {
  useScrollReveal();
  const { t } = useLanguage();

  return (
    <section className="bio-section">
      <div className="bio-section__container">
        <div className="bio-section__left reveal">
          <div className="bio-section__intro-block">
            <span className="bio-section__eyebrow">{t("bio.sectionLabel")}</span>

            <p className="bio-section__lead">
              {t("bio.heading")}
            </p>
          </div>

          <div className="bio-section__approach-card">
            <span className="bio-section__approach-title">
              {t("bio.approachLabel")}
            </span>

            <p className="bio-section__approach-text">
              {t("bio.approachText")}
            </p>
          </div>
        </div>

        <div className="bio-section__right reveal">
          <div className="bio-section__media">
            <img
              src={bioContent.image}
              alt="Gabriel Moura portrait"
              className="bio-section__image"
            />

            <div className="bio-section__gradient" />
            <div className="bio-section__glass" />
            <div className="bio-section__accent bio-section__accent--one" />
            <div className="bio-section__accent bio-section__accent--two" />

            <div className="bio-section__floating-card">
              <span>{t("bio.floatingLabel")}</span>
              <span>{t("bio.floatingSublabel")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
