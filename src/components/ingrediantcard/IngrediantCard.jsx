import React from "react";
import "./ingrediantcard.css";
import OrderAdjust from "../orderadjust/OrderAdjust";

export default function IngrediantCard({ price, item }) {
  return (
    <div className="ingrediant-card">
      <div className="ingrediant-name">
        <img src={"src/assets/tomato.png"} alt={"Tomatoes"} width="40px" />
        <p>{item}</p>
      </div>

      <div className="ingrediant-order-details">
        <OrderAdjust />
        <p>{price} Birr</p>
        <button className="add">
          <a href="">Add</a>
        </button>
      </div>
    </div>
  );
}
