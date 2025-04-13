import "./Licences.css";
import licence1 from "/licence1.jpg";
import licence2 from "/licence2.jpg";
import licence3 from "/licence3.jpg";
import { Fade } from "react-awesome-reveal";

// useTranslation is needed for static content translation made using i18n
import { useTranslation } from "react-i18next";

export default function Certificates() {
  // translate static content
  const {t, i18n} = useTranslation("about", {useSuspense: true})

  return (
    <section className="licences-section">
      <h2>{t('licences')}</h2>
      <Fade cascade damping={0.2} triggerOnce={true}>
        <ul className="licences-container">
          <li className="licence-container">
            <img src={licence1} loading="lazy" alt="licence-1" />
          </li>
          <li className="licence-container">
            <img src={licence2} loading="lazy" alt="licence-2" />
          </li>
          <li className="licence-container">
            <img src={licence3} loading="lazy" alt="licence-3" />
          </li>
        </ul>
      </Fade>
    </section>
  );
}
