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

      <div className="hero-section-2">
        <h1>About us</h1>
        <div className="boxes">
          <div className="transparent-box mission">
            <h2>Mission</h2>
            <p>Nuestra misión en Aqua Piscinas CR es ofrecer soluciones de construcción y remodelación de piscinas de la más alta calidad en La Fortuna de San Carlos, Costa Rica. Nos esforzamos por brindar a nuestros clientes servicios excepcionales, utilizando técnicas y materiales innovadores, para crear espacios acuáticos únicos y duraderos. Trabajamos en estrecha colaboración con nuestros clientes para. Trabajamos en estrecha colaboración con nuestros clientes para. Trabajamos en estrecha colaboración con nuestros clientes para. Nos esforzamos por brindar a nuestros clientes servicios excepcionales, utilizando técnicas y materiales innovadores, para crear espacios acuáticos únicos y duraderos.
            </p>
          </div>
          <div className="transparent-box vision">
            <h2>Vision</h2>
            <p>Nuestra misión en Aqua Piscinas CR es ofrecer soluciones de construcción y remodelación de piscinas de la más alta calidad en La Fortuna de San Carlos, Costa Rica. Nos esforzamos por brindar a nuestros clientes servicios excepcionales, utilizando técnicas y materiales innovadores, para crear espacios acuáticos únicos y duraderos. Trabajamos en estrecha colaboración con nuestros clientes para. Trabajamos en estrecha colaboración con nuestros clientes para. Trabajamos en estrecha colaboración con nuestros clientes para. Nos esforzamos por brindar a nuestros clientes servicios excepcionales, utilizando técnicas y materiales innovadores, para crear espacios acuáticos únicos y duraderos.
            </p>
          </div>
        </div>
        <img src="../../../public/images/DU_swimming_pool4.jpg" alt="Hero Image" />
      </div>


      <div className="hero-section-3">
          <img src="../../../public/images/DU_swimming_pool2.jpg" />
          <div className="glass-box">
            <h3>Dive into our gallery and explore the splendor of aquatic moments captured in time.</h3>
          </div>

      </div>

      <div className="hero-section-4">
          <h1>Courses</h1>
          <img src="../../../public/images/DU_swimming_pool.jpg" />
      </div>

      <div className="hero-section-5">
          <h1>Contact us</h1>
          <img src="../../../public/images/DU_swimming_pool3.jpg" />
      </div>

    </div>
  );
};

export default HeroSection;