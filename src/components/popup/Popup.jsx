import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import "./popup.css";

const Popup = ({ isVisible, togglePopup, meal, amount }) => {
  const navigate = useNavigate();
  const [rows, setRows] = useState([
    {
      id: 1,
      item: "Tomatoes",
      amount: 1 * amount + " unit",
      price: 10 * amount,
    },
    {
      id: 2,
      item: "Lettuce",
      amount: 1 * amount + " unit",
      price: 20 * amount,
    },
    { id: 3, item: "Onion", amount: 3 * amount + " unit", price: 15 * amount },
    { id: 4, item: "Meat", amount: 0.25 * amount + " kg", price: 250 * amount },
    { id: 5, item: "Bread", amount: 1 * amount + " unit", price: 20 * amount },
    { id: 6, item: "Flour", amount: 0.25 * amount + " kg", price: 25 * amount },
  ]);

  useEffect(() => {
    if (rows.length === 0 && isVisible) {
      togglePopup();
    }
  }, [rows, isVisible, togglePopup]);

  useEffect(() => {
    if (!isVisible) {
      setRows([
        {
          id: 1,
          item: "Tomatoes",
          amount: 1 * amount + " unit",
          price: 10 * amount,
        },
        {
          id: 2,
          item: "Lettuce",
          amount: 1 * amount + " unit",
          price: 20 * amount,
        },
        {
          id: 3,
          item: "Onion",
          amount: 3 * amount + " unit",
          price: 15 * amount,
        },
        {
          id: 4,
          item: "Meat",
          amount: 0.25 * amount + " kg",
          price: 250 * amount,
        },
        {
          id: 5,
          item: "Bread",
          amount: 1 * amount + " unit",
          price: 20 * amount,
        },
        {
          id: 6,
          item: "Flour",
          amount: 0.25 * amount + " kg",
          price: 25 * amount,
        },
      ]);
    }
  }, [isVisible, amount]);

  const handleNavigate = () => {
    navigate("/payment");
  };

  const handleDeleteRow = (id) => {
    const newRows = rows.filter((row) => row.id !== id);
    setRows(newRows);
  };

  const totalPrice = rows.reduce((total, row) => total + row.price, 0);

  return (
    isVisible && (
      <div className="popup-overlay">
        <div className="popup-content">
          <div className="tabinfo">
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
                {rows.map((row) => (
                  <tr key={row.id}>
                    <td>{row.item}</td>
                    <td>{row.amount}</td>
                    <td>{row.price} birr</td>
                    <td>
                      <button
                        className="delete-btn"
                        onClick={() => handleDeleteRow(row.id)}
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
          </div>
          <button className="close-btn" onClick={togglePopup}>
            Cancel
          </button>
          <button className="checkout-btn" onClick={handleNavigate}>
            Checkout
          </button>
        </div>
      </div>
    )
  );
};

export default Popup;
