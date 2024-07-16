import { Table } from "react-bootstrap"
import "./recieptHistory.css"

export default function ReceiptHistory(){
    return(
        <div className="receiptHistory">
            <h3>Receipt History</h3>
            <Table striped bordered hover className="custom-table">

            <tbody>
                <tr>
                    <a href="">
                    <td>Reciept Number</td>
                    <td>Date</td>

                    </a>
                </tr>
                <tr>
                    <a href="/recieptdetail">
                        <td>ASB004528021/24</td>
                        <td>23/06/2024</td>
                    </a>
                </tr>
                <tr>
                    <a href="/recieptdetail">
                        <td>ASB004528021/24</td>
                        <td>23/06/2024</td>
                    </a>
                </tr>
                <tr>
                    <a href="/recieptdetail">
                        <td>ASB004528021/24</td>
                        <td>23/06/2024</td>
                    </a>
                </tr>
                <tr>
                    <a href="/recieptdetail">
                        <td>ASB004528021/24</td>
                        <td>23/06/2024</td>
                    </a>
                </tr>
            </tbody>
        </Table>
        </div>
    )
}