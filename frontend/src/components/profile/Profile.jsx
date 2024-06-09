import React from 'react';
import './Profile.css';
import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt } from 'react-icons/fa';
import Button2 from '../buttons/Button2';

const Profile = () => {
  // Mock user data
  const userData = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    dob: '1990-01-01', // Date of Birth
  };

  return (
    <div className="profile">
      <div className="profile-container">
        <h1>My Profile</h1>
        <div className="profile-info">
          <ProfileItem icon={<FaUser />} label="Name" value={userData.name} />
          <ProfileItem icon={<FaEnvelope />} label="Email" value={userData.email} />
          <ProfileItem icon={<FaPhone />} label="Phone" value={userData.phone} />
          <ProfileItem icon={<FaCalendarAlt />} label="Date of Birth" value={userData.dob} />
        </div>
        <Button2 text="Change Profile" to="/update-profile" className="change-profile-btn"/>
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
