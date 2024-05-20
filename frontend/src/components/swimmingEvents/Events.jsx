import React from 'react';
import Slider from 'react-slick';
import './Events.css';

const Events = () => {
  const events = [
    {
      title: 'Summer Pool Party',
      date: 'June 15, 2024',
      description: 'Join us for a fun summer pool party with games, music, and refreshments.',
      image: '/path/to/event1.jpg'
    },
    {
      title: 'Swimming Championship',
      date: 'July 20, 2024',
      description: 'Come and watch the exciting swimming championship with participants from various regions.',
      image: '/path/to/event2.jpg'
    },
    {
      title: 'Family Fun Day',
      date: 'August 5, 2024',
      description: 'A day full of fun activities for the whole family at the pool.',
      image: '/path/to/event3.jpg'
    }
  ];

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

  return (
    <div className="events">
      <div className="events-container">
        <h1>Upcoming Events</h1>
        <Slider {...settings}>
          {events.map((event, index) => (
            <div key={index} className="event-card">
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
