import { useState } from "react";
import "./navbar.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import DropdownMenu from "../dropdownmenu/DropdownMenu";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const { user } = useAuth();

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
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
      </div>
    </div>
  );
}
