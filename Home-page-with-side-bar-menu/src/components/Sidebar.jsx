import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css'; // Adjust the path as necessary

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contacts">Contact</Link>
    </div>
  );
}

export default Sidebar;
