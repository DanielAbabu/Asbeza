import "./ingredient.css";
import { ingredients } from "../../data"; 
import Trending from "../../components/trending/Trending";
import Choose from "../../components/choose/Choose";
import IngredientCard from "../../components/ingrediantcard/IngrediantCard";
import Search from "../../components/search/Search";
import food1 from '/food1.png';
import food5 from '/food5.png';
export default function Ingredient() {
  const IngredientCards = Array.from({ length: 20 });

  return (
    <div className="ingredient">
      <div className="ingredient-top">
        <div className="trending-wrapper">
          <Trending
            name={"Smoked Beef"}
            ing={"Meat, Chicken, Onion, Spices"}
            src={food1}
            alt={"smoked beef"}
          />
        </div>
        <Choose className="otherrat"
          title={"Choose Meal"}
          link={"/meal"}
          src={food5}
        />
      </div>
      <div className="ingredient-bottom">
        <div className="search-wrapper">
          <Search item={"Ingredient"} />
        </div>
        <div className="Ingredientcards-wrapper">
          {ingredients.map((ingredi) => (
            <IngredientCard price={ingredi.price} item={ingredi.name} key={ingredi.id} imgg={ingredi.imgSrc} />
          ))}
        </div>
      </div>
    </div>
  );
}
