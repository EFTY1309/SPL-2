import React, { useState } from 'react';
import "./CSS/Register.css"

const Register = () => {

  const [registrationType, setRegistrationType] = useState('');

 
  const [swimmerData, setSwimmerData] = useState({});
  const [adminData, setAdminData] = useState({
      name:"",
      email:"",
      number:"",
      professionalPosition:"",
      password:""
  });
  const [staffData, setStaffData] = useState({});


  const handleRegistrationTypeSelect = (type) => {
    setRegistrationType(type);
  };

  const handleSubmit = () => {
    
    switch (registrationType) {
      case 'swimmer':
        console.log('Swimmer form submitted:', swimmerData);
      
        break;
      case 'admin':
        console.log('Admin form submitted:', adminData);
    
        break;
      case 'staff':
        console.log('Staff form submitted:', staffData);
    
        break;
      default:
        console.log('No registration type selected');
    }
  };

  const signup=async()=>{
    console.log("Admin form submitted",adminData)
    let responseData;
    await fetch('http://localhost:4003/register',{
        method:'POST',
        headers:{
          Accept:'application/form-data',
          'Content-Type':'application/json',
        },
        body:JSON.stringify(adminData),    
    }).then((response)=>response.json()).then((data)=>responseData=data)
    
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }

  }


  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (registrationType) {
      case 'swimmer':
        setSwimmerData({ ...swimmerData, [name]: value });
        break;
      case 'admin':
        setAdminData({ ...adminData, [name]: value });
        break;
      case 'staff':
        setStaffData({ ...staffData, [name]: value });
        break;
      default:
        console.log('No registration type selected');
    }
  };

  const renderForm = () => {
    switch (registrationType) {
      case 'swimmer':
        return (
          <div>
            <h2>Swimmer Registration Form</h2>
            <label htmlFor="swimmerName">Name:</label>
            <input type="text" id="swimmerName" name="name" onChange={handleInputChange} />
            {/* Add more fields for swimmer registration */}
          </div>
        );
      case 'admin':
        return (
          <div>
            <h2>Admin Registration Form</h2>
            <label htmlFor="adminName">Name</label><br/>
            <input type="text" value={adminData.name} id="adminName" name="name" onChange={handleInputChange} /><br/>
            <label htmlFor="adminEmail">Email</label><br/>
            <input type="email" value={adminData.email} id="adminEmail" name="email" onChange={handleInputChange} /><br/>
            <label htmlFor="adminNumber">Number</label><br/>
            <input type="text" value={adminData.number} id="adminNumber" name="number" onChange={handleInputChange} /><br/>
            <label htmlFor="adminPosition">Professional Position</label><br/>
            <input type="text" value={adminData.professionalPosition} id="adminPosition" name="professionalPosition" onChange={handleInputChange} /><br/>
            <label htmlFor="adminPassword">Password</label><br/>
            <input type="password" value={adminData.password} id="adminPassword" name="password" onChange={handleInputChange} /><br/>
            <label htmlFor="adminConfirmPassword">Confirm Password</label><br/>
            <input type="password" id="adminConfirmPassword" name="confirm" onChange={handleInputChange} /><br/>
            {/* Add more fields for admin registration */}
          </div>
        );
      case 'staff':
        return (
          <div>
            <h2>Staff Registration Form</h2>
            <label htmlFor="staffName">Name:</label>
            <input type="text" id="staffName" name="name" onChange={handleInputChange} />
            {/* Add more fields for staff registration */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <h1>Registration</h1>
      {!registrationType && (
        <div className='registration-button'>
          <button onClick={() => handleRegistrationTypeSelect('swimmer')}>Swimmer Registration</button>
          <button onClick={() => handleRegistrationTypeSelect('admin')}>Admin Registration</button>
          <button onClick={() => handleRegistrationTypeSelect('staff')}>Staff Registration</button>
        </div>
      )}
      {registrationType && renderForm()}
      {registrationType && <button  onClick={signup}>Start Registration</button>}
    </div>
  );
}

export default Register






