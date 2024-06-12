import React, { useState } from 'react';
import "./AddEvent.css";
import upload_area from "../../assets/upload_area.svg";

const AddEvent = () => {
  console.log("Event added");
  const [image, setImage] = useState(null);
  const [eventDetails, setEventDetails] = useState({
    name: "",
    date: "",
    description: "",
    image: ""
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setEventDetails({ ...eventDetails, [e.target.name]: e.target.value });
  };

  const addEvent = async () => {
    let responseData;
    let event = eventDetails;

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
      event.image = responseData.image_url;

      try {
        // Add the event
        const responseEvent = await fetch('http://localhost:4003/addevent', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(event),
        });

        const data = await responseEvent.json();

        data.success ? alert('Event Added') : alert('Failed to Add');
      } catch (error) {
        console.error('Error adding event:', error);
        alert('Failed to Add');
      }
    }
  };

  return (
    <div className='add-event'>
      <div className="event-itemfield">
        <p>Event Name</p>
        <input value={eventDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' />
      </div>
      <div className="event-itemfield">
        <p>Event Date</p>
        <input value={eventDetails.date} onChange={changeHandler} type="date" name='date' placeholder='Type here' />
      </div>
      <div className="event-itemfield">
        <p>Description</p>
        <textarea value={eventDetails.description} onChange={changeHandler} name='description' placeholder='Type here'></textarea>
      </div>
      <div className='event-itemfield'>
        <label htmlFor="file-input">
          <img src={image ? URL.createObjectURL(image) : upload_area} className='event-thumbnail-img' alt="upload area" />
        </label>
        <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
      </div>
      <button onClick={addEvent} className='add-event-btn'>ADD</button>
    </div>
  );
}

export default AddEvent;
