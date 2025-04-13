import { JackInTheBox } from "react-awesome-reveal";
import "./MainServices.css";
// main services logos
import tikinti from "/Tikinti.jpg";
import esasli_temir from "/Esasli-temir.jpg";
import abide_berpasi from "/Tarixi-abidelerin-berpasi.jpg";

export default function MainServices({ title, mainServicesNames }) {
  return (
    <section className="about-page_section-2">
      <h2>{title}</h2>

      <div className="about-page_main-services">
        <JackInTheBox triggerOnce={true}>
          <div className="service-container">
            <div className="service-logo-container">
              <img src={tikinti} alt="tikinti" />
            </div>

            <div className="service-name-container">
              <h3>{mainServicesNames[0]}</h3>
            </div>
          </div>
        </JackInTheBox>
        <JackInTheBox triggerOnce={true}>
          <div className="service-container">
            <div className="service-logo-container">
              <img src={esasli_temir} alt="esasli temir" />
            </div>

            <div className="service-name-container">
              <h3>{mainServicesNames[1]}</h3>
            </div>
          </div>
        </JackInTheBox>
        <JackInTheBox triggerOnce={true}>
          <div className="service-container">
            <div className="service-logo-container">
              <img src={abide_berpasi} alt="abide berpasi" />
            </div>

            <div className="service-name-container">
              <h3>{mainServicesNames[2]}</h3>
            </div>
          </div>
        </JackInTheBox>
      </div>
    </section>
  );
}
