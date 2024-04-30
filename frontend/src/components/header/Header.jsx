// Header.jsx
import React from 'react';
import './Header.css'; // Import the CSS for this component
import { Link } from 'react-router-dom'

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
       <Link to="/signin"> <button>Sign In</button> </Link> 
       <Link to="/register"> <button>Register</button> </Link> 
      </div>
    </header>
  );
};

export default Header;

<Link to="/login" style={{textDecoration:'none'}}><button >Login</button> </Link>
