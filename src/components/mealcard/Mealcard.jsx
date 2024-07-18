import React from "react";
import { Link } from "react-router-dom";
import "./mealcard.css";

export default function Mealcard({ id, image, title, description }) {
  return (
    <Link to={`/mealdetail/${id}`}>
      <div className="mealcard">
        <img className="pic" src={image} alt={title} />
        <h3 className="tit">{title}</h3>
        <h4 className="desc">{description}</h4>
        <div className="ingr">Ingredients</div>
      </div>
    </Link>
  );
}
