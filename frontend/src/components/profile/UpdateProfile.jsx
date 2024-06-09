// UpdateProfile.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UpdateProfile.css';
import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt } from 'react-icons/fa';
import Button2 from '../buttons/Button2';

const UpdateProfile = ({ userData }) => {
  const [updatedData, setUpdatedData] = useState(userData || {}); // Use empty object as fallback
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUpdatedData({ ...updatedData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your update profile logic here, e.g., send updatedData to the backend
    console.log('Updated Profile:', updatedData);
    navigate('/profile');
  };

  return (
    <div className="update-profile">
      <div className="update-profile-container">
        <h1>Update Profile</h1>
        <form onSubmit={handleSubmit}>
          <ProfileItem icon={<FaUser />} label="Name" name="name" value={updatedData.name || ''} onChange={handleChange} />
          <ProfileItem icon={<FaEnvelope />} label="Email" name="email" value={updatedData.email || ''} onChange={handleChange} />
          <ProfileItem icon={<FaPhone />} label="Phone" name="phone" value={updatedData.phone || ''} onChange={handleChange} />
          <ProfileItem icon={<FaCalendarAlt />} label="Date of Birth" name="dob" value={updatedData.dob || ''} onChange={handleChange} />
          <div className="btn-container">
            <Button2 text="Update" to="/update-profile" className="update-profile-btn"/>
            <Button2 text="Cancel" to="/profile" className="cancel-update-profile-btn"/>
          </div>
        </form>
      </div>
    </div>
  );
};

const ProfileItem = ({ icon, label, name, value, onChange }) => {
  return (
    <div className="profile-item">
      <div className="icon">{icon}</div>
      <div className="text">
        <div className="label">{label}</div>
        <input type="text" name={name} value={value} onChange={onChange} />
      </div>
    </div>
  );
};

export default UpdateProfile;
