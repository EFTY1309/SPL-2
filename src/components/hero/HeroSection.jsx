import React from 'react';
import './HeroSection.css'; // Import the CSS for this component

const HeroSection = () => {
  return (
    <div>
      <div className="hero-section-1">
        <div className="left-box"></div>
        <div className="right-boxes">
          <div className="top-right-box">
            <div className="img1-box"></div>
            <div className="vc-text">
              What is Lorem Ipsum?
              “Lorem Ipsum is simply dummy text of the printing and typesetting industry.”
                  -Maria Villalobos
            </div>
          </div>
          <div className="bottom-right-box">
            <div className="img2-box"></div>
            <div className="director-text">
              What is Lorem Ipsum?
              “Lorem Ipsum is simply dummy text of the printing and typesetting industry.”
                  -Maria Villalobos
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;