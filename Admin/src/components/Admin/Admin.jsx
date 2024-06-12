import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import AddEvent from '../addEvent/AddEvent';
import './Admin.css';

const Admin = () => {
  return (
    <div className='admin'>
      <Router>
        <Sidebar />
        <div className='content'>
          <Routes>
            <Route path="/" element={<AddEvent />} />
            <Route path='/addEvent' element={<AddEvent />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default Admin;

