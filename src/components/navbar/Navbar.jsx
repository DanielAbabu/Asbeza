import { useState } from "react";
import "./navbar.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import DropdownMenu from "../dropdownmenu/DropdownMenu";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
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
        <MdOutlineShoppingCart size={"30px"} />
        <div className="signin">
          <Link href="">Sign in</Link>
        </div>
        <div className="profil" onClick={toggleDropdown}>
          <img src="./src\assets\profile.jpg" alt="" />
          <DropdownMenu
            isVisible={dropdownVisible}
            toggleDropdown={toggleDropdown}
          />
        </div>
      </div>
    </div>
  );
}
