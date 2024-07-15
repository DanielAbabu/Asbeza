import React from "react";
import "./checkoutprocess.css";

export default function CheckoutProcess() {
  return (
    <div className="checkout-top">
      <a className="address" href="">
        Adress
      </a>
      <a className="payment" href="">
        Payment
      </a>
      <a className="receipt" href="">
        Receipt
      </a>
    </div>
  );
}
