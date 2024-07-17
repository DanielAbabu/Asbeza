import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import "./popup.css";
import { CartContext } from "../cartcontext/cartcontext";
import { useAuth } from "../../contexts/AuthContext";

const Popup = ({ isVisible, togglePopup }) => {
  const navigate = useNavigate();
  const { cartItems, removeItemFromCart } = useContext(CartContext);
  const { user } = useAuth();

  const handleNavigate = () => {
    togglePopup();
    if (user) {
      navigate("/payment");
    } else {
      navigate("/login");
    }
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    isVisible && (
      <div className="popup-overlay">
        <div className="popup-content">
          <div className="tabinfo">
            {cartItems.length > 0 ? (
              <Table className="custom">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Amount</th>
                    <th>Price</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td>{item.item}</td>
                      <td>{item.amount}</td>
                      <td>{item.price} birr</td>
                      <td>
                        <button
                          className="delete-btn"
                          onClick={() => removeItemFromCart(item.id)}
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  ))}
                  <tr className="total-row">
                    <td className="totalprice">Total Price</td>
                    <td></td>
                    <td className="font-weight-bold">{totalPrice} birr</td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            ) : (
              <div className="empty-cart">
                <p>Your cart is empty.</p>
                <button onClick={togglePopup}>Okay</button>
              </div>
            )}
          </div>
          {cartItems.length > 0 && (
            <div className="button-container">
              <button className="close-btn" onClick={togglePopup}>
                Cancel
              </button>
              <button className="checkout-btn" onClick={handleNavigate}>
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default Popup;
