import "./receiptdetail.css"
import Receiptcard from './../../components/receiptcard/Receiptcard';

export default function ReceiptDetail(){
    return(
        <div className="receiptdetail">
            <h2>Receipt Detail</h2>
            <Receiptcard/>
            <div className="btnnn">
                <a href="/">Finish</a>
            </div>
        </div>
    )
}