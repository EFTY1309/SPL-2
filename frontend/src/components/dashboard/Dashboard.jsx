// Dashboard.jsx

import React from 'react';
import "./Dashboard.css";
import { Link } from "react-router-dom";
import Button1 from '../buttons/Button1';

const Dashboard = () => {
  return (
        <div className="dashboard-container">
          <div className="swimming-journey">
            <div className="glass-box">
                <h3>MANAGE YOUR SWIMMING JOURNEY</h3> 
                <p>Dive into the world of swimming</p>
                <Button1 text="Enroll Courses" to="/courses"/> 
            </div>
            <img
              src="../../../public/images/DU_swimming_pool3.jpg"
              alt="Swimming Pool"
            />
        </div>

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h2 className="dashboard-card-heading">My Profile</h2>
            <p className="dashboard-card-description">View and update your profile information</p>
            <Link to="/profile" className="dashboard-link">Go to Profile</Link>
          </div>
          <div className="dashboard-card">
            <h2 className="dashboard-card-heading">My Schedule</h2>
            <p className="dashboard-card-description">See your swimming schedule</p>
            <Link to="/schedule" className="dashboard-link">View Schedule</Link>
          </div>
          <div className="dashboard-card">
            <h2 className="dashboard-card-heading">My Courses</h2>
            <p className="dashboard-card-description">See your enrolled courses and add new courses</p>
            <Link to="/yourcourses" className="dashboard-link">View Courses</Link>
          </div>
          <div className="dashboard-card">
            <h2 className="dashboard-card-heading">Swimming Lessons</h2>
            <p className="dashboard-card-description">See swimming lessons for your enrolled courses</p>
            <Link to="/lessons" className="dashboard-link">View Lessons</Link>
          </div>
          <div className="dashboard-card">
            <h2 className="dashboard-card-heading">Events</h2>
            <p className="dashboard-card-description">Check out upcoming swimming pool events</p>
            <Link to="/events" className="dashboard-link">View Events</Link>
          </div>
          <div className="dashboard-card">
            <h2 className="dashboard-card-heading">Payment</h2>
            <p className="dashboard-card-description">See your payment status and dues</p>
            <Link to="/payment" className="dashboard-link">View Payment</Link>
          </div>
        </div>
    </div>

  );
};

export default Dashboard;
