import React, { useEffect, useRef, useCallback } from "react";
import "./filterdrop.css";

const Filterdrop = ({ isVisible, toggleDropdown, tags, selectedTags, handleTagClick }) => {
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
      <div className="filterdrop-menu" ref={dropdownRef}>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={selectedTags.includes(tag) ? "tag selected" : "tag"}
          >
            {tag}
          </button>
        ))}
      </div>
    )
  );
};

export default Filterdrop;