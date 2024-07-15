import React from "react";
import "./mealingrediants.css";

export default function MealIngrediants() {
  return (
    <div className="meal-ingrediants">
      <div className="ingrediant-details">
        <h2> Choose Ingredients</h2>
      </div>
      <div className="gradient-overlay"></div>
      <img src="src/assets/steak.jpg" alt="beef" />
    </div>
  );
}
