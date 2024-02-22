import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
  import "./Slider.css";
  import ProductPage from "../pages/ProductPage";
 import {ApiSlides} from '../APIfolder/SliderAPI';
 import {Link,Routes} from 'react-router-dom';
 import { useHistory } from "react-router-dom";
const Slider = () => {
  function ButtonLink({ to, children }) {
    return <Link to={to}><button>{children}</button></Link>;
  }
  
  // Styles
  const slideStyle = "slide flex items-center justify-center h-[100%]";
  const arrowStyle =
    "rounded-full bg-grey flex justify-center items-center shadow-md hover:cursor-pointer";

  //States
  const [slides] = useState(ApiSlides);
  const [activeSlide, setActiveSlide] = useState(0);

  const prevSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(slides.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };
  const nextSlide = () => {
    if (activeSlide === slides.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };
  return (
    <div className="slider h-[540px] bg-white flex items-center justify-between mobile:hidden">
      {/* left Arrow */}
      <div className={arrowStyle} onClick={prevSlide}>
        <ArrowLeftOutlined style={{ fontSize: "50px" }} />
      </div>

      {/* Slide */}

      {slides.map((slide, index) => {
        if (index === activeSlide) {
          return (
            <div className={`wrapper flex w-[100%] h-[486px] items-center justify-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative` + slide.background} key={index}>
              <div className={slideStyle}>
                <div className="flex-1 flex justify-center items-center h-[100%]">
                <img
                  className =' h-[100%] object-cover'
                  src={slide.src}
                  alt="slide-image"
                />
                </div>
                <div className="discription flex flex-col flex-1 place-items-start justify-center ml-11">
                  <h1 className="text-[55px] text-white" style={{"font-family": "Poppins","font-weight": "700",
  "font-style": "italic"}}>{slide.content.h1}</h1>
                  <h2 className=" text-[30px] text-white" style={{"font-family": "Poppins"}}>{slide.content.h2}</h2>
                  <p className=" text-[30px] text-white" style={{"font-family": "Poppins"}}>{slide.content.p}</p>
                  <Link to="/productpage"><button type="button" className="btn">Shop Now</button></Link>
                 
                  {/* <ButtonLink to="/productpage">Shop Now</ButtonLink> */}
                  
                
                </div>
              </div>
            </div>
          );
        }
      })}
      {/* Right Arrow */}

      <div className={arrowStyle} onClick={nextSlide}>
        <ArrowRightOutlined style={{ fontSize: "50px" }} />
      </div>
    </div>
  );
};

export default Slider;