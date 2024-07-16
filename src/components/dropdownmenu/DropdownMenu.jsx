import React from "react";
import { Link } from "react-router-dom";
import "./dropdownmenu.css";

const DropdownMenu = ({ isVisible, toggleDropdown }) => {
  return (
    isVisible && (
      <div className="dropdown-menu">
        <Link to="/profile" onClick={toggleDropdown}>
          Profile
        </Link>
        <Link to="/receipt" onClick={toggleDropdown}>
          History
        </Link>
        <Link to="/login" onClick={toggleDropdown}>
          Logout
        </Link>
      </div>
    )
  );
};

export default DropdownMenu;
