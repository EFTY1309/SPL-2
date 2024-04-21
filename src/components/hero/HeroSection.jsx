// HeroSection.jsx
import React, { useEffect, useState } from 'react';
import './HeroSection.css'; // Import the CSS for this component

function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % 3); // Change the number 3 to match the number of images
    }, 3000); // Change the interval time (in milliseconds) here
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <img className={index === 0 ? 'my-slide active' : 'my-slide'} src="/images/img_1.jpg" />
      <img className={index === 1 ? 'my-slide active' : 'my-slide'} src="/images/img_2.jpg" />
      <img className={index === 2 ? 'my-slide active' : 'my-slide'} src="/images/img_3.jpg" />
      <h1>Rafid is a good boy...</h1>
      <h1>Efty is not...</h1>
    </div>
  );
}

export default HeroSection;
