import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  max-width: 500px;
`;

const Image = styled.img`
  width: 100%;
  display: ${props => props.display};
`;

function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % 3); // Change the number 3 to match the number of images
    }, 3000); // Change the interval time (in milliseconds) here
    return () => clearInterval(interval);
  }, []);

  return (
    <CarouselContainer className="w3-content w3-section">
      <Image className="mySlides" src="/public/images/img_1.jpg" display={index === 0 ? 'block' : 'none'} />
      <Image className="mySlides" src="/public/images/img_2.jpg" display={index === 1 ? 'block' : 'none'} />
      <Image className="mySlides" src="/public/images/img_3.jpg" display={index === 2 ? 'block' : 'none'} />
      <h1>Rafid is a good boy...</h1>
      <h1>Efty is not...</h1>
    </CarouselContainer>
    
  );
}

export default HeroSection;
