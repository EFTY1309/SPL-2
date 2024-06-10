import React, { useState, useEffect } from 'react';
import './Profile.css';
import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt } from 'react-icons/fa';
import Button2 from '../buttons/Button2';

const Profile = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '', // Ensure this matches the backend
    dob: '',
  });

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('auth-token');
      const response = await fetch('http://localhost:4003/profile', {
        method: 'GET',
        headers: {
          'x-auth-token': token,
        },
      });
      const result = await response.json();
      setUserData(result);
    };

    fetchProfile();
  }, []);

 

   return (
    <div className="profile-container">
      <div className="profile-card">
        <h1>Profile</h1>
        <div className="profile-info">
          <div className="profile-item">
            <FaUser className="profile-icon" />
            <span className="profile-label">Name:</span>
            <span className="profile-value">{userData.name}</span>
          </div>
          <div className="profile-item">
            <FaEnvelope className="profile-icon" />
            <span className="profile-label">Email:</span>
            <span className="profile-value">{userData.email}</span>
          </div>
          <div className="profile-item">
            <FaPhone className="profile-icon" />
            <span className="profile-label">Phone:</span>
            <span className="profile-value">{userData.phone || 'Not provided'}</span>
          </div>
          <div className="profile-item">
            <FaCalendarAlt className="profile-icon" />
            <span className="profile-label">DOB:</span>
            <span className="profile-value">{new Date(userData.dob).toLocaleDateString()}</span>
          </div>
        </div>
        <Button2 text="Edit Profile" to="/update-profile" />
      </div>
    </div>
  );
};

export default Profile;
