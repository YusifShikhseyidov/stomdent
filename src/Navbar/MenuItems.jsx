import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { IoIosArrowDown } from "react-icons/io";

export default function MenuItems({ navigationLinks}) {
  // creating a state for dropdown links
  const [open, setOpen] = useState(false);

  const wrapperRef = useRef(null)

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (open && !e.target.closest(".dropdowm")) {
        setOpen(false);
      }
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    window.addEventListener("click", handleOutsideClick, true);

    return () => {
      window.removeEventListener("click", handleOutsideClick, true);
    };
  }, [open,wrapperRef]);

  return (
    <li className="menu-items">
      
      {/* if any of the links has dropdown links */}
      {navigationLinks.subLinks ? (
        <div className="dropdowm" ref={wrapperRef}>
          <button
            className={open ? "isActive" : ""}
            aria-haspopup="menu"
            aria-expanded={open ? "true" : "false"}
            onClick={(e)=> {
              e.stopPropagation()
              setOpen(!open)
            }}
          >
            {navigationLinks.title}{" "}
            <IoIosArrowDown className={open ? "menuIsActivated" : "menuIsDeactivated"}/>
          </button>
            {open && (
              <ul className="dropdown-nav-subelements">
                {navigationLinks?.subLinks &&
                  navigationLinks?.subLinks?.map((subLinkItem, index) => (
                    <li key={index} onClick={() => setOpen(!open)}>
                      <NavLink to={subLinkItem.url}>
                        {subLinkItem.title}
                      </NavLink>
                    </li>
                  ))}
              </ul>
            )}
        </div>
      ) : (
        // otherwise just a navbar link
        <NavLink to={navigationLinks.url}>{navigationLinks.title}</NavLink>
      )}
    </li>
  );
}
