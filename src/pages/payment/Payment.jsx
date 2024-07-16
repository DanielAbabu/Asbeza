import "./payment.css"
import { FaChevronCircleRight } from "react-icons/fa";


export default function Payment(){
    return(
        <div className="payment">
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
            <div className="btnnn">
                <a href="/receipt">
                <FaChevronCircleRight 
                    color={"#003032" } 
                    size={50} 
                />
                </a>
            </div>
        </div>
    )
}