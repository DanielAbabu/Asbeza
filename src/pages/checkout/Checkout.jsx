import React from "react";
import "./checkout.css";
import CheckoutProcess from "../../components/checkoutprocess/CheckoutProcess";

export default function checkout() {
  return (
    <div className="checkout-container">
      <div className="checkoutprocess-wrapper">
        <CheckoutProcess />
      </div>
    </div>
  );
}
