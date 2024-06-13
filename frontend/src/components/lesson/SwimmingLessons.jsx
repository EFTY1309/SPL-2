import React from 'react';
import './SwimmingLessons.css';

const SwimmingLessons = () => {
  return (
    <div className="swimming-lessons">
      <div className="swimming-lessons-container">
        <h1>Swimming Lessons Resources</h1>

        <div className="resources">
          <div className="resources-section">
            <h2>PDFs</h2>
            <ul>
              <li><a href="/path/to/pdf1.pdf" target="_blank" rel="noopener noreferrer">Swimming Basics</a></li>
              <li><a href="/path/to/pdf2.pdf" target="_blank" rel="noopener noreferrer">Advanced Techniques</a></li>
              <li><a href="/path/to/pdf3.pdf" target="_blank" rel="noopener noreferrer">Safety Guidelines</a></li>
            </ul>
          </div>

          <div className="resources-section">
            <h2>Photos</h2>
            <div className="photos">
              <img src="/path/to/photo1.jpg" alt="Swimming Lesson 1" />
              <img src="/path/to/photo2.jpg" alt="Swimming Lesson 2" />
              <img src="/path/to/photo3.jpg" alt="Swimming Lesson 3" />
            </div>
          </div>

          <div className="resources-section">
            <h2>Videos</h2>
            <div className="videos">
              <video controls>
                <source src="https://www.youtube.com/watch?v=p6ROh-M7S0k&ab_channel=GlobalTriathlonNetwork" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <video controls>
                <source src="https://www.youtube.com/watch?v=6yP9k57OkpA&ab_channel=WetSouls" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <video controls>
                <source src="https://www.youtube.com/watch?v=yt8M6qFBT5Y&ab_channel=BRIGHTSIDE" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwimmingLessons;
