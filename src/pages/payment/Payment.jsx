import "./payment.css";
import { FaChevronCircleRight } from "react-icons/fa";
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Payment() {
  const [paymentData, setPaymentData] = useState({
    amount: "",
    email: "",
    first_name: "",
    last_name: "",
    tx_ref: `tx-ref-${Date.now()}`,
    return_url: "http://localhost:3000/payment-success",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePayment = () => {
    axios
      .post("http://localhost:5000/initialize", paymentData)
      .then((response) => {
        if (response.data && response.data.data.checkout_url) {
          window.location.href = response.data.data.checkout_url;
        }
      })
      .catch((error) => {
        console.error("Error initializing payment:", error);
      });
  };

  return (
    <div className="payment">
      <div className="checkout-top">
        <span className="addrs">
          <a href="/address">Address</a>
        </span>
        <span className="paym">Payment</span>
        <span className="rece">Receipt</span>
      </div>

      <div className="payc">
        <h2>Make a Payment</h2>
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          value={paymentData.first_name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={paymentData.last_name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={paymentData.email}
          onChange={handleChange}
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={paymentData.amount}
          onChange={handleChange}
        />
        <button onClick={handlePayment}>Pay Now</button>
      </div>

      <div className="btnnn">
        <Link className="btnss" to="/receipt">
          <FaChevronCircleRight color={"#003032"} size={50} />
        </Link>
      </div>
    </div>
  );
}
