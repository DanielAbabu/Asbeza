import "./mealcard.css"

export default function Mealcard(){
    return(
        <div className="mealcard">
            <img className="pic" src="src\assets\food2.png" alt="" />
            <h3 className="tit">Cheesy Burger</h3>
            <h4 className="desc" >with Bacon, Old Bay Fries, Caramelized Onion & Special Sauce</h4>
            <div className="ingr">Ingredient</div>
        </div>
    )
}