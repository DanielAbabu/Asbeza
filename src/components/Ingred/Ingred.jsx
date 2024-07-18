import React from "react";
import "./ingred.css";

export default function Ingred({ name, price, imgSrc }) {
  return (
    <div className="ingred">
      <img src={imgSrc} alt={name} />
      <div className="deil">
      <h4>{name}</h4>
      <p>{price} Birr</p>        
      </div>

    </div>
  );
}
