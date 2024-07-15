import { useState } from 'react';
import "./mealdetail.css";
import { CgAddR,CgRemoveR  } from "react-icons/cg";
import Ingred from './../../components/Ingred/Ingred';


export default  function Mealdetail(){

    const [amount, setAmount] = useState(1);

    const increment = () => {
      setAmount(amount + 1);
    };
  
    const decrement = () => {
      if (amount > 1) {
        setAmount(amount - 1);
      }
    };


    return(
        <div className="mealdetail">
            <div className="pics" style={{ backgroundImage: `url("./src/assets/food2.png")` }}></div>
            <div className="detail">
                <div className="txts">
                    <h3>Cheese Burger</h3>
                    <p>with Bacon, Old Bay Fries, Caramelized Onion & Special Sauce with Bacon, Old Bay Fries, Caramelized Onion & Special Sauce</p>
                    
                    <div className="time">
                    <h4>Total Preparation Time</h4> 
                    <p>30 - 40 minutes</p>
                    </div>
                </div>

                <div className="pricing">
                    <div className="amt">
                        <span>Serving amount</span>
                        <div className="ctrl">
                            <button onClick={decrement} className="control-btn">-</button>
                            <input type="text" value={amount} readOnly />
                            <button onClick={increment} className="control-btn">+</button>
                        </div>
                    </div>
                    <div className="price">
                        <span>Total Price</span>
                        <span className='am' >{amount *340} Birr</span>
                    </div>
                    <div className="btn">
                        Add
                    </div>
                </div>
            </div>

            <h2>Ingredient</h2>
            <hr className='divider' />
            <div className="inglis">
                <Ingred/>
                <Ingred/>
                <Ingred/>
                <Ingred/>
                <Ingred/>
                <Ingred/>
                <Ingred/>

            </div>
        </div>
    )
}
