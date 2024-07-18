import "./payment.css";
import { FaChevronCircleRight } from "react-icons/fa";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../components/cartcontext/cartcontext";

export default function Payment() {
  const { totalPrice } = useContext(CartContext);

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
        <div>
          <p>Name: </p>
          <p>Jennie Doe</p>
        </div>
        <div>
          <p>Email: </p>
          <p>jenniedoe@gmail.com</p>
        </div>
        <div>
          <p>Location: </p>
          <p>Mexico Square St., Addis Ababa, Ethiopia</p>
        </div>
        <div>
          <p>Price: </p>
          <p>{totalPrice}</p>
        </div>
        <Link to="/receipt">
          <button>Pay Now</button>
        </Link>
      </div>

      <div className="btnnn">
        <Link className="btnss" to="/receipt">
          <FaChevronCircleRight color={"#003032"} size={50} />
        </Link>
      </div>
    </div>
  );
}
