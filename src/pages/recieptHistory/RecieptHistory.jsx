import { Table } from "react-bootstrap";
import "./recieptHistory.css";
import { Link } from "react-router-dom";
export default function ReceiptHistory() {
  return (
    <div className="receiptHistory">
      <h3>Receipt History</h3>
      <Table striped bordered hover className="custom-table">
        <thead>
          <tr>
            <Link to="">
              <td>Reciept Number</td>
              <td>Date</td>
            </Link>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Link to="/receiptdetail">
              <td>ASB004528021/24</td>
              <td>23/06/2024</td>
            </Link>
          </tr>
          <tr>
            <Link to="/receiptdetail">
              <td>ASB004528021/24</td>
              <td>23/06/2024</td>
            </Link>
          </tr>
          <tr>
            <Link to="/receiptdetail">
              <td>ASB004528021/24</td>
              <td>23/06/2024</td>
            </Link>
          </tr>
          <tr>
            <Link to="/receiptdetail">
              <td>ASB004528021/24</td>
              <td>23/06/2024</td>
            </Link>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
