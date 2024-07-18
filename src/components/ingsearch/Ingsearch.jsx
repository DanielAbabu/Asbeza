import React, { useState, useEffect } from "react";
import "./ingsearch.css"; // You can create a separate CSS file if needed
import { CiSearch } from "react-icons/ci";

export default function Ingsearch({ item, onSearch }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    onSearch(query);
  }, [query, onSearch]);

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
        </div>
      </div>
    </div>
  );
}
