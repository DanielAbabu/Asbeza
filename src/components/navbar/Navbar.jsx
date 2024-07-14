import "./navbar.css"

export default function Navbar(){
    return(
        <div className="navbar">
            <div className="logo">ASBEZA</div>
            <div className="page">
                <a href="/home">Home</a>
                <a href="/meal">Meal</a>
                <a href="/ingredient">Ingredient</a>
            </div>
            <div className="right">

                <img className="cart" src="" alt="" />
                <div className="signin"><a href="/signin">Sign in</a></div>
                <img className="profile" src="./src\assets\profile.jpg" alt="" />
            </div>
        </div>
    )
}