import React from "react";
import "./ingrediantcard.css";
import OrderAdjust from "../orderadjust/OrderAdjust";
import { Link } from "react-router-dom";

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
        <Link to="">
          <button className="add">Add</button>
        </Link>
      </div>
    </div>
  );
}
