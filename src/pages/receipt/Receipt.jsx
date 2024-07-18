import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Receiptcard from "../../components/receiptcard/Receiptcard";
import { CartContext } from "../../components/cartcontext/cartcontext";
import "./receipt.css";

export default function Receipt() {
  const { cartItems, totalPrice, clearCart } = useContext(CartContext);

  const handleFinish = () => {
    clearCart();
  };

  return (
    <div className="receipt">
      <div className="checkout-top">
        <span className="addrs">Address</span>
        <span className="paym">Payment</span>
        <span className="rece">Receipt</span>
      </div>
      <Receiptcard />
      <div className="btnnn">
        <Link to="/" onClick={handleFinish}>
          Finish
        </Link>
      </div>
    </div>
  );
}
