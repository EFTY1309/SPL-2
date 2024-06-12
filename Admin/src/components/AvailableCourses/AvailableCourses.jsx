import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AvailableCourses.css';

const AvailableCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:4003/courses');
        setCourses(response.data.courses);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setError('Failed to fetch courses');
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const toggleExpand = (courseId) => {
    setExpanded((prevState) => ({
      ...prevState,
      [courseId]: !prevState[courseId],
    }));
  };

  const truncateDescription = (description) => {
    const words = description.split(' ');
    if (words.length <= 10) return description;
    return words.slice(0, 10).join(' ') + '...';
  };

  const removeCourse = async (courseName) => {
    try {
      await axios.delete('http://localhost:4003/courses', {
        data: { name: courseName },
      });
      setCourses(courses.filter((course) => course.name !== courseName));
    } catch (error) {
      console.error('Error removing course:', error);
      setError('Failed to remove course');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Available Courses</h1>
      <table className="courses-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Duration</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course._id}>
              <td>{course.name}</td>
              <td>
                {expanded[course._id]
                  ? course.description
                  : truncateDescription(course.description)}
                {course.description.split(' ').length > 10 && (
                  <button onClick={() => toggleExpand(course._id)}>
                    {expanded[course._id] ? 'See Less' : 'See More'}
                  </button>
                )}
              </td>
              <td>{course.price}</td>
              <td>{course.duration}</td>
              <td>
                <img src={course.image} alt={course.name} className="course-image" />
              </td>
              <td>
                <button onClick={() => removeCourse(course.name)} className="remove-button">
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AvailableCourses;
