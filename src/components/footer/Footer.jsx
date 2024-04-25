// Footer.jsx
import React from 'react';
import './Footer.css'; // Import the CSS for this component

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2023 Dhaka University Swimming Pools. All rights reserved.</p>
      <div className="footer-links">
        <a href="#" className="link">Home</a>
        <a href="#" className="link">Courses</a>
        <a href="#" className="link">Schedule</a>
        <a href="#" className="link">About</a>
        <a href="#" className="link">Contact</a>
        {/* Add more links here */}
      </div>
    </footer>
  );
};

export default Footer;
