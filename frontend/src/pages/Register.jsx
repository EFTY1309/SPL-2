import React, { useState } from 'react';
import "./CSS/Register.css"

const Register = () => {

  const [registrationType, setRegistrationType] = useState('');

 
  const [swimmerData, setSwimmerData] = useState({
      name:"",
      email:"",
      number:"",
      category:"",
      gender:"",
      dob:"",
      registrationNumber:"",
      password:"",
  });
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

  const signup = async () => {
    let responseData;
    let formData;
    
    switch (registrationType) {
        case 'swimmer':
            formData = swimmerData;
            break;
        case 'admin':
            formData = adminData;
            break;
        case 'staff':
            formData = staffData;
            break;
        default:
            console.log('No registration type selected');
            return;
    }

    await fetch('http://localhost:4003/register', {
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
        window.location.replace('/signin');
    } else {
        alert(responseData.errors);
    }
};


const handleInputChange = (event) => {
  const { name, value } = event.target;

  if (name === 'category') { // Handle category separately
      setSwimmerData({ ...swimmerData, category: value });
  } else {
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
  }
};


  const renderForm = () => {
    switch (registrationType) {
      case 'swimmer':
        return (
          <div className='swimmer-registration' >
            <h2>Swimmer Registration Form</h2>
            <label htmlFor="swimmerName">Name</label><br/>
            <input type="text" value={swimmerData.name} id="swimmerName" name="name" onChange={handleInputChange}  required /><br/>
            <label htmlFor="swimmerEmail">Email</label><br/>
            <input type="email" value={swimmerData.email} id="swimmerEmail" name="email" onChange={handleInputChange}  required /><br/>
            <label htmlFor="swimmerNumber">Number</label><br/>
            <input type="text" value={swimmerData.number} id="swimmerNumber" name="number" onChange={handleInputChange}  required /><br/>
            <label for="country">Select a swimmer category:</label><br/>
            <select id="swimmerCategory" name="category" value={swimmerData.category} onChange={handleInputChange} required><br/>
                  <option value="Dhaka University Student">Dhaka University Student</option>
                  <option value="Sri LankaDU Teacher/Officer/Employee/Their Family Member">DU Teacher/Officer/Employee/Their Family Member</option>
                  <option value="BUET/DMC Student">BUET/DMC Student</option>
                  <option value="BUET/DMC Student">BUET/DMC Student</option>
                  <option value="Associate Member">Associate Member</option>
                  <option value="General Swimmer">General Swimmer</option>
            </select>
            <br/>
            <label htmlFor="swimmerDOB">Date of Birth</label><br/>
            <input type="date" id="swimmerDOB" name="dob" value={swimmerData.dob} onChange={handleInputChange}  required/><br/> 
            <label htmlFor="swimmerRegistrationNumber">Registration Number for DU students</label><br/>
            <input type="text" id="swimmerRegistrationNumber" name="registrationNumber" value={swimmerData.registrationNumber} onChange={handleInputChange}  required /><br/>
            <label htmlFor="swimmerPassword">Password</label><br/>
            <input type="password" value={swimmerData.password} id="swimmerPassword" name="password" onChange={handleInputChange} /><br/> 
          </div>
        );
      case 'admin':
        return (
          <div className='swimmer-registration' >
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
          </div>
        );
      case 'staff':
        return (
          <div>
            <h2>Staff Registration Form</h2>
            <label htmlFor="staffName">Name:</label>
            <input type="text" id="staffName" name="name" onChange={handleInputChange} />
           
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
      {registrationType && <button className='submit'  onClick={signup}>Submit</button>}
    </div>
  );
}

export default Register






