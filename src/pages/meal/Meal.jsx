import "./meal.css";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import Mealcard from "../../components/mealcard/Mealcard";
import Trending from "../../components/trending/Trending";
import MealIngrediants from "../../components/MealIngrediants/MealIngrediants";
export default function Meal() {
  const mealCards = Array.from({ length: 20 });
  return (
    <div className="meal-page">
      <div className="meal-page-top">
        <div className="trending-wrapper">
          <Trending />
        </div>
        <div className="meal-ingrediants-wrapper">
          <MealIngrediants />
        </div>
      </div>

      <div className="meal-page-bottom">
        <div className="meal-search">
          <p>Find Your Meal</p>
          <div className="search-right">
            <div className="search-input">
              <input type="text" placeholder="what are you looking for" />
              <span>
                <CiSearch />
              </span>
            </div>
            <span>
              <HiOutlineAdjustmentsHorizontal className="adjust-icon" />
            </span>
          </div>
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
