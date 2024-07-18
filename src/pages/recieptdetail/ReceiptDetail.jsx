import "./receiptdetail.css";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function ReceiptDetail() {
  return (
    <div className="receiptdetail">
      <h2>Receipt Detail</h2>
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
              <tr>
                <td>Cheesy Burger</td>
                <td>2</td>
                <td>780</td>
              </tr>
              <tr>
                <td>Onion</td>
                <td>1 kg</td>
                <td>50 birr</td>
              </tr>
              <tr>
                <td>Tomatoes</td>
                <td>2kg</td>
                <td>50 birr</td>
              </tr>
              <tr>
                <td>Potatoes</td>
                <td>1 kg</td>
                <td>25 birr</td>
              </tr>
              <tr className="total-row">
                <td className="font-weight-bold">Total Price</td>
                <td></td>
                <td className="font-weight-bold"> birr</td>
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
      <div className="btnnn">
        <Link to="/">Finish</Link>
      </div>
    </div>
  );
}
