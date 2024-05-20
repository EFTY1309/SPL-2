import React from 'react';
import { Link } from 'react-router-dom';
import "./Button3.css";

const Button3 = ({ text, to, className, onClick }) => {
  return (
    <div>
      <Link to={to} className={`btn-3 ${className || ''}`} onClick={onClick}>
        {text}
      </Link>
    </div>
  );
};

export default Button3;
