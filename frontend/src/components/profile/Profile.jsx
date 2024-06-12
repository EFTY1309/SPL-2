import React, { useState, useEffect } from 'react';
import './Profile.css';
import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt } from 'react-icons/fa';
import Button2 from '../buttons/Button2';

const Profile = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
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
    <div className="profile">
      <div className="profile-container">
        <h1>Profile</h1>
        <div className="profile-info">
          <ProfileItem icon={<FaUser />} label="Name" value={userData.name} />
          <ProfileItem icon={<FaEnvelope />} label="Email" value={userData.email} />
          <ProfileItem icon={<FaPhone />} label="Phone" value={userData.phone || 'Not provided'} />
          <ProfileItem icon={<FaCalendarAlt />} label="DOB" value={new Date(userData.dob).toLocaleDateString()} />
        </div>
        <div className="btn-container">
          <Button2 text="Edit Profile" to="/update-profile" className="update-profile-btn"/>
        </div>
      </div>
    </div>
  );
};

const ProfileItem = ({ icon, label, value }) => {
  return (
    <div className="profile-item">
      <div className="icon">{icon}</div>
      <div className="text">
        <div className="label">{label}</div>
        <div className="value">{value}</div>
      </div>
    </div>
  );
};

export default Profile;
