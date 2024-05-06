// CourseCard.jsx

import React from 'react';
import "./CourseCard.css";
import Button1 from "../buttons/Button1";

const CourseCard = ({ className, imageSrc, title, description, buttonText, buttonLink }) => {

  return (
    <div className="courses">
      <div className={`section-1 ${className}`}>
        <div className="left-box-courses">
          <h1>{title}</h1>
          <p>{description}</p>
          <Button1 text={buttonText} to={buttonLink}/> 
        </div>
        <div className="right-box-courses">
          <img
            src={imageSrc}
            alt="Course Image"
          />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
