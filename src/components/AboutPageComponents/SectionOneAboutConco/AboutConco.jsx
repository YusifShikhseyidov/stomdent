import MainServices from "../SectionTwoMainServices/MainServices";
// the hook to fetch data
import useFetch from "../../hooks/useFetch";
// styles
import "./AboutConco.css"

// import react-awesome-reveal Zoom effect
import { Zoom } from "react-awesome-reveal";
// useLocale is needed for translation that is coming from backend
import { useLocale } from "../../LocaleContext";
// useTranslation is needed for static content translation made using i18n
import { useTranslation } from "react-i18next";

export default function AboutConco() {
  const {locale} = useLocale()
  
  // fetch data using useFetch hook for relevant collection-type
  const {data,loading} = useFetch(`/about-us-collection-types?locale=${locale}&populate=*`)
  
  console.log(data)

  // translate static content
  const {t} = useTranslation("about", {useSuspense: true})

  // define title for main services component
  const title = t('maindirectionsofwork');
  // translated names for main services
  const mainServicesNames = t("mainservices", {returnObjects: true})

  return (
    <section className="about-page_section-1">
      {loading && <div className="loader"></div>}
      {!loading && data && (
        <>
          {data?.map((aboutuscoverimg)=>(
            <div className="about-page_company-cover" key={aboutuscoverimg.id}>
              <img src={aboutuscoverimg.attributes.conco_about_us_cover_img.data.attributes.url} loading="lazy" alt="company-cover" />
            </div>
          ))}

          <div className="about_page-about_us-keeper">
            <h1 className="about-page_title">{t('aboutpagetitle')}</h1>

            {data?.map((aboutus)=>(
              <p className="about-page_about-conco" key={aboutus.id}>
                {aboutus.attributes.conco_about_us}
              </p>

            ))}

            <hr />
            <Zoom triggerOnce>
              <p className="about-page_our-philosophy_1">{t('philosophy1')}</p>
            </Zoom>
            <p className="about-page_our-philosophy_2">
              {t('philosophy2')}
            </p>
            <hr />

            <MainServices title={title} mainServicesNames={mainServicesNames} />
          </div>
        </>
      )}
    </section>
  );
}