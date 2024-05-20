import React from 'react';
import './AboutUs.css';
import TeamMember from './TeamMember';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const AboutUs = () => {
  const teamMembers = [
    { name: "John Doe", position: "Head Coach", bio: "John has over 20 years of experience in coaching swimmers of all levels. His passion for swimming and dedication to his students are unmatched." },
    { name: "Jane Smith", position: "Assistant Coach", bio: "Jane specializes in training young swimmers and has been a part of our team for the last 10 years. Her approach to teaching ensures that every student feels confident in the water." },
    { name: "Emily Johnson", position: "Facility Manager", bio: "Emily manages the daily operations of our facility, ensuring that everything runs smoothly and our pool remains a top-notch facility." },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  return (
    <div className="about-us">
      <div className="about-us-container">
        <div className="about-us-box">
          <section className="about-us-intro">
            <h2>About Us</h2>
            <p>
              Welcome to the Dhaka University Swimming Pool. Our facility is dedicated to providing a safe, clean, and enjoyable environment for swimmers of all ages and skill levels. Located in the heart of the Dhaka University campus, we offer a range of services to cater to the needs of our community.
            </p>
          </section>
        </div>

        <div className="about-us-box">
          <section className="our-mission">
            <h2>Our Mission</h2>
            <p>
              Our mission is to promote aquatic education and fitness through quality swim programs and services. We strive to inspire individuals to achieve their personal best in a supportive and inclusive environment.
            </p>
          </section>
        </div>

        <div className="about-us-box">
          <section className="our-history">
            <h2>Our History</h2>
            <p>
              Established in 1990, the Dhaka University Swimming Pool has been a cornerstone of aquatic sports in the region. Over the years, we have trained numerous athletes who have gone on to compete at national and international levels. Our commitment to excellence has made us a premier destination for swimming enthusiasts.
            </p>
          </section>
        </div>

        <div className="about-us-box">
          <section className="services-offered">
            <h2>Services Offered</h2>
            <ul>
              <li>Open Swim Sessions</li>
              <li>Swimming Lessons for All Ages</li>
              <li>Competitive Swim Training</li>
              <li>Aqua Aerobics</li>
              <li>Pool Rental for Events</li>
            </ul>
          </section>
        </div>

        <div className="about-us-box">
          <section className="meet-the-team">
            <h2>Meet the Team</h2>
            <Carousel responsive={responsive} infinite={true} className="carousel">
              {teamMembers.map((member, index) => (
                <TeamMember key={index} name={member.name} position={member.position} bio={member.bio} />
              ))}
            </Carousel>
          </section>
        </div>

        <div className="about-us-box">
          <section className="contact">
            <h2>Contact Us</h2>
            <p>If you have any questions or would like to learn more about our services, please feel free to <a href="/contact">contact us</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
