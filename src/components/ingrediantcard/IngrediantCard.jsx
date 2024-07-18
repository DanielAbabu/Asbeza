import React, { useContext, useState } from "react";
import "./ingrediantcard.css";
import OrderAdjust from "../orderadjust/OrderAdjust";
import { CartContext } from "../../components/cartcontext/cartcontext";
import { Link } from "react-router-dom";

export default function IngrediantCard({ price, item }) {
  const { addItemToCart } = useContext(CartContext);
  const [amount, setAmount] = useState(1);

  const handleAddItem = () => {
    const ingredient = {
      id: Date.now(),
      item: item,
      amount: amount,
      price: price * amount,
    };
    addItemToCart(ingredient);
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
    <div className="ingrediant-card">
      <div className="ingrediant-name">
        <img src={"/tomato.png"} alt={"Tomatoes"} width="40px" />
        <p>{item}</p>
      </div>

      <div className="ingrediant-order-details">
        <OrderAdjust
          increment={increment}
          decrement={decrement}
          amount={amount}
        />
        <p>{price * amount} Birr</p>
        <Link to="">
          <button className="add" onClick={handleAddItem}>
            Add
          </button>
        </Link>
      </div>
    </div>
  );
}
