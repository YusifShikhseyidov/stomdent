import Marquee from "react-fast-marquee";
import './Sponsors.css'
import { useMediaQuery } from "react-responsive";
import useFetch from "../hooks/useFetch";
// useTranslation is needed for static content translation made using i18n
import { useTranslation } from "react-i18next";

export default function Sponsors() {
  const {data, loading} = useFetch("/orderers?populate=*")
  const isTabletOrMobile = useMediaQuery({minWidth: 320, maxWidth: 768})

  // translate static content
  const {t, i18n} = useTranslation("about", {useSuspense: true})

  return (
    <div className="main-marquee-container">
      
        <h1 className="marquee-title">{t('sifariscilerpagetitle')}</h1>

      <div className="marquee-container">
        {loading && <div className="loader"></div>}
        {isTabletOrMobile ? (
          <div className="logos-container">
            {!loading && data && data?.map((logo)=>(
              <div className="marquee-images" key={logo.id}>
                <img src={logo.attributes.orderer_logo.data[0].attributes.url} alt={`sifarisci-${logo.id}`} />
              </div>
            ))}
            
          </div>
        ) : (
          <Marquee speed={50} gradient={true} gradientWidth={500}>
            {data.map((logo)=>(
              <div className="marquee-images" key={logo.id}>
                <img src={logo.attributes.orderer_logo.data[0].attributes.url} alt={`sifarisci-${logo.id}`} />
              </div>
            ))}
            
          </Marquee>
        )}
      </div>

    </div>
  )
}
