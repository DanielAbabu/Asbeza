import React from "react";
import "./choose.css";
import { Link } from "react-router-dom";

export default function Choose({ title = "", link = "", src }) {
  return (
    <Link to={link} className="ingredient-link">
      <div className="meal-ingrediants">
        <div className="ingrediant-details">
          <h2> {title}</h2>
        </div>
        <div className="gradient-overlay"></div>
        <img src={src} alt="beef" />
      </div>
    </Link>
  );
}
