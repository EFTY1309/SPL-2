import React from "react";
import "./Courses.css";
import Button1 from "../buttons/Button1";

const Courses = () => {
  return (
    <div>
      <div className="section-1">
          <div className="left-box-courses">
            <h1>Butterfly</h1>
            <p>Nuestra misión en Aqua Piscinas CR es ofrecer soluciones de construcción y remodelación de piscinas de la más alta calidad en La Fortuna de San Carlos, Costa Rica. Nos esforzamos por brindar a nuestros clientes servicios excepcionales, utilizando técnicas y materiales innovadores, para crear espacios acuáticos únicos y duraderos. Trabajamos en estrecha colaboración con nuestros clientes para. Trabajamos en estrecha colaboración con nuestros clientes para. Trabajamos en estrecha colaboración con nuestros clientes para. Nos esforzamos por brindar a nuestros clientes servicios excepcionales, utilizando técnicas y materiales innovadores, para crear espacios acuáticos únicos y duraderos.
            </p>
            <Button1 text="Enroll Now" to="/signin"/> 
          </div>
          <div className="right-box-courses">
            <img
              src="../../../public/images/Butterfly.jpg"
              alt="Butterfly Image"
            />
          </div>
      </div>
    </div>
  );
};

export default Courses;
