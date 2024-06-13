import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EventDetail.css';

const EventDetail = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`http://localhost:3001/events/${eventId}`);
        const data = await response.json();
        if (data.success) {
          setEvent(data.event);
        }
      } catch (error) {
        console.error('Error fetching event:', error);
      }
    };

    fetchEvent();
  }, [eventId]);

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="event-detail">
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <p className="event-date">{event.date}</p>
      <p className="event-description">{event.description}</p>
      <button className="btn" onClick={() => alert('Navigating to event...')}>Go to Event</button>
      <button className="btn" onClick={() => navigate('/')}>Back to Events</button>
    </div>
  );
};

export default EventDetail;
