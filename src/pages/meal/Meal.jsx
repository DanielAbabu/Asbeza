import React, { useState } from "react";
import { meals } from "../../data";
import Mealcard from "../../components/mealcard/Mealcard";
import Trending from "../../components/trending/Trending";
import Choose from "../../components/choose/Choose";
import Search from "../../components/search/Search";
import food1 from "/food1.png";
import food3 from "/food3.png";
import "./meal.css";

export default function Meal() {
  const [filteredMeals, setFilteredMeals] = useState(meals);

  const handleSearch = (query, selectedTags) => {
    const filtered = meals.filter((meal) => {
      const matchesQuery = meal.name.toLowerCase().includes(query.toLowerCase());
      const matchesTags = selectedTags.every((tag) => meal.tags.includes(tag));
      return matchesQuery && matchesTags;
    });
    setFilteredMeals(filtered);
  };

  const allTags = [...new Set(meals.flatMap((meal) => meal.tags))];

  return (
    <div className="meal-page">
      <div className="meal-page-top">
        <div className="trending-wrapper">
          <Trending
            id={2}
            name="Smoked Beef"
            ing="with barbeque sauce, brown sugar, chili powder, yellow mustard, belly"
            src={food1}
            alt="smoked beef"
          />
        </div>
        <Choose title="Choose Ingredient" link="/ingredient" src={food3} />
      </div>

      <div className="meal-page-bottom">
        <div className="search-wrapper">
          <Search item="Meal" tags={allTags} onSearch={handleSearch} />
        </div>
        <div className="meal-display">
          {filteredMeals.length > 0 ? (
            filteredMeals.map((meal) => (
              <Mealcard
                key={meal.id}
                id={meal.id}
                image={meal.imgSrc}
                title={meal.name}
                description={meal.description}
              />
            ))
          ) : (
            <p className="no-results">No meals found matching your search criteria.</p>
          )}
        </div>
      </div>
    </div>
  );
}
