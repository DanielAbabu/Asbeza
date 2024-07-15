import React, { useState } from "react";
import "./orderadjust.css";

export default function OrderAdjust() {
  const [quantity, setQuantity] = useState(1);
  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handlePlus = () => {
    setQuantity(quantity + 1);
  };
  return (
    <div className="order-adjustment">
      <button className="minus" onClick={handleMinus}>
        -
      </button>
      <input
        type="text"
        className="quantity"
        value={quantity}
        onChange={(e) =>
          setQuantity(Math.max(1, parseInt(e.target.value) || 1))
        }
      />
      <button className="plus" onClick={handlePlus}>
        +
      </button>
    </div>
  );
}
