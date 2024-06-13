import React, { useState } from 'react';
import "./AddCourse.css";
import upload_area from "../../assets/upload_area.svg";

const AddCourse = () => {
  const [image, setImage] = useState(null);
  const [courseDetails, setCourseDetails] = useState({
    name: "",
    description: "",
    price: "",
    duration: "",
    image: ""
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setCourseDetails({ ...courseDetails, [e.target.name]: e.target.value });
  };

  const addCourse = async () => {
    let responseData;
    let course = courseDetails;

    let formData = new FormData();
    formData.append('image', image);

    try {
      // Upload the image
      const responseImage = await fetch('http://localhost:4003/upload', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      responseData = await responseImage.json();
    } catch (error) {
      console.error('Error uploading image:', error);
      return;
    }

    if (responseData.success) {
      course.image = responseData.image_url;

      try {
        // Add the course
        const responseCourse = await fetch('http://localhost:4003/addcourse', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(course),
        });

        const data = await responseCourse.json();

        data.success ? alert('Course Added') : alert('Failed to Add');
      } catch (error) {
        console.error('Error adding course:', error);
        alert('Failed to Add');
      }
    }
  };

  return (
    <div className='add-course'>
      <div className="course-itemfield">
        <p>Course Name</p>
        <input value={courseDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' />
      </div>
      <div className="course-itemfield">
        <p>Description</p>
        <textarea value={courseDetails.description} onChange={changeHandler} name='description' placeholder='Type here'></textarea>
      </div>
      <div className="course-itemfield">
        <p>Price</p>
        <input value={courseDetails.price} onChange={changeHandler} type="text" name='price' placeholder='Type here' />
      </div>
      <div className="course-itemfield">
        <p>Duration</p>
        <input value={courseDetails.duration} onChange={changeHandler} type="text" name='duration' placeholder='Type here' />
      </div>
      <div className='course-itemfield'>
        <label htmlFor="file-input">
          <img src={image ? URL.createObjectURL(image) : upload_area} className='course-thumbnail-img' alt="upload area" />
        </label>
        <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
      </div>
      <button onClick={addCourse} className='add-course-btn'>ADD</button>
    </div>
  );
}

export default AddCourse;
