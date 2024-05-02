// Footer.jsx
import React from 'react';
import './Footer.css'; // Import the CSS for this component

const Footer = () => {
  return (
    <footer className="footer-no-margin">
        <div className="container">
            <div className="footer-content">
                <h3>Contact Us</h3>
                <p><i className="fa-solid fa-envelope"></i>&nbsp;&nbsp;&nbsp;&nbsp;Info@example.com</p>
                <p><i className="fa-solid fa-phone"></i>&nbsp;&nbsp;&nbsp;&nbsp;+506 6233-5000</p>
                <p><i class="fa-solid fa-location-dot"></i>&nbsp;&nbsp;&nbsp;&nbsp;Dhaka University &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Campus, Dhaka-1000.</p>
            </div>
            <div className="footer-content">
                <h3>Quick Links</h3>
                 <ul className="list">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Courses</a></li>
                    <li><a href="">Schedule</a></li>
                    <li><a href="">Contact</a></li>
                 </ul>
            </div>
            <div className="footer-content">
                <h3>Follow Us</h3>
                <ul className="social-icons">
                 <li><a href=""><i className="fab fa-facebook"></i></a></li>
                 <li><a href=""><i className="fab fa-twitter"></i></a></li>
                 <li><a href=""><i className="fab fa-instagram"></i></a></li>
                 <li><a href=""><i className="fab fa-linkedin"></i></a></li>
                </ul>
              </div>
        </div>
        <div className="bottom-bar">
            <p>&copy; 2024 Dhaka University Swiming Pool. All rights reserved</p>
        </div>
    </footer>
  );
};

export default Footer;