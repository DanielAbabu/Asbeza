import "./docard.css"
import { LiaLemon } from "react-icons/lia";


export default function Docard(){
    return(
        <div className="docard">
            <div className="disp">
                <LiaLemon className="icon" color="#BBEA70" size={"130px"}/>
            </div>
            <h3 className="tit">Centralized Supply</h3>
            <h4 className="desc">Consistent and reliable ingredient sourcing from a single platform.</h4>
        </div>
    )
}