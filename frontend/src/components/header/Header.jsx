// Header.jsx
import React from 'react';
import './Header.css'; // Import the CSS for this component

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/images/Logo.png" alt="Dhaka University Swimming Pools Logo" />
      </div>
      <nav className="navigation">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Courses</li>
          <li>Schedule</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button>Sign In</button>
        <button>Register</button>
      </div>
    </header>
  );
};

export default Header;
