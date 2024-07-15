import React from "react";
import "./trending.css";
export default function Trending({ name, ing, src, alt }) {
  return (
    <a href="" className="trending-link">
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
    </a>
  );
}
