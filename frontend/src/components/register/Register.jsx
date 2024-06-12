import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Register.css";

const Register = () => {
  const [swimmerData, setSwimmerData] = useState({
    name: "",
    email: "",
    number: "",
    category: "",
    gender: "",
    dob: "",
    registrationNumber: "",
    password: "",
    confirmPassword: "",
    courses: []
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSwimmerData({ ...swimmerData, [name]: value });
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    let updatedCourses = [...swimmerData.courses];
    if (checked) {
      updatedCourses.push(value);
    } else {
      updatedCourses = updatedCourses.filter((course) => course !== value);
    }
    setSwimmerData({ ...swimmerData, courses: updatedCourses });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const signup = async () => {
    const { password, confirmPassword, email } = swimmerData;

    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      console.log('Sending swimmer data:', swimmerData); // Log data being sent

      const response = await fetch('http://localhost:4003/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(swimmerData),
      });

      const responseData = await response.json();
      console.log('Response data:', responseData); // Log response data

      if (response.ok) {
        navigate('/signin', { state: { user: responseData.user } });
      } else {
        alert(responseData.errors);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="signup">
      <div className="signup-container">
        <h1>Swimmer Registration Form</h1>
        <div className="signup-fields">
          <label htmlFor="swimmerName">Name</label>
          <input type="text" value={swimmerData.name} id="swimmerName" name="name" onChange={handleInputChange} required />
          <label htmlFor="swimmerEmail">Email</label>
          <input type="email" value={swimmerData.email} id="swimmerEmail" name="email" onChange={handleInputChange} required />
          <label htmlFor="swimmerNumber">Number</label>
          <input type="text" value={swimmerData.number} id="swimmerNumber" name="number" onChange={handleInputChange} required />
          <label htmlFor="swimmerCategory">Select a Swimmer Category:</label>
          <select id="swimmerCategory" name="category" value={swimmerData.category} onChange={handleInputChange} required>
            <option className='option' value="">Select Category</option>
            <option className='option' value="Dhaka University Student">Dhaka University Student</option>
            <option className='option' value="DU Teacher/Officer/Employee/Their Family Member">DU Teacher/Officer/Employee/Their Family Member</option>
            <option className='option' value="BUET/DMC Student">BUET/DMC Student</option>
            <option className='option' value="Associate Member">Associate Member</option>
            <option className='option' value="General Swimmer">General Swimmer</option>
          </select>
          <label htmlFor="swimmerDOB">Date of Birth</label>
          <input type="date" id="swimmerDOB" name="dob" value={swimmerData.dob} onChange={handleInputChange} required/>
          <label htmlFor="swimmerRegistrationNumber">Registration Number for DU Students</label>
          <input type="text" id="swimmerRegistrationNumber" name="registrationNumber" value={swimmerData.registrationNumber} onChange={handleInputChange} required />
          <label htmlFor="swimmerPassword">Password</label>
          <input type="password" value={swimmerData.password} id="swimmerPassword" name="password" onChange={handleInputChange} required />
          <label htmlFor="swimmerConfirmPassword">Confirm Password</label>
          <input type="password" value={swimmerData.confirmPassword} id="swimmerConfirmPassword" name="confirmPassword" onChange={handleInputChange} required />
          <fieldset>
            <legend className='select-course'>Select Courses:</legend>
            <label>
              <input type="checkbox" value="Butterfly" onChange={handleCheckboxChange} />
              Butterfly
            </label><br/>
            <label>
              <input type="checkbox" value="Backstroke" onChange={handleCheckboxChange} />
              Backstroke
            </label><br/>
            <label>
              <input type="checkbox" value="Freestyle" onChange={handleCheckboxChange} />
              Freestyle
            </label><br/>
          </fieldset>
        </div>
        <button className='signup-btn' onClick={signup}>Submit</button>
        <div className="login-link">
          <span>Already have an account? </span>
          <a href="/signin">Sign In</a>
        </div>
      </div>
    </div>
  );
};

export default Register;
