import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../components/cartcontext/cartcontext";
import { meals, ingredients } from "../../data"; // Adjust the import path as needed
import Ingred from "./../../components/Ingred/Ingred";
import "./mealdetail.css";

export default function Mealdetail() {
  const { id } = useParams();
  const meal = meals.find((meal) => meal.id === parseInt(id));

  const [amount, setAmount] = useState(1);
  const { addItemToCart } = useContext(CartContext);

  const handleAddItem = () => {
    const item = {
      id: Date.now(),
      item: meal.name,
      amount: amount,
      price: amount * meal.price,
    };
    addItemToCart(item);
  };

  const increment = () => {
    setAmount(amount + 1);
  };

  const decrement = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  return (
    <div className="mealdetail">
      <div className="pics" style={{ backgroundImage: `url(${meal.imgSrc})` }}></div>
      <div className="detail">
        <div className="txts">
          <span className="kl">{meal.name}</span>
          <p>{meal.description}</p>
          <div className="time">
            <h4>Total Preparation Time</h4>
            <p>{meal.preparationTime}</p>
          </div>
        </div>

        <div className="pricing">
          <div className="amt">
            <span>Serving amount</span>
            <div className="ctrl">
              <button onClick={decrement} className="control-btn">-</button>
              <input type="text" value={amount} readOnly />
              <button onClick={increment} className="control-btn">+</button>
            </div>
          </div>
          <div className="price">
            <span>Total Price</span>
            <span className="am">{amount * meal.price} Birr</span>
          </div>
          <div className="btn" onClick={handleAddItem}>Add</div>
        </div>
      </div>

      <h2>Ingredients</h2>
      <hr className="divider" />
      <div className="inglis">
        {meal.ingredientIds.map((ingredientId) => {
          const ingredient = ingredients.find((ing) => ing.id === ingredientId);
          return ingredient && <Ingred key={ingredient.id} name={ingredient.name} price={ingredient.price} imgSrc={ingredient.imgSrc} />;
        })}
      </div>
{/* 
      <h2>How to cook</h2>
      <hr className="divider" />
      <div className="guidlis">
        {meal.ingredientIds.map((ingredientId) => {
          const ingredient = ingredients.find((ing) => ing.id === ingredientId);
          return ingredient && <Ingred key={ingredient.id} name={ingredient.name} price={ingredient.price} imgSrc={ingredient.imgSrc} />;
        })}
      </div> */}
      </div>


  );
}
