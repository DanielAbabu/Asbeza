import "./receiptcard.css"
import Table from 'react-bootstrap/Table';

export default function Receiptcard(){
    return(
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
                    <td>Tomatoes</td>
                    <td>2 kg</td>
                    <td>100 birr</td>
                </tr>
                <tr>
                    <td>Cheese Burger</td>
                    <td>2 meal</td>
                    <td>500 birr</td>
                </tr>
                <tr>
                    <td>Tomatoes</td>
                    <td>2 kg</td>
                    <td>100 birr</td>
                </tr>
                <tr>
                    <td>Tomatoes</td>
                    <td>2 kg</td>
                    <td>100 birr</td>
                </tr>
                <tr className="total-row">
                    <td className="font-weight-bold">Total Price</td>
                    <td></td>
                    <td className="font-weight-bold">800 birr</td>
                </tr>
            </tbody>
        </Table>
            </div>
            <div className="other">
                <div className="tit">Location</div>
                <div className="cortit">Mexico Square St., Addis Ababa, Ethiopia</div>
                <div className="tit">Receipt Number</div>
                <div className="cortit">ASB004528021/24</div>
            </div>
            
       </div>
    )
}

