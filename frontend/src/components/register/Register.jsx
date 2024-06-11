import React, { useState } from 'react';
import './Register.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Button2 from '../buttons/Button2';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    category: '',
    gender: '',
    dob: '',
    registrationNumber: '',
    password: '',
    confirmPassword: '', // New state for confirm password
  });

  const navigate = useNavigate(); // useNavigate instead of useHistory

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setFormData({ ...formData, showPassword: !formData.showPassword });
  };

  const toggleConfirmPasswordVisibility = () => {
    setFormData({ ...formData, showConfirmPassword: !formData.showConfirmPassword });
  };

  const handleSubmit = async () => {
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match. Please re-enter.');
      setFormData({ ...formData, password: '', confirmPassword: '' });
    } else {
      try {
        const response = await axios.post('/api/auth/register', formData);
        console.log('Form submitted:', response.data);
        // Handle successful registration (e.g., redirect to login page)
        navigate('/signin');
      } catch (error) {
        console.error('Error registering:', error);
        alert('Registration failed. Please try again.');
      }
    }
  };

  return (
    <div className="signup">
      <div className="signup-container">
        <h1>Swimmer Registration Form</h1>
        <div className="signup-fields">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={formData.name}
            id="name"
            name="name"
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={formData.email}
            id="email"
            name="email"
            onChange={handleChange}
            required
          />
          <label htmlFor="number">Mobile Number</label>
          <input
            type="text"
            value={formData.number}
            id="number"
            name="number"
            onChange={handleChange}
            required
          />
          <label htmlFor="category">Select a Swimmer Category:</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="Dhaka University Student">Dhaka University Student</option>
            <option value="DU Teacher/Officer/Employee/Their Family Member">DU Teacher/Officer/Employee/Their Family Member</option>
            <option value="BUET/DMC Student">BUET/DMC Student</option>
            <option value="Associate Member">Associate Member</option>
            <option value="General Swimmer">General Swimmer</option>
          </select>
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
          <label htmlFor="registrationNumber">Registration Number for DU Students</label>
          <input
            type="text"
            id="registrationNumber"
            name="registrationNumber"
            value={formData.registrationNumber}
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Password</label>
          <div className="password-input">
            <input
              type={formData.showPassword ? 'text' : 'password'}
              value={formData.password}
              id="password"
              name="password"
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="password-toggle"
              onClick={togglePasswordVisibility}
            >
              {formData.showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="password-input">
            <input
              type={formData.showConfirmPassword ? 'text' : 'password'}
              value={formData.confirmPassword}
              id="confirmPassword"
              name="confirmPassword"
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="confirm-password-toggle"
              onClick={toggleConfirmPasswordVisibility}
            >
              {formData.showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
        </div>
        <Button2 text="Submit" onClick={handleSubmit} className="signup-btn" />
        <div className="login-link">
          <span>Already have an account? </span>
          <Link to="/signin">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
