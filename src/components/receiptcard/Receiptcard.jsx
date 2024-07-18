import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import { CartContext } from "../../components/cartcontext/cartcontext";
import "./receiptcard.css";

export default function Receiptcard() {
  const { cartItems, totalPrice } = useContext(CartContext);

  return (
    <div className="receiptcard">
      <div className="tabinfo">
        <Table striped bordered hover className="custom-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Amount</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>{item.item}</td>
                <td>{item.amount}</td>
                <td>{item.price} birr</td>
              </tr>
            ))}
            <tr className="total-row">
              <td className="font-weight-bold">Total Price</td>
              <td></td>
              <td className="font-weight-bold">{totalPrice} birr</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="other">
        <div className="roww">
          <p className="tit">Location : </p>
          <p className="cortit">Mexico Square St., Addis Ababa, Ethiopia</p>
        </div>
        <div className="roww">
          <p className="tit">Receipt Number :</p>
          <p className="cortit">ASB004528021/24</p>
        </div>
      </div>
    </div>
  );
}
