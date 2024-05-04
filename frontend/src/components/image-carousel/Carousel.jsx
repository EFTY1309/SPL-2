import React, { useState, useEffect } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import "./Carousel.css";

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 4000); // Change slide every 4 seconds (4000 milliseconds)
    return () => clearInterval(intervalId); // Clean up on unmount
  }, [slide]);

  const nextSlide = () => {
    setSlide((slide) => (slide === data.length - 1 ? 0 : slide + 1));
  };

  const prevSlide = () => {
    setSlide((slide) => (slide === 0 ? data.length - 1 : slide - 1));
  };

  return (
    <div className="carousel">
      <div className="du-logo-and-text">
        <img src="../../../public/images/DU logo.png" alt="DU Logo" className="logo-du"/>
        <h1 className="DU-text">Dhaka University Swimming Pool</h1>
      </div>
      <BsChevronLeft onClick={prevSlide} className="arrow arrow-left" />
      {data.map((item, idx) => {
        return (
          <img
            key={idx}
            src={item.src}
            alt={item.alt}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <BsChevronRight onClick={nextSlide} className="arrow arrow-right" />
      <span className="indicators">
        {data.map((_, idx) => (
          <button
            key={idx}
            className={slide === idx ? "indicator" : "indicator indicator-inactive"}
            onClick={() => setSlide(idx)}
          ></button>
        ))}
      </span>
    </div>
  );
};

export default Carousel;
