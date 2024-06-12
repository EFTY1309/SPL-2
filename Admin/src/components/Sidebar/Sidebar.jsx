import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to={"/addEvent"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
         <p>Add Event</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
