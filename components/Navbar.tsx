"use client";

import "../styles/navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      {/* Sort label and Dropdown */}
      <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
        <div className="sort-label">Sort:</div>
        <span className="dropdown-btn" onClick={toggleDropdown}>
          Last Week
        </span>
        {/* Dropdown Menu */}
        <div className="dropdown-menu">
          <ul>
            <li>Last Week</li>
            <li>Last Month</li>
            <li>Last Year</li>
          </ul>
        </div>
      </div>

      {/* User Info Section */}
      <div className="user-info">
        <div className="avatar-container">
          <img className="user-avatar" src="/user.jpeg" alt="User" />
          <span className="online-indicator"></span>
        </div>
        <div className="user-details">
          <span className="user-name">Khuchrupuchru</span>
          <span className="user-email">khuchrupuchru@xyz.com</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
