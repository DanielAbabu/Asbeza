import { useState, useContext } from "react";
import "./navbar.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import DropdownMenu from "../dropdownmenu/DropdownMenu";
import { Link } from "react-router-dom";
import Popup from "../../components/popup/Popup";
import { CartContext } from "../cartcontext/cartcontext";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const { cartItems } = useContext(CartContext);
  const { user } = useAuth();

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
        <NavLink
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          to="/meal"
        >
          Meal
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          to="/ingredient"
        >
          Ingredient
        </NavLink>
      </div>
      <div className="right">
        <MdOutlineShoppingCart size={"30px"} />
        {user ? (
          <div className="profil" onClick={toggleDropdown}>
            <img src={user.profilePic} alt="Profile" className="profile-pic" />
            <DropdownMenu
              isVisible={dropdownVisible}
              toggleDropdown={toggleDropdown}
            />
          </div>
        ) : (
          <div className="signin">
            <NavLink to="/signup">Sign up</NavLink>
          </div>
        )}
        <MdOutlineShoppingCart size={"30px"} onClick={togglePopup} />
        <div className="signin">
          <Link href="">Sign in</Link>
        </div>
        <div className="profil" onClick={toggleDropdown}>
          <img src="./src\assets\profile.jpg" alt="" />
          <Popup
            isVisible={popupVisible}
            togglePopup={togglePopup}
            items={cartItems}
          />
          <DropdownMenu
            isVisible={dropdownVisible}
            toggleDropdown={toggleDropdown}
          />
        </div>
      </div>
    </div>
  );
}
