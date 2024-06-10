import React, { useEffect, useState } from 'react';
import './MyCourses.css';

const MyCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const courseDetails = {
    "Butterfly": { price: "$50", duration: "3 months" },
    "Backstroke": { price: "$45", duration: "2 months" },
    "Freestyle": { price: "$40", duration: "2 months" },
    // Add other course details as needed
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:4003/user-courses', {
          method: 'GET',
          headers: {
            'x-auth-token': localStorage.getItem('auth-token'),
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCourses(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="centered-container"> {/* New container div */}
      <div className="courses-container">
        <h1 className='cs1'>My Courses</h1>
        {courses.length === 0 ? (
          <p>You have not enrolled in any courses yet.</p>
        ) : (
          <ul className='course-list'>
            {courses.map((course, index) => {
              const details = courseDetails[course] || { price: "N/A", duration: "N/A" };
              return (
                <li className='course-item' key={index}>
                  <div className='course-details'>
                    <h2 className='cs'>{course}</h2>
                    <p className='cs'>Price: {details.price}</p>
                    <p className='cs'>Duration: {details.duration}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MyCourses;
