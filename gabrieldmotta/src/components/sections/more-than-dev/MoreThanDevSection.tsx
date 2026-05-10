import "./moreThanDev.css";
import {
  moreThanDevContent,
  getYoutubeThumbnail,
} from "./moreThanDevContent";
import { useScrollReveal } from "../../../hooks/useScrollReveal";

export function MoreThanDevSection() {
  useScrollReveal();

  const thumbnail = getYoutubeThumbnail(moreThanDevContent.youtubeUrl);

  return (
    <section className="more-than-dev">
      <div className="more-than-dev__container">
        <div className="more-than-dev__content reveal">
          <h2 className="more-than-dev__title">
            {moreThanDevContent.title}
          </h2>

          <p className="more-than-dev__description">
            {moreThanDevContent.description}
          </p>
        </div>

        <a
          className="more-than-dev__media reveal"
          href={moreThanDevContent.youtubeUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Open YouTube video by Mourivs"
        >
          <div className="more-than-dev__image-wrapper">
            <img
              src={thumbnail}
              alt="YouTube video thumbnail by Mourivs"
              className="more-than-dev__image"
            />

            <div className="more-than-dev__overlay" />

            <div className="more-than-dev__play">
              <span className="more-than-dev__play-circle">
                ▶
              </span>
            </div>
          </div>

          <span className="more-than-dev__label">
            {moreThanDevContent.videoLabel}
          </span>
        </a>
      </div>
    </section>
  );
}