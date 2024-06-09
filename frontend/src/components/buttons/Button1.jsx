import React from 'react';
import { Link } from 'react-router-dom';
import "./Button1.css";

const Button1 = ({ text, to, className }) => {
  return (
    <div>
      <Link to={to} className={`btn-1 ${className || ''}`}>{text}</Link>
    </div>
  );
};

export default Button1;
