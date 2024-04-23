import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css'; 

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="menu-icon" onClick={toggleSidebar}>
        &#9776;  {/* Unicode for hamburger icon */}
      </button>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <Link to="/" onClick={toggleSidebar}>Home</Link>
        <Link to="/about" onClick={toggleSidebar}>About</Link>
        <Link to="/contacts" onClick={toggleSidebar}>Contact</Link>
      </div>
    </>
  );
}

export default Sidebar;
