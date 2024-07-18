import "./ingredient.css";
import { ingredients,meals } from "../../data"; 
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
            id={1}
            name={meals[1].name}
            ing={meals[1].description}
            src={meals[1].imgSrc}
            alt={meals[1].name}
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
