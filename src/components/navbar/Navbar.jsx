import { useState, useContext } from "react";
import "./navbar.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import DropdownMenu from "../dropdownmenu/DropdownMenu";
import { Link } from "react-router-dom";
import Popup from "../../components/popup/Popup";
import { CartContext } from "../cartcontext/cartcontext";

export default function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const { cartItems } = useContext(CartContext);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const togglePopup = () => {
    setPopupVisible(!popupVisible);
  };
  return (
    <div className="navbar">
      <div className="logo">ASBEZA</div>
      <div className="page">
        <Link className="home" to="/">
          Home
        </Link>
        <Link className="meal" to="/meal">
          Meal
        </Link>
        <Link className="ingredientt" to="/ingredient">
          Ingredient
        </Link>
      </div>
      <div className="right">
        <MdOutlineShoppingCart size={"30px"} onClick={togglePopup} />
        <div className="signin">
          <Link href="">Sign in</Link>
        </div>
        <div className="profil">
          <img src="./src\assets\profile.jpg" alt="" onClick={toggleDropdown} />
        </div>
        <DropdownMenu
          isVisible={dropdownVisible}
          toggleDropdown={toggleDropdown}
        />
        <Popup
          isVisible={popupVisible}
          togglePopup={togglePopup}
          items={cartItems}
        />
      </div>
    </div>
  );
}
