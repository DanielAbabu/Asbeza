import React from "react";
import "./orderadjust.css";

export default function OrderAdjust({ increment, decrement, amount }) {
  return (
    <div className="order-adjust">
      <button onClick={decrement} className="minus-btn">
        -
      </button>
      <input type="text" value={amount} readOnly />
      <button onClick={increment} className="plus-btn">
        +
      </button>
    </div>
  );
}
