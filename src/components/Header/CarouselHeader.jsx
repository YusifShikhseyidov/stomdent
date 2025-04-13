// import styles
import "./CarouselHeader.css";

import { useEffect, useState } from "react";

// import data fetched from api
import useFetch from "../hooks/useFetch";

// useLocale is needed for translation that is coming from backend
import { useLocale } from "../LocaleContext";

// Arrow Icons
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export default function CarouselHeader() {
  const {locale} = useLocale()

  const {data, loading, error} = useFetch(`slider-images-headings?locale=${locale}&populate=*`)
  const sortedData = [...data].sort((a,b)=> a.id - b.id)

  console.log(sortedData)

  // active slide
  const [activeIndex, setActiveIndex] = useState(0)

  // state to trigger card title bottom line animation
  const [animate,setAnimate] = useState(false)

  // functions to set sliding to left & right
  const slideLeft = ()=>{
    activeIndex===0 ? setActiveIndex(sortedData.length-1) : setActiveIndex(activeIndex-1)
  }

  const slideRight = ()=>{
    activeIndex===sortedData.length-1 ? setActiveIndex(0) : setActiveIndex(activeIndex+1)
  }

  useEffect(()=>{
    setAnimate(true)
    const animationTimer = setTimeout(() => {
      setAnimate(false);
    }, 3000);
    const timer = setTimeout(() => {
      slideRight()
    }, 4000);

    // cleanup function to clear the timers
    return ()=> clearTimeout(timer, animationTimer)
  }, [activeIndex])

  return (
    <div className="slider">
      {loading && <div className="loader"></div>}
      {error && <div>error...</div>}
      <div className="slider-wrapper">
        {/* map data to slides */}
        {!loading && !error && data && sortedData?.map((obj, index) => (
          <div className={index===activeIndex ? 'slider-card slider-card_active' : 'slider-card'} key={obj.id}>
            <div className="slider-image" style={{backgroundImage: `url(${obj.attributes.slider_img.data[0].attributes.url})`}}></div>
            <div className="card-overlay">
              <p className={`card-title ${animate ? 'animate' : ''}`}>
                {obj.attributes.slider_heading}
              </p>
            </div>
          </div>
        ))}
        <div className="slide-left-button" onClick={slideLeft}><SlArrowLeft /></div>
        <div className="slide-right-button" onClick={slideRight}><SlArrowRight /></div>
        <div className="carousel-pagination">
          {sortedData.map((_, index)=>(
            <div 
              key={index}
              className={
                index===activeIndex ? "pagination-dot pagination-dot_active" : "pagination-dot"
              }
              onClick={()=> setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
