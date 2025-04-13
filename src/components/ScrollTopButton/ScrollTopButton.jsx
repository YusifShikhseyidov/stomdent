import { useEffect, useState } from "react";
import "./ScrollTopButton.css";
import { SlArrowUp } from "react-icons/sl";

export default function ScrollTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <div className={`scrollup-container ${showButton ? "show" : ""}`} onClick={scrollToTop}>
      {showButton && <SlArrowUp className="arrow-icon" />}
    </div>
  );
}
