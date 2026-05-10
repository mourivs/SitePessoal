import "./partners.css";
import { partnersContent } from "./partnersContent";
import { ArrowUpRight } from "lucide-react";
import { useScrollReveal } from "../../../hooks/useScrollReveal";

export function PartnersSection() {
  useScrollReveal();

  function handleSectionMove(event: React.MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    event.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    event.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  }

  function handleCardMove(
    event: React.MouseEvent<HTMLAnchorElement>,
    currentTarget: HTMLAnchorElement
  ) {
    const rect = currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / rect.width) * 10;
    const rotateX = ((centerY - y) / rect.height) * 10;

    currentTarget.style.setProperty("--mouse-x", `${x}px`);
    currentTarget.style.setProperty("--mouse-y", `${y}px`);
    currentTarget.style.setProperty("--rotate-x", `${rotateX}deg`);
    currentTarget.style.setProperty("--rotate-y", `${rotateY}deg`);
  }

  function handleCardLeave(currentTarget: HTMLAnchorElement) {
    currentTarget.style.setProperty("--mouse-x", `50%`);
    currentTarget.style.setProperty("--mouse-y", `50%`);
    currentTarget.style.setProperty("--rotate-x", `0deg`);
    currentTarget.style.setProperty("--rotate-y", `0deg`);
  }

  return (
    <section
      className="partners-section"
      onMouseMove={handleSectionMove}
    >
      <div className="partners-section__container">
        <div className="partners-section__header reveal">
          <span className="partners-section__label">
            {partnersContent.label}
          </span>
          <h2 className="partners-section__subtitle">
            {partnersContent.subtitle}
          </h2>
        </div>

        <div className="partners-section__grid">
          {partnersContent.items.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="partner-card reveal"
              target="_blank"
              rel="noreferrer"
              onMouseMove={(event) => handleCardMove(event, event.currentTarget)}
              onMouseLeave={(event) => handleCardLeave(event.currentTarget)}
            >
              <div className="partner-card__spotlight" />
              <div className="partner-card__noise" />

              <div className="partner-card__media">
                <div className="partner-card__orbital partner-card__orbital--one" />
                <div className="partner-card__orbital partner-card__orbital--two" />

                <img
                  src={item.image}
                  alt={item.name}
                  className="partner-card__image"
                />
              </div>

              <div className="partner-card__footer">
                <span className="partner-card__username">
                  {item.username}
                </span>
                <span className="partner-card__icon">
                  <ArrowUpRight size={18} strokeWidth={2} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}