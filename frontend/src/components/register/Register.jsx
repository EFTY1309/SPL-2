import React, { useState } from 'react';
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
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSwimmerData({ ...swimmerData, [name]: value });
  };

  const signup = async () => {
    try {
      const response = await fetch('http://localhost:4003/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(swimmerData),
      });

      const responseData = await response.json();

      if (response.ok) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace('/signin');
      } else {
        alert(responseData.errors);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="App">
      <h1>Swimmer Registration</h1>
      <div className='swimmer-registration'>
        <h2>Swimmer Registration Form</h2>
        <label htmlFor="swimmerName">Name</label><br/>
        <input type="text" value={swimmerData.name} id="swimmerName" name="name" onChange={handleInputChange} required /><br/>
        <label htmlFor="swimmerEmail">Email</label><br/>
        <input type="email" value={swimmerData.email} id="swimmerEmail" name="email" onChange={handleInputChange} required /><br/>
        <label htmlFor="swimmerNumber">Number</label><br/>
        <input type="text" value={swimmerData.number} id="swimmerNumber" name="number" onChange={handleInputChange} required /><br/>
        <label htmlFor="swimmerCategory">Select a swimmer category:</label><br/>
        <select id="swimmerCategory" name="category" value={swimmerData.category} onChange={handleInputChange} required>
          <option value="Dhaka University Student">Dhaka University Student</option>
          <option value="DU Teacher/Officer/Employee/Their Family Member">DU Teacher/Officer/Employee/Their Family Member</option>
          <option value="BUET/DMC Student">BUET/DMC Student</option>
          <option value="Associate Member">Associate Member</option>
          <option value="General Swimmer">General Swimmer</option>
        </select><br/>
        <label htmlFor="swimmerDOB">Date of Birth</label><br/>
        <input type="date" id="swimmerDOB" name="dob" value={swimmerData.dob} onChange={handleInputChange} required/><br/>
        <label htmlFor="swimmerRegistrationNumber">Registration Number for DU students</label><br/>
        <input type="text" id="swimmerRegistrationNumber" name="registrationNumber" value={swimmerData.registrationNumber} onChange={handleInputChange} required /><br/>
        <label htmlFor="swimmerPassword">Password</label><br/>
        <input type="password" value={swimmerData.password} id="swimmerPassword" name="password" onChange={handleInputChange} /><br/>
      </div>
      <button className='submit' onClick={signup}>Submit</button>
    </div>
  );
}

export default Register;
