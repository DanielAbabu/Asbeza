import "./checkaddress.css";
import GoogleApiWrapper from './../googleApiWrapper/GoogleApiWrapper';
import { FaChevronCircleRight } from "react-icons/fa";


export default function CheckAddress() {
  return (
    <div className="checkaddress">
      <div className="checkout-top">
          <span className="addrs" >
            Address
          </span>
          <span className="paym" >
            Payment
          </span>
          <span className="rece" >
            Receipt
          </span>
      </div>

      <div className="conten">
        <h2>Choose Location</h2>
        <GoogleApiWrapper/>
        <div className="btnnn">
          <a href="/payment">
          <FaChevronCircleRight 
              color={"#003032" } 
              size={50} 
          />
        </a>
        </div>
      </div>
      
    </div>
  );
}
