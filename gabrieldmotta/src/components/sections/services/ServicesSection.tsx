import "./services.css";
import { servicesContent } from "./servicesContent";
import { useScrollReveal } from "../../../hooks/useScrollReveal";

export function ServicesSection() {
  useScrollReveal();

  return (
    <section className="services-section">
      <div className="services-section__container">
        <div className="services-section__header reveal">
          <span className="services-section__label">{servicesContent.label}</span>
          <h2 className="services-section__title">{servicesContent.title}</h2>
        </div>

        <div className="services-section__layout">
          {servicesContent.items.map((item, index) => {
            const Icon = item.icon;

            return (
              <article key={index} className="service-emblem reveal">
                <div className="service-emblem__icon-wrap">
                  <div className="service-emblem__ring service-emblem__ring--left" />
                  <Icon className="service-emblem__icon" strokeWidth={1.8} />
                  <div className="service-emblem__ring service-emblem__ring--right" />
                </div>

                <h3 className="service-emblem__title">{item.title}</h3>
                <p className="service-emblem__description">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}