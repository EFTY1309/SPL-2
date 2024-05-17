import React, { useState } from 'react';
import './ContactUs.css';
import Button2 from '../buttons/Button2';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Message sent successfully');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message');
      }
    } catch (error) {
      alert('An error occurred while sending the message');
    }
  };

  return (
    <div className="contact-us">
      <div className="contact-us-container">
        <h1>Contact Us</h1>
        <div className="contact-info">
          <div className="info-item">
            <div className="icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="text">
              <div className="label">Address:</div>
              <div className="value">Dhaka University Campus, Alongside with DU Central Field, Dhaka-1000.</div>
            </div>
          </div>
          <div className="info-item">
            <div className="icon">
              <i className="fas fa-phone"></i>
            </div>
            <div className="text">
              <div className="label">Phone:</div>
              <div className="value">+1 (123) 456-7890</div>
            </div>
          </div>
          <div className="info-item">
            <div className="icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="text">
              <div className="label">Email:</div>
              <div className="value">info@example.com</div>
            </div>
          </div>
        </div>

        <div>
          <iframe 
            title="DU Swimming Pool Map" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.2356685409425!2d90.38385881539274!3d23.73328138459635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8f27029a1f3%3A0x6f3d2f4ad18aa7c0!2sDhaka%20University%20Swimming%20Pool!5e0!3m2!1sen!2sbd!4v1597315876487!5m2!1sen!2sbd" 
            width="100%" 
            height="450" 
            className="map-iframe" 
            allowFullScreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="contact-form">
          <h1>Send us a Message</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                value={formData.message} 
                onChange={handleChange} 
                required 
              ></textarea>
            </div>
            <Button2 text="Send Message" to="#" className="contact-us-btn"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
