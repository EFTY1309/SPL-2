import React, { useState } from 'react';
import './SignIn.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button2 from '../buttons/Button2';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setFormData({ ...formData, showPassword: !formData.showPassword });
  };

  const login = async () => {
    console.log('Login function executed', formData);

    let responseData;
    await fetch('http://localhost:4003/login', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace('/');
    } else {
      alert(responseData.errors);
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
          <label htmlFor="password">Password
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
          </label>
        </div>

        <div className="forgot-password">
          <Link to="/forgot-password">Forgot your password?</Link>
        </div>

        <Button2 text="Sign In" to="/dashboard" className="signin-btn"/>

        <div className="signup-link">
          <span>Don't have an account? </span>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
