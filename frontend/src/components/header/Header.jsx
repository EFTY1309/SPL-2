// Header.jsx
<<<<<<< HEAD
import React from 'react';
import './Header.css'; // Import the CSS for this component
import { Link } from 'react-router-dom'
=======
import React from "react";
import "./Header.css"; // Import the CSS for this component
import { Link } from "react-router-dom";

>>>>>>> Rafid

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
<<<<<<< HEAD
        <img src="/images/Logo.png" alt="Dhaka University Swimming Pools Logo" />
      </div>
      <nav className="navigation">
        <ul>
          <li><Link to="/home" style={{textDecoration:'none'}} >Home</Link></li>
          <li><Link to="/about" style={{textDecoration:'none'}} >About</Link></li>
          <li><Link to="/course" style={{textDecoration:'none'}} >Courses</Link></li>
          <li><Link to="/schedule" style={{textDecoration:'none'}} >Schedule</Link></li>
          <li><Link to="/contact" style={{textDecoration:'none'}} >Contact</Link></li>
        </ul>
      </nav>
      <div className="auth-buttons">
       <Link to="/signin"> <button>Sign In</button> </Link> 
       <Link to="/register"> <button>Register</button> </Link> 
      </div>
=======
        <Link to="/">
          <img
            src="/images/Logo.png"
            alt="Dhaka University Swimming Pools Logo"
          />
        </Link>
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

>>>>>>> Rafid
    </header>
  );
};

export default Header;

<<<<<<< HEAD
<Link to="/login" style={{textDecoration:'none'}}><button >Login</button> </Link>
=======
>>>>>>> Rafid
