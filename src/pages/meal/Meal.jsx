import React from "react";
import { meals } from "../../data"; 
import Mealcard from "../../components/mealcard/Mealcard";
import Trending from "../../components/trending/Trending";
import Choose from "../../components/choose/Choose";
import Search from "../../components/search/Search";
import food1 from "/food1.png";
import food3 from "/food3.png";
import "./meal.css";

export default function Meal() {
  return (
    <div className="meal-page">
      <div className="meal-page-top">
        <div className="trending-wrapper">
        <Trending
            id={2}
            name="Smoked Beef"
            ing= "with barbeque sauce, brown sugar, chili powder, yellow mustard, belly"
            src={food1}
            alt="smoked beef"
          />
        </div>
        <Choose
          title="Choose Ingredient"
          link="/ingredient"
          src={food3}
        />
      </div>

      <div className="meal-page-bottom">
        <div className="search-wrapper">
          <Search item="Meal" />
        </div>
        <div className="meal-display">
          {meals.map((meal) => (
            <Mealcard
              key={meal.id}
              id={meal.id} 
              image={meal.imgSrc}
              title={meal.name}
              description={meal.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
