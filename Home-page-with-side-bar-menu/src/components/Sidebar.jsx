import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prevState) => !prevState);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Menu Icon Button */}
      <button
        className="menu-icon"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        &#9776;
      </button>

      {/* Sidebar Navigation */}
      <nav className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <Link to="/" onClick={closeSidebar}>
          Home
        </Link>
        <Link to="/about" onClick={closeSidebar}>
          About
        </Link>
        <Link to="/contacts" onClick={closeSidebar}>
          Contact
        </Link>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div className="overlay" onClick={closeSidebar} aria-hidden="true" />
      )}
    </>
  );
}

export default Sidebar;
