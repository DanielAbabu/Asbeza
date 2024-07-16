import React from "react";
import "./trending.css";
import { Link } from "react-router-dom";

export default function Trending({ name, ing, src, alt }) {
  return (
    <Link to="/mealdetail">
      <div className="trending">
        <div className="gradient-overlay"></div>
        <div className="trending-text">
          <h2> Trending Meal</h2>
          <div className="trending-details">
            <h3>{name}</h3>
            <p>{ing}</p>
          </div>
        </div>
        <img src={src} alt={alt} />
      </div>
    </Link>
  );
}
