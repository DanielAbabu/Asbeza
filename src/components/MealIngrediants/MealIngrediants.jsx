import React from "react";
import "./mealingrediants.css";

export default function MealIngrediants({ title = "", link = "" }) {
  return (
    <a href={link} className="ingredient-link">
      <div className="meal-ingrediants">
        <div className="ingrediant-details">
          <h2> {title}</h2>
        </div>
        <div className="gradient-overlay"></div>
        <img src="src/assets/steak.jpg" alt="beef" />
      </div>
    </a>
  );
}
