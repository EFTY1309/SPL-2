import React, { useState } from 'react';
import axios from 'axios';
import './SignIn.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Button2 from '../buttons/Button2';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const navigate = useNavigate(); // useNavigate instead of useHistory

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setFormData({ ...formData, showPassword: !formData.showPassword });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/auth/login', formData);
      localStorage.setItem('auth-token', response.data.token);
      navigate('/'); // Use navigate instead of history.push
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <h1>Sign in to Dhaka University Swimming Pool</h1>
        <div className="login-fields">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={formData.email}
            id="email"
            name="email"
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
        </div>

        <div className="forgot-password">
          <Link to="/forgot-password">Forgot your password?</Link>
        </div>

        <Button2 text="Sign In" onClick={handleLogin} className="signin-btn" />

        <div className="signup-link">
          <span>Don't have an account? </span>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
