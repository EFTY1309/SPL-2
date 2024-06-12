import React, { useEffect, useState } from 'react';
import './MyCourses.css';

const MyCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({
    name: '',
    email: ''
  });

  const courseDetails = {
    "Butterfly": { price: 2000, duration: "3 months" },
    "Backstroke": { price: 3000, duration: "2 months" },
    "Freestyle": { price: 1000, duration: "2 months" },
    // Add other course details as needed
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('auth-token');
        if (!token) {
          throw new Error('No token found in local storage');
        }

        const response = await fetch('http://localhost:4003/profile', {
          method: 'GET',
          headers: {
            'x-auth-token': token,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setUserData(result);
        console.log('User Data:', result.email); // Debug line to ensure data is transferred
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem('auth-token');
        console.log('Auth token:', token); // Debug line
        if (!token) {
          throw new Error('No token found in local storage');
        }

        const response = await fetch('http://localhost:4003/user-courses', {
          method: 'GET',
          headers: {
            'x-auth-token': token,
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

    fetchProfile();
    fetchCourses();
  }, []);

  const onSubmit = () => {
    const totalAmount = courses.reduce((total, course) => {
      const details = courseDetails[course] || { price: 0 };
      return total + details.price;
    }, 0);

    console.log("Total Amount:", totalAmount);

    const token = localStorage.getItem('auth-token');
    if (!token) {
      console.error('No auth token found, cannot proceed with payment');
      return;
    }

    const paymentData = {
      total_amount: totalAmount,
      user: userData
    };

    console.log("Payment Data:", paymentData); // Log the data being sent

    fetch("http://localhost:4003/order", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "x-auth-token": token, // Include the auth token here
      },
      body: JSON.stringify(paymentData), // Send user data with the request
    })
    .then((res) => res.json())
    .then((result) => {
      const { url, trans_id, paymentData } = result;

      // Store paymentData in local storage
      localStorage.setItem(`paymentData_${trans_id}`, JSON.stringify(paymentData));

      // Redirect to the payment gateway URL
      window.location.replace(url);
      console.log(result);
    })
    .catch((error) => {
      console.error('Error processing payment:', error);
    });
  };

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
                    <p className='cs'>Price: {details.price} BDT</p>
                    <p className='cs'>Duration: {details.duration}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
        {courses.length > 0 && <button className='cs' onClick={onSubmit}>Pay Now</button>}
      </div>
    </div>
  );
};

export default MyCourses;
