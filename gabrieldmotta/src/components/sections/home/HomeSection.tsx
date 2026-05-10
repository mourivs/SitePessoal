import "./home.css";
import { homeContent } from "./homeContent";
import { useScrollReveal } from "../../../hooks/useScrollReveal";

export function HomeSection() {
  useScrollReveal();

  return (
    <section className="home">
      {/* VIDEO BACKGROUND */}
      <video
        className="home__video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={homeContent.heroVideo} type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="home__overlay" />

      {/* CONTENT */}
      <div className="home__container">
        
        {/* IMAGE */}
        <div className="home__image reveal">
          <img src={homeContent.heroImage} alt="Mourivs" />
        </div>

        {/* TEXT */}
        <div className="home__text reveal">
          <span className="home__name">{homeContent.name}</span>

          <h1 className="home__brand">
            {homeContent.brand}
          </h1>

          <h2 className="home__role">
            {homeContent.role}
          </h2>
        </div>

      </div>

      <span className="home__label">PORTFOLIO</span>
    </section>
  );
}