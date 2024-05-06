import React, { useState, useEffect } from "react";
import "./BackToTopButton.css"; // Import CSS for styling

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show scroll-to-top button when user scrolls down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add event listener for scrolling
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Smooth scroll behavior
    });
  };

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button onClick={scrollToTop}>
          <i className="fa fa-chevron-up"></i> {/* Font Awesome icon for arrow */}
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
