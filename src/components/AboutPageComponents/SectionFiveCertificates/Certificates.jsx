import "./Certificates.css";
import crt1 from "/AZS-ISO-9001-Sertifikat.png";
import crt2 from "/AZS-ISO-14001-Sertifikat.png";
import crt3 from "/AZS-ISO-45001-Sertifikat.png";
import crt4 from "/AZS-ISO-50001-Sertifikat.png";
import { Fade } from "react-awesome-reveal";

// useTranslation is needed for static content translation made using i18n
import { useTranslation } from "react-i18next";

export default function Certificates() {
  // translate static content
  const {t, i18n} = useTranslation("about", {useSuspense: true})

  return (
    <section className="certificates-section">
      <h2>{t('certificates')}</h2>
      <Fade cascade damping={0.2} triggerOnce={true}>
        <ul className="certificates-container">
          <li className="certificate-container">
            <img src={crt1} loading="lazy" alt="certificate" />
          </li>
          <li className="certificate-container">
            <img src={crt2} loading="lazy" alt="certificate" />
          </li>
          <li className="certificate-container">
            <img src={crt3} loading="lazy" alt="certificate" />
          </li>
          <li className="certificate-container">
            <img src={crt4} loading="lazy" alt="certificate" />
          </li>
        </ul>
      </Fade>
    </section>
  );
}
