import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import AddEvent from '../addEvent/AddEvent';
import AddCourse from '../AddCourse/AddCourse';
import RegisteredUser from '../RegisteredUser/RegisteredUser';
import './Admin.css'; // Ensure the CSS file is imported

const Admin = () => {
  return (
    <div className='admin'>
      <Router>
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<AddEvent />} />
            <Route path="/addEvent" element={<AddEvent />} />
            <Route path="/registeredUsers" element={<RegisteredUser />} />
            <Route path="/addCourse" element={<AddCourse />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default Admin;
