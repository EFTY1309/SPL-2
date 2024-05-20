import React from 'react';
import './AboutUs.css';
import TeamMember from './TeamMember';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-container">
        <h1>About Us</h1>
        <section className="about-us-intro">
          <p>
            Welcome to the Dhaka University Swimming Pool. Our facility is dedicated to providing a safe, clean, and enjoyable environment for swimmers of all ages and skill levels. Located in the heart of the Dhaka University campus, we offer a range of services to cater to the needs of our community.
          </p>
        </section>

        <section className="our-mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is to promote aquatic education and fitness through quality swim programs and services. We strive to inspire individuals to achieve their personal best in a supportive and inclusive environment.
          </p>
        </section>

        <section className="our-history">
          <h2>Our History</h2>
          <p>
            Established in 1990, the Dhaka University Swimming Pool has been a cornerstone of aquatic sports in the region. Over the years, we have trained numerous athletes who have gone on to compete at national and international levels. Our commitment to excellence has made us a premier destination for swimming enthusiasts.
          </p>
        </section>

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

        <section className="meet-the-team">
          <h2>Meet the Team</h2>
          <div className="team-members">
            <TeamMember name="John Doe" position="Head Coach" bio="John has over 20 years of experience in coaching swimmers of all levels. His passion for swimming and dedication to his students are unmatched." />
            <TeamMember name="Jane Smith" position="Assistant Coach" bio="Jane specializes in training young swimmers and has been a part of our team for the last 10 years. Her approach to teaching ensures that every student feels confident in the water." />
            <TeamMember name="Emily Johnson" position="Facility Manager" bio="Emily manages the daily operations of our facility, ensuring that everything runs smoothly and our pool remains a top-notch facility." />
          </div>
        </section>

        <section className="contact">
          <h2>Contact Us</h2>
          <p>If you have any questions or would like to learn more about our services, please feel free to <a href="/contact">contact us</a>.</p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
