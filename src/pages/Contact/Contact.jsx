import "./Contact.css";
import { TbMailOpened } from "react-icons/tb";
import { PiPhoneIncoming } from "react-icons/pi";

// useTranslation is needed for static content translation made using i18n
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation("contact", { useSuspense: true });

  return (
    <main className="contact-page">
      <h1>{t("contact")}</h1>
      <section className="contact-details">
        <div className="contact-details_contact-us-svg">
          <img src="/contact-us-bg.svg" alt="contact-us" />
        </div>

        <div className="contact-details_contact-details-wrapper">
          <div className="contact-phone-container">
            <a href="tel:(+994 12) 465 73 07">
              <div className="phone-icon-wrapper">
                <PiPhoneIncoming size={23} />
              </div>
              <span>{t("contact-us")}</span>
              <span>(+994 12) 465 73 07</span>
            </a>
          </div>

          <div className="contact-email-container">
            <a href="mailto:info@conco.az">
              <div className="email-icon-wrapper">
                <TbMailOpened size={21} />
              </div>
              <span>{t("email-us")}</span>
              <span>info@conco.az</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
