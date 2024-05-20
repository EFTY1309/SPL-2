import React from 'react';
import "./Dashboard.css";
import Button1 from '../buttons/Button1';
import Button2 from '../buttons/Button2';

const Dashboard = () => {
  return (
        <div className="dashboard-container">
          <div className="swimming-journey">
            <div className="glass-box-dashboard">
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
              <Button2 text="Go to Profile" to="/profile" />
            </div>
            <div className="dashboard-card">
              <h2 className="dashboard-card-heading">My Schedule</h2>
              <p className="dashboard-card-description">See your swimming schedule</p>
              <Button2 text="View Schedule" to="/my-schedule" />
            </div>
            <div className="dashboard-card">
              <h2 className="dashboard-card-heading">My Courses</h2>
              <p className="dashboard-card-description">See your enrolled courses and add new courses</p>
              <Button2 text="View Courses" to="/my-courses" />
            </div>
            <div className="dashboard-card">
              <h2 className="dashboard-card-heading">Swimming Lessons</h2>
              <p className="dashboard-card-description">See swimming lessons for your enrolled courses</p>
              <Button2 text="View Lessons" to="/swimming-lessons" />
            </div>
            <div className="dashboard-card">
              <h2 className="dashboard-card-heading">Events</h2>
              <p className="dashboard-card-description">Check out upcoming swimming pool events</p>
              <Button2 text="View Events" to="/events" />
            </div>
            <div className="dashboard-card">
              <h2 className="dashboard-card-heading">Payment</h2>
              <p className="dashboard-card-description">See your payment status and dues</p>
              <Button2 text="View Payment" to="/payment" />
            </div>
          </div>
        </div>

  );
};

export default Dashboard;
