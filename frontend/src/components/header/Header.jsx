import React, { useState } from "react";
import { FiMenu } from "react-icons/fi"; // Import hamburger menu icon
import "./Header.css"; // Import the CSS for this component
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img
            src="/images/Logo.png"
            alt="Dhaka University Swimming Pools Logo"
            className="logo-img"
          />
        </Link>
      </div>
      <nav className={`navigation ${isOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/courses" onClick={toggleMenu}>Courses</Link></li>
          <li><Link to="/schedule" onClick={toggleMenu}>Schedule</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </nav>
      <div className="menu-toggle" onClick={toggleMenu}>
        <FiMenu />
      </div>
      <div className="auth-buttons">
        <Link to="/signin" className="auth-button">Sign In</Link>
        <Link to="/register" className="auth-button">Register</Link>
      </div>
    </header>
  );
};

export default Header;
