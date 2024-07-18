import React from 'react';
import "./docard.css";
import { FaTruckMoving } from "react-icons/fa";
import { PiHamburgerFill } from "react-icons/pi";
import { MdLocationOn } from "react-icons/md";
import { PiCookingPotBold } from "react-icons/pi";

import { GiBasket, GiFruitBowl, GiCoolSpices } from "react-icons/gi";

// Map of icon names to components
const iconMap = {
  lemon: FaTruckMoving,
  basket: GiBasket,
  fruitBowl: GiFruitBowl,
  coolSpices: GiCoolSpices,
  burger:PiHamburgerFill,
  location:MdLocationOn,
  cook:PiCookingPotBold
};

export default function Docard({ icon, title, description }) {
  const IconComponent = iconMap[icon];

  return (
    <div className="docard">
      <div className="disp">
        {IconComponent && <IconComponent className="icon" color="#BBEA70" size={"90px"} />}
      </div>
      <h3 className="tit">{title}</h3>
      <h4 className="desc">{description}</h4>
    </div>
  );
}
