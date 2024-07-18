import React, { useState, useEffect } from "react";
import "./search.css";
import { CiSearch } from "react-icons/ci";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import Filterdrop from "./../filterdrop/Filterdrop";

export default function Search({ item, tags, onSearch }) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  useEffect(() => {
    onSearch(query, selectedTags);
  }, [query, selectedTags, onSearch]);

  const handleTagClick = (tag) => {
    setSelectedTags((prevSelectedTags) =>
      prevSelectedTags.includes(tag)
        ? prevSelectedTags.filter((t) => t !== tag)
        : [...prevSelectedTags, tag]
    );
  };

  return (
    <div className="meal-search">
      <div className="con">
        <p>Find Your {item}</p>
        <div className="search-right">
          <div className="search-input">
            <input
              type="text"
              placeholder="What are you looking for?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button>
              <CiSearch className="search-icon" />
            </button>
          </div>
          <button className="filtering-button" onClick={toggleDropdown}>
            <HiOutlineAdjustmentsHorizontal className="filtering" />
          </button>
        </div>
      </div>
      <div className="t">
        <Filterdrop
          isVisible={dropdownVisible}
          toggleDropdown={setDropdownVisible}
          tags={tags}
          selectedTags={selectedTags}
          handleTagClick={handleTagClick}
        />
      </div>
    </div>
  );
}