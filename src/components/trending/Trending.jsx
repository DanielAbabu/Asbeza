import React from "react";
import "./trending.css";
export default function Trending() {
  return (
    <div className="trending">
      <div className="gradient-overlay"></div>
      <div className="trending-text">
        <h2> Trending Meal</h2>
        <div className="trending-details">
          <h3>Smoked beef</h3>
          <p>Meat , Chicken, Onion, Spice</p>
        </div>
      </div>
      <img src="src\assets\steak.jpg" alt="beef" />
    </div>
  );
}
