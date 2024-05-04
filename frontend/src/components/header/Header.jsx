// Header.jsx
import React from "react";
import "./Header.css"; // Import the CSS for this component
import { Link } from "react-router-dom";
import styled from "styled-components";


const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="/images/Logo.png"
          alt="Dhaka University Swimming Pools Logo"
        />
      </div>
      <nav className="navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/schedule">Schedule</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <div className="auth-buttons">
        <Link to="/signin" className="auth-button">Sign In</Link>
        <Link to="/register" className="auth-button">Register</Link>
      </div>

    </header>
  );
};

export default Header;

