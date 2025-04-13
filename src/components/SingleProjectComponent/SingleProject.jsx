import { useState } from "react";
// icons
import { TbZoomPan } from "react-icons/tb";
import { VscChromeClose } from "react-icons/vsc";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import "./SingleProject.css";
// animations
import { Fade, Zoom } from "react-awesome-reveal";

export default function SingleProject({ photos, title }) {
  // modal state control
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // active slide
  const [activeIndex, setActiveIndex] = useState(0)

  // functions to set sliding to left & right
  const slideLeft = ()=>{
    activeIndex===0 ? setActiveIndex(photos.length-1) : setActiveIndex(activeIndex-1)
  }

  const slideRight = ()=>{
    activeIndex===photos.length-1 ? setActiveIndex(0) : setActiveIndex(activeIndex+1)
  }

  // once modal opens up deactivate scroll
  if(open) {
    document.body.style.overflow='hidden'
  }else{
    document.body.style.overflow='auto'
  }

  return (
      <section className="single-project_main-container">
        {/* Project title section */}
        <Zoom triggerOnce>
          <div className="single-project_text-container">
            <p className="single-project_text-element">{title}</p>
          </div>
        </Zoom>
        {/* primary image of the project as a preview */}
        <Fade direction="up" triggerOnce>
          <div className="single-project_single-image_wrapper">
            <img src={photos[0]} onClick={handleOpen} loading="lazy" alt={photos[0]} />
            <div className="magnifier-wrapper" onClick={handleOpen}>
              <TbZoomPan className="magnifier-icon" />
            </div>
          </div>
        </Fade>
        {/* Modal window to see more images of the project as slider */}
        {open && (
          <div className="modal-container-overlay">
            <div className={`modal-container ${open ? 'show-images-modal' : ''}`}>
              <VscChromeClose className="close-modal-sign" onClick={handleClose} />
              <div className="modal-slider">
                <ul className="modal-slider-wrapper">
                  {photos.map((photo, index) => (
                    <li className={index===activeIndex ? 'modal-slider-card modal-slider-card_active' : 'modal-slider-card'} key={index}>
                      <img src={photo} loading="lazy" alt={photo} />
                    </li>
                  ))}
                  <div className="modal-slide-left-button" onClick={slideLeft}><SlArrowLeft /></div>
                  <div className="modal-slide-right-button" onClick={slideRight}><SlArrowRight /></div>
                </ul>
              </div>
            </div>
          </div>
        )}
      </section>
  );
}