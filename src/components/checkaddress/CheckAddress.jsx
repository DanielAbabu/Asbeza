import "./checkaddress.css";
import GoogleApiWrapper from "./../googleApiWrapper/GoogleApiWrapper";
import { FaChevronCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function CheckAddress() {
  return (
    <div className="checkaddress">
      <div className="checkout-top">
        <span className="addrs">
          <a href="/address">Address</a>
        </span>
        <span className="paym">Payment</span>
        <span className="rece">Receipt</span>
      </div>

      <div className="conten">
        <h2>Choose Location</h2>
        <GoogleApiWrapper />
        <div className="btnnn">
          <div>
            <h4>Current Location</h4>
            <span>Mexico Square St., Addis Ababa, Ethiopia</span>
          </div>
          <Link to="/Payment">
            <FaChevronCircleRight color={"#003032"} size={50} />
          </Link>
        </div>
      </div>
    </div>
  );
}
