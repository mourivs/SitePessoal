import "./bio.css";
import { bioContent } from "./bioContent";
import { useScrollReveal } from "../../../hooks/useScrollReveal";

export function BioSection() {
  useScrollReveal();

  return (
    <section className="bio-section">
      <div className="bio-section__container">
        <div className="bio-section__left reveal">
          <div className="bio-section__intro-block">
            <span className="bio-section__eyebrow">{bioContent.sectionLabel}</span>

            <p className="bio-section__lead">
              Currently based in <strong>Maringá, Paraná, Brazil</strong>, I am
              completing my degree in <strong>Analysis and Systems Development</strong>.
              I am 20 years old and deeply passionate about front-end development,
              with a strong focus on building modern, intuitive, and visually
              engaging user interfaces.
            </p>
          </div>

          <div className="bio-section__approach-card">
            <span className="bio-section__approach-title">
              {bioContent.approachLabel}
            </span>

            <p className="bio-section__approach-text">
              My approach to development is driven by a passion for creating
              clean, modern, and highly intuitive user experiences. I focus on
              building responsive and efficient interfaces, combining strong
              visual design with solid performance. I aim to deliver solutions
              that are not only functional, but also engaging, scalable, and
              impactful.
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
              <span>Front-end</span>
              <span>UI / Motion / Code</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}