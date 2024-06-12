import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import './Events.css';

const Events = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:4003/events');
        const data = await response.json();
        if (data.success) {
          setEvents(data.events);
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const handleEventClick = (id) => {
    navigate(`/event/${id}`);
  };

  return (
    <div className="events">
      <div className="events-container">
        <h1>Upcoming Events</h1>
        <Slider {...settings}>
          {events.map((event, index) => (
            <div key={index} className="event-card" onClick={() => handleEventClick(event._id)}>
              <img src={event.image} alt={event.title} />
              <div className="event-details">
                <h2>{event.title}</h2>
                <p className="event-date">{event.date}</p>
                <p className="event-description">{event.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Events;
