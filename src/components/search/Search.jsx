import React, { useState } from "react";
import "./search.css";
import { CiSearch } from "react-icons/ci";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

export default function Search({ item }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("searching...", query);
  };
  const handleAdjustment = () => {
    console.log("Adjustment");
  };
  return (
    <div className="meal-search">
      <p>Find Your {item}</p>
      <div className="search-right">
        <div className="search-input">
          <input
            type="text"
            placeholder="what are you looking for"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <button onClick={handleSearch}>
            <CiSearch className="search-icon" />
          </button>
        </div>

        <button onClick={handleAdjustment} className="adjust-icon-button">
          <HiOutlineAdjustmentsHorizontal className="adjust-icon" />
        </button>
      </div>
    </div>
  );
}
