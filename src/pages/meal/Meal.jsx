import "./meal.css";
import Mealcard from "../../components/mealcard/Mealcard";
import Trending from "../../components/trending/Trending";
import MealIngrediants from "../../components/MealIngrediants/MealIngrediants";
import Search from "../../components/search/Search";
export default function Meal() {
  const mealCards = Array.from({ length: 20 });
  return (
    <div className="meal-page">
      <div className="meal-page-top">
        <div className="trending-wrapper">
          <Trending name="Smoked Beef" ing="Meat, Chicken, Onion, Spices" />
        </div>
        <MealIngrediants title="Choose Ingredient" link="ingredient" />
      </div>

      <div className="meal-page-bottom">
        <div className="search-wrapper">
          <Search item="Meal" />
        </div>
        <div className="meal-display">
          {mealCards.map((_, index) => (
            <Mealcard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
