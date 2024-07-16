import "./navbar.css"
import { MdOutlineShoppingCart } from "react-icons/md";


export default function Navbar(){
    return(
        <div className="navbar">
            <div className="logo">ASBEZA</div>
            <div className="page">
                <a className="home" href="/">Home</a>
                <a className="meal" href="/meal">Meal</a>
                <a className="ingredientt" href="/ingredient">Ingredient</a>
            </div>
            <div className="right">
                <MdOutlineShoppingCart size={"30px"} />
                <div className="signin"><a href="">Sign in</a></div>
                <div className="profil"><img  src="./src\assets\profile.jpg" alt="" /></div>
            </div>
        </div>
    )
}