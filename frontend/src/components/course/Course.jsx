import React from 'react'
import './Course.css'
import butterfly from '../assets/butterfly.jpg'

const Course = () => {
  return (
    <div className='butterfly'>
      <div className="butterfly-left-side">
         <h1>Butterfly</h1>
         <p>Butterfly swimming is a beautiful and dynamic stroke characterized by its undulating movement, resembling the graceful fluttering of a butterfly's wings. It's often considered one of the most challenging strokes in competitive swimming due to its demanding technique and intense physical exertion.
          In butterfly stroke, swimmers propel themselves through the water by simultaneously moving both arms in an over-the-water recovery motion, while executing a powerful dolphin kick. This coordination of arm and leg movements requires exceptional upper body strength, core stability, and flexibility. The timing and rhythm of the stroke are crucial; a slight deviation can disrupt the fluidity and efficiency of the swimmer's movement.</p>
          <button>Enroll Now</button>
      </div>
      <div className="butterfly-right-side">
         <img src={butterfly} alt="" />
      </div>
    </div>
  )
}

export default Course
