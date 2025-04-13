import "./OurValue.css";
import { ourValues } from "./ourValues";

// useTranslation is needed for static content translation made using i18n
import { useTranslation } from "react-i18next";

export default function OurValue() {
  const currentDate = new Date().getFullYear();
  const companyFoundationYear = 2015;
  const inIndustryFor = currentDate - companyFoundationYear;

  // translate static content
  const {t, i18n} = useTranslation("about", {useSuspense: true})

  const whyUs = t("ourvalues", { years: inIndustryFor, returnObjects: true })

  const title = t('ourvaluepagetitle');

  return (
    <div className="about-page_section-4-wrapper">
      <section className="about-page_section-4">
        <h2>{title}</h2>

        <div className="about-page_our-value">
          <>
          {ourValues.map((value, index) => {
            return (
              <div className="our-value-container" key={index}>
                <div className="our-value-logo-container">
                  <img src={value.href} alt={value.alt} />
                </div>
                <div className="our-value-name-container">
                  <h3>{whyUs[index]}</h3>
                </div>
              </div>
            );
          })}
            </>
        </div>
      </section>
    </div>
  );
}
