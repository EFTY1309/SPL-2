// Courses.jsx

import React from "react";
import "./Courses.css";
import CourseCard from "./CourseCard";

const Courses = () => {
  return (
    <div>
      <CourseCard
        className="course-card-1"
        imageSrc="../../../public/images/Butterfly.jpg"
        title="Butterfly"
        description="Butterfly swimming is a beautiful and dynamic stroke characterized by its undulating movement, resembling the graceful fluttering of a butterfly's wings. It's often considered one of the most challenging strokes in competitive swimming due to its demanding technique and intense physical exertion. In butterfly stroke, swimmers propel themselves through the water by simultaneously moving both arms in an over-the-water recovery motion, while executing a powerful dolphin kick. This coordination of arm and leg movements requires exceptional upper body strength, core stability, and flexibility. The timing and rhythm of the stroke are crucial; a slight deviation can disrupt the fluidity and efficiency of the swimmer's movement."
        buttonText="Enroll Now"
        buttonLink="/signin"
      />
      <CourseCard
        className="course-card-2"
        imageSrc="../../../public/images/Freestyle.jpg"
        title="Freestyle"
        description="Freestyle swimming, often regarded as the most straightforward yet versatile stroke in competitive swimming, offers a sense of freedom and fluidity in its execution. In freestyle, swimmers have the liberty to choose their stroke technique, making it highly adaptable to individual preferences and strengths. The stroke typically involves a rhythmic and continuous arm movement, where swimmers pull through the water with one arm while recovering the other above the surface. Freestyle demands endurance, as swimmers propel themselves through the water with a relentless rhythm, focusing on maintaining efficiency and speed over long distances."
        buttonText="Enroll Now"
        buttonLink="/signin"
      />
      <CourseCard
        className="course-card-3"
        imageSrc="../../../public/images/Breaststroke.jpg"
        title="Breakstroke"
        description="Backstroke, known for its graceful and relaxed style, is one of the four primary strokes used in competitive swimming. Swimmers execute the backstroke while lying on their backs, facing upwards, and propelling themselves through the water with an alternating arm motion. Unlike other strokes, the backstroke allows swimmers to breathe freely as their face remains above the water surface throughout the stroke. The stroke's smooth and continuous motion requires coordination between the arms and legs, with swimmers performing a flutter kick to provide propulsion. Backstroke emphasizes maintaining a steady rhythm and balance to optimize speed and efficiency.."
        buttonText="Enroll Now"
        buttonLink="/signin"
      />
      <CourseCard
        className="course-card-4"
        imageSrc="../../../public/images/Backstroke.jpg"
        title="Backstroke"
        description="Backstroke, known for its graceful and relaxed style, is one of the four primary strokes used in competitive swimming. Swimmers execute the backstroke while lying on their backs, facing upwards, and propelling themselves through the water with an alternating arm motion. Unlike other strokes, the backstroke allows swimmers to breathe freely as their face remains above the water surface throughout the stroke. The stroke's smooth and continuous motion requires coordination between the arms and legs, with swimmers performing a flutter kick to provide propulsion. Backstroke emphasizes maintaining a steady rhythm and balance to optimize speed and efficiency."
        buttonText="Enroll Now"
        buttonLink="/signin"
      />
    </div>
  );
};

export default Courses;
