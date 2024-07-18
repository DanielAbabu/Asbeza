import "./ingredient.css";
import { ingredients } from "../../data"; 
import Trending from "../../components/trending/Trending";
import Choose from "../../components/choose/Choose";
import IngredientCard from "../../components/ingrediantcard/IngrediantCard";
import Search from "../../components/search/Search";
import food1 from '/food1.png';
import food5 from '/food5.png';
import Ingsearch from "../../components/ingsearch/Ingsearch";
import { useState } from "react";
// const allTags = [...new Set(ingredients.flatMap((ingredient) => ingredient.tags))]; // Assuming ingredients also have tags

export default function Ingredient() {
  const [filteredIngredients, setFilteredIngredients] = useState(ingredients);

  const handleSearch = (query) => {
    const filtered = ingredients.filter((ingredient) =>
      ingredient.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredIngredients(filtered);
  };
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
        <Ingsearch item="Ingredient"  onSearch={handleSearch} />

        </div>
        <div className="Ingredientcards-wrapper">

          {filteredIngredients.length > 0 ? (
          filteredIngredients.map((ingredi) => (
            <IngredientCard price={ingredi.price} item={ingredi.name} key={ingredi.id} imgg={ingredi.imgSrc} />

          ))
        ) : (
          <p className="no-results">No ingredients found matching your search criteria.</p>
        )}
        </div>
      </div>
    </div>
  );
}
