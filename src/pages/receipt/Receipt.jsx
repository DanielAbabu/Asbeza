import Receiptcard from "../../components/receiptcard/Receiptcard";
import "./receipt.css";
import { Link } from "react-router-dom";
export default function Receipt() {
  return (
    <div className="receipt">
      <div className="checkout-top">
        <span className="addrs">Address</span>
        <span className="paym">Payment</span>
        <span className="rece">Receipt</span>
      </div>
      <Receiptcard />
      <div className="btnnn">
        <Link to="/">Finish</Link>
      </div>
    </div>
  );
}
