import React, { useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import "./dropdownmenu.css";

const DropdownMenu = ({ isVisible, toggleDropdown }) => {
  const dropdownRef = useRef(null);

  // Function to handle click outside the dropdown
  const handleClickOutside = useCallback(
    (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        toggleDropdown(false);
      }
    },
    [toggleDropdown]
  );

  // Effect to add/remove click outside listener based on visibility
  useEffect(() => {
    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible, handleClickOutside]);

  return (
    isVisible && (
      <div className="dropdown-menu" ref={dropdownRef}>
        <Link to="/profile" onClick={() => toggleDropdown(false)}>
          Profile
        </Link>
        <Link to="/receipthistory" onClick={() => toggleDropdown(false)}>
          History
        </Link>
        <Link to="/login" onClick={() => toggleDropdown(false)}>
          Logout
        </Link>
      </div>
    )
  );
};

export default DropdownMenu;
