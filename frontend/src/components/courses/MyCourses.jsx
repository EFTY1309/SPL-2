import React from 'react';
import './MyCourses.css';
import Button2 from '../buttons/Button2';

const MyCourses = () => {
  return (
    <div className="my-courses">
      <div className="my-courses-container">
        <h1>My Courses</h1>
        <div className="course-list">
          <div className="course-item">
            <h2>Beginner Swimming</h2>
            <p>Instructor: John Doe</p>
            <p>Duration: 8 weeks</p>
            <p>Next Lesson: June 1, 2024</p>
          </div>
          <div className="course-item">
            <h2>Advanced Swimming</h2>
            <p>Instructor: Jane Smith</p>
            <p>Duration: 10 weeks</p>
            <p>Next Lesson: June 3, 2024</p>
          </div>
          {/* Add more course items as needed */}
        </div>

        <Button2 text="Add New Courses" to="/courses" className="my-courses-btn" /> 
      </div>
    </div>
  );
};

export default MyCourses;

