import React from 'react';
import { Link } from 'react-router-dom';
import "./Button2.css";

const Button2 = ({ text, to, className }) => {
  return (
    <div>
      <Link to={to} className={`btn-2 ${className || ''}`}>{text}</Link>
    </div>
  );
};

export default Button2;
