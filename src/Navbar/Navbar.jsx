import { Link, Outlet } from 'react-router-dom'
import MenuItems from './MenuItems'
import conco_logo from './concologo-white-removedbg.png'
import './Navbar.css'
import { useState, useEffect, useRef } from 'react'
// useLocale is needed for translation that is coming from backend
import { useLocale } from '../components/LocaleContext'
// useTranslation is needed for static content translation made using i18n
import { useTranslation } from 'react-i18next'
// globe icon for language menu
import { CiGlobe } from "react-icons/ci";
// placement of the language menu according to screen size
import { useMediaQuery } from 'react-responsive'

function Header() {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1119px)' })

  const {t} = useTranslation('common', {useSuspense: true})

  const navlinks = t("navlinks", {returnObjects: true})

  const {locale, changeLocale} = useLocale()

  const [show, setShow] = useState(false)
  const hamburgerMenuRef = useRef(null)

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (show && !e.target.closest(".hamburgerMenu")) {
        setShow(false);
      }
      if (hamburgerMenuRef.current && !hamburgerMenuRef.current.contains(e.target)) {
        setShow(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [show, hamburgerMenuRef]);

  return (
    <>
      <header className="navbar-container">
        <nav className="nav-area">
          <div className="logo-wrapper">
            <Link to="/">
              <img src={conco_logo} alt="conco_logo" />
            </Link>
          </div>

          <div
            className="hamburgerMenu"
            ref={hamburgerMenuRef}
            onClick={() => setShow(!show)}
          >
            <span className={show ? "lineTopSpin" : ""}></span>
            <span className={show ? "lineMiddleSpin" : ""}></span>
            <span className={show ? "lineBottomSpin" : ""}></span>
          </div>

          <ul className={`menus ${show ? "open" : ""}`}>
            {navlinks &&
              navlinks.map((navLink, index) => {
                return <MenuItems navigationLinks={navLink} key={index} />;
              })}
          </ul>

          {/* language switcher */}
          {isTabletOrMobile ? (
            <div className="languageMenuWrapper">
              <CiGlobe className='globe-icon' strokeWidth={0.5} />
              <select value={locale} className='langMenu' onChange={(e)=>changeLocale(e.target.value)}>
                <option value="az-Latn">AZ</option>
                <option value="en">EN</option>
                <option value="ru-RU">RU</option>
              </select>
            </div>
          ) : (
            <div className="langMenuWrapper">
              <CiGlobe className='globe-icon' strokeWidth={0.5} />
              <select value={locale} className='langMenu' onChange={(e)=>changeLocale(e.target.value)}>
                <option value="az-Latn">AZ</option>
                <option value="en">EN</option>
                <option value="ru-RU">RU</option>
              </select>
            </div>
          )}

        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Header