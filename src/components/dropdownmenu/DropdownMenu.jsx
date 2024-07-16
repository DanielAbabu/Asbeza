import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./dropdownmenu.css";

const DropdownMenu = ({ isVisible, toggleDropdown }) => {
  const dropdownRef = useRef(null);

  return (
    isVisible && (
      <div className="dropdown-menu" ref={dropdownRef}>
        <Link to="/profile" onClick={toggleDropdown}>
          Profile
        </Link>
        <Link to="/receipthistory" onClick={toggleDropdown}>
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
