import "./work.css";
import { workContent } from "./workContent";
import { ArrowUpRight } from "lucide-react";
import { useScrollReveal } from "../../../hooks/useScrollReveal";
import { useMemo, useRef } from "react";

export function WorkSection() {
  useScrollReveal();
  const sectionRef = useRef<HTMLElement | null>(null);

  const featuredProjects = workContent.projects.filter((project) => project.featured);
  const secondaryProjects = workContent.projects.filter((project) => !project.featured);

  const particles = useMemo(() => {
    return Array.from({ length: 14 }, (_, index) => ({
      id: index,
      size: 2 + (index % 4) * 2,
      top: 6 + (index * 5.3) % 34,
      left: 4 + (index * 7.1) % 92,
      duration: 8 + (index % 5) * 2,
      delay: (index % 6) * 0.8,
      opacity: 0.12 + (index % 4) * 0.05,
    }));
  }, []);

  function handleMouseMove(event: React.MouseEvent<HTMLElement>) {
    const section = sectionRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const moveX = ((x - centerX) / rect.width) * 24;
    const moveY = ((y - centerY) / rect.height) * 24;

    section.style.setProperty("--mouse-x", `${x}px`);
    section.style.setProperty("--mouse-y", `${y}px`);
    section.style.setProperty("--move-x", `${moveX}px`);
    section.style.setProperty("--move-y", `${moveY}px`);
  }

  function handleMouseLeave() {
    const section = sectionRef.current;
    if (!section) return;

    section.style.setProperty("--move-x", `0px`);
    section.style.setProperty("--move-y", `0px`);
    section.style.setProperty("--mouse-x", `50%`);
    section.style.setProperty("--mouse-y", `18%`);
  }

  return (
    <section
      ref={sectionRef}
      className="work-section"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="work-section__reactive-glow" />
      <div className="work-section__lens-flare" />
      <div className="work-section__lens-flare-secondary" />

      <div className="work-section__particles" aria-hidden="true">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="work-section__particle"
            style={
              {
                "--particle-size": `${particle.size}px`,
                "--particle-top": `${particle.top}%`,
                "--particle-left": `${particle.left}%`,
                "--particle-duration": `${particle.duration}s`,
                "--particle-delay": `${particle.delay}s`,
                "--particle-opacity": particle.opacity,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div className="work-section__container">
        <div className="work-section__header reveal">
          <span className="work-section__label">{workContent.label}</span>
          <h2 className="work-section__title">{workContent.title}</h2>
          <p className="work-section__description">{workContent.description}</p>
        </div>

        <div className="work-section__featured">
          {featuredProjects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              className="work-card work-card--featured reveal"
              target="_blank"
              rel="noreferrer"
            >
              <div className="work-card__media">
                <img src={project.image} alt={project.title} className="work-card__image" />
                <div className="work-card__overlay" />
                <div className="work-card__glow" />
              </div>

              <div className="work-card__content">
                <div className="work-card__meta">
                  <span className="work-card__year">{project.year}</span>
                  <span className="work-card__type">{project.type}</span>
                </div>

                <div className="work-card__bottom">
                  <div>
                    <h3 className="work-card__title">{project.title}</h3>
                    <p className="work-card__description">{project.description}</p>
                  </div>

                  <span className="work-card__icon">
                    <ArrowUpRight size={20} strokeWidth={2} />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="work-section__grid">
          {secondaryProjects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              className="work-card work-card--secondary reveal"
              target="_blank"
              rel="noreferrer"
            >
              <div className="work-card__media">
                <img src={project.image} alt={project.title} className="work-card__image" />
                <div className="work-card__overlay" />
                <div className="work-card__glow" />
              </div>

              <div className="work-card__content">
                <div className="work-card__meta">
                  <span className="work-card__year">{project.year}</span>
                  <span className="work-card__type">{project.type}</span>
                </div>

                <div className="work-card__bottom">
                  <div>
                    <h3 className="work-card__title">{project.title}</h3>
                    <p className="work-card__description">{project.description}</p>
                  </div>

                  <span className="work-card__icon">
                    <ArrowUpRight size={18} strokeWidth={2} />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}