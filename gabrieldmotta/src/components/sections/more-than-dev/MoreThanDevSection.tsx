import "./moreThanDev.css";
import { getYoutubeThumbnail } from "./moreThanDevContent";
import { useScrollReveal } from "../../../hooks/useScrollReveal";
import { useLanguage } from "../../../i18n/LanguageContext";

export function MoreThanDevSection() {
  useScrollReveal();
  const { t } = useLanguage();

  const youtubeUrl = "https://www.youtube.com/watch?v=0DKFQ_YlJ3Y";
  const thumbnail = getYoutubeThumbnail(youtubeUrl);

  return (
    <section className="more-than-dev">
      <div className="more-than-dev__container">
        <div className="more-than-dev__content reveal">
          <h2 className="more-than-dev__title">
            {t("moreThanDev.title")}
          </h2>

          <p className="more-than-dev__description">
            {t("moreThanDev.description")}
          </p>
        </div>

        <a
          className="more-than-dev__media reveal"
          href={youtubeUrl}
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
            {t("moreThanDev.videoLabel")}
          </span>
        </a>
      </div>
    </section>
  );
}
