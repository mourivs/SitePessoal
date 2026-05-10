import "./skills.css";
import { skillsContent } from "./skillsContent";
import { useScrollReveal } from "../../../hooks/useScrollReveal";
import { useLanguage } from "../../../i18n/LanguageContext";

export function SkillsSection() {
  useScrollReveal();
  const { t } = useLanguage();

  const items = t<{ title: string; description: string }[]>("skills.items");

  return (
    <section className="skills-section">
      <div className="skills-section__container">
        <div className="skills-section__header reveal">
          <span className="skills-section__label">{t("skills.label")}</span>
          <h2 className="skills-section__title">{t("skills.title")}</h2>
          <p className="skills-section__description">{t("skills.description")}</p>
        </div>

        <div className="skills-section__grid">
          {items.map((item, index) => {
            const Icon = skillsContent.items[index].icon;

            return (
              <article className="skills-card reveal" key={index}>
                <div className="skills-card__icon-wrap">
                  <Icon className="skills-card__icon" strokeWidth={1.8} />
                </div>

                <div className="skills-card__content">
                  <h3 className="skills-card__title">{item.title}</h3>
                  <p className="skills-card__description">{item.description}</p>
                </div>

                <div className="skills-card__glow" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
