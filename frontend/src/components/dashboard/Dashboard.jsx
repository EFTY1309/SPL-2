// Dashboard.jsx

import React from 'react';
import "./Dashboard.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-heading">Welcome to Your Dashboard</h1>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h2 className="dashboard-card-heading">My Profile</h2>
          <p className="dashboard-card-description">View and update your profile information</p>
          <Link to="/profile" className="dashboard-link">Go to Profile</Link>
        </div>
        <div className="dashboard-card">
          <h2 className="dashboard-card-heading">My Schedule</h2>
          <p className="dashboard-card-description">View your swimming schedule</p>
          <Link to="/schedule" className="dashboard-link">View Schedule</Link>
        </div>
        <div className="dashboard-card">
          <h2 className="dashboard-card-heading">Track Progress</h2>
          <p className="dashboard-card-description">Track your swimming progress</p>
          <Link to="/progress" className="dashboard-link">Track Progress</Link>
        </div>
        <div className="dashboard-card">
          <h2 className="dashboard-card-heading">Swimming Lessons</h2>
          <p className="dashboard-card-description">Sign up for swimming lessons</p>
          <Link to="/lessons" className="dashboard-link">View Lessons</Link>
        </div>
        <div className="dashboard-card">
          <h2 className="dashboard-card-heading">Events</h2>
          <p className="dashboard-card-description">Check out upcoming swimming events</p>
          <Link to="/events" className="dashboard-link">View Events</Link>
        </div>
        <div className="dashboard-card">
          <h2 className="dashboard-card-heading">Community</h2>
          <p className="dashboard-card-description">Connect with other swimmers in the community</p>
          <Link to="/community" className="dashboard-link">Join Community</Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
