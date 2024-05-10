import React from "react";
import "./HeroSection.css"; // Import the CSS for this component
import { Carousel } from "../image-carousel/Carousel";
import { slides } from "../../data/carouselData.json";
import Button1 from "../buttons/Button1";

const HeroSection = () => {
  return (
    <div>
      <div className="hero-section-1">
        <div className="left-box">
          <Carousel data={slides} />
        </div>
        <div className="right-boxes">
          <div className="top-right-box">
            <div className="img1-box"></div>
            <div className="vc-text">
              What is Lorem Ipsum? “Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.” -Maria Villalobos
            </div>
          </div>
          <div className="bottom-right-box">
            <div className="img2-box"></div>
            <div className="director-text">
              What is Lorem Ipsum? “Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.” -Maria Villalobos
            </div>
          </div>
        </div>
      </div>

      <div className="hero-section-2">
        <h1>About us</h1>
        <div className="boxes">
          <div className="transparent-box mission">
            <h2>Mission</h2>
            <p>
              Our mission at Aqua Piscinas CR is to offer high-quality pool
              construction and remodeling solutions in La Fortuna de San Carlos,
              Costa Rica. We strive to provide our clients with exceptional
              services, using innovative techniques and materials to create
              unique and durable aquatic spaces. We work closely with our
              clients to ensure their satisfaction and aim to deliver
              outstanding results. Our goal is to use cutting-edge methods and
              materials to craft long-lasting, one-of-a-kind aquatic
              environments.
            </p>
          </div>
          <div className="transparent-box vision">
            <h2>Vision</h2>
            <p>
              Our mission at Aqua Piscinas CR is to offer high-quality pool
              construction and remodeling solutions in La Fortuna de San Carlos,
              Costa Rica. We strive to provide our clients with exceptional
              services, using innovative techniques and materials to create
              unique and durable aquatic spaces. We work closely with our
              clients to ensure their satisfaction and aim to deliver
              outstanding results. Our goal is to use cutting-edge methods and
              materials to craft long-lasting, one-of-a-kind aquatic
              environments.
            </p>
          </div>
        </div>
        <img
          src="../../../public/images/DU_swimming_pool4.jpg"
          alt="Hero Image"
        />
      </div>

      <div className="hero-section-3">
        <div className="overlay">
          <div className="left-box-gallery">
            <Button1 text="Gallery" to="/signin"/> 
          </div>
          <div className="glass-box">
            <h3>
              Dive into our gallery and explore the splendor of aquatic moments
              captured in time.
            </h3>
          </div>
        </div>
        <img
          src="../../../public/images/DU_swimming_pool3.jpg"
          alt="Swimming Pool"
        />
      </div>

      <div className="hero-section-4">
        <h1>Courses</h1>
        <img src="../../../public/images/DU_swimming_pool.jpg" />
      </div>

      <div className="hero-section-5">
        <h1>Contact us</h1>
        <img src="../../../public/images/DU_swimming_pool2.jpg" />
      </div>
    </div>
  );
};

export default HeroSection;

