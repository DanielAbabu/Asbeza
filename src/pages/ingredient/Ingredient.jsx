import "./ingredient.css";
import Trending from "../../components/trending/Trending";
import Choose from "../../components/choose/Choose";
import IngredientCard from "../../components/ingrediantcard/IngrediantCard";
import Search from "../../components/search/Search";
export default function Ingredient() {
  const IngredientCards = Array.from({ length: 20 });

  return (
    <div className="ingredient">
      <div className="ingredient-top">
        <div className="trending-wrapper">
          <Trending
            name={"Smoked Beef"}
            ing={"Meat, Chicken, Onion, Spices"}
            src={"src\\assets\\food1.png"}
            alt={"smoked beef"}
          />
        </div>
        <Choose
          title={"Choose Meal"}
          link={"/meal"}
          src={"src\\assets\\food5.png"}
        />
      </div>
      <div className="ingredient-bottom">
        <div className="search-wrapper">
          <Search item={"Ingredient"} />
        </div>
        <div className="Ingredientcards-wrapper">
          {IngredientCards.map((_, index) => (
            <IngredientCard price={40} item={"Tomatoes"} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
