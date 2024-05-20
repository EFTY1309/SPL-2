import React from 'react';
import './MySchedule.css';

const MySchedule = () => {
  return (
    <div className="my-schedule">
      <div className="my-schedule-container">
        <h1>My Schedule</h1>
        <div className="schedule-list">
          <div className="schedule-item">
            <h2>Lesson 1</h2>
            <p>Date: June 1, 2024</p>
            <p>Time: 10:00 AM - 11:00 AM</p>
            <p>Instructor: John Doe</p>
          </div>
          <div className="schedule-item">
            <h2>Lesson 2</h2>
            <p>Date: June 3, 2024</p>
            <p>Time: 2:00 PM - 3:00 PM</p>
            <p>Instructor: Jane Smith</p>
          </div>
          {/* Add more schedule items as needed */}
        </div>
      </div>
    </div>
  );
};

export default MySchedule;
