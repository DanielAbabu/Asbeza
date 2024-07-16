import Receiptcard from "../../components/receiptcard/Receiptcard";
import "./receipt.css"


export default function Receipt(){
    return(
        <div className="receipt">
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
        <Receiptcard/>
            <div className="btnnn">
                <a href="/">Finish</a>
            </div>
        </div>
    )
}