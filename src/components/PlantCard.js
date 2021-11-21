import React from "react";
import "./PlantCard.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

const PlantCard = (props) => {
  return (
    <div className="plant-card col-4">
      <div className="plant-img__wrapper position-relative">
        <img src={props.img} alt="Plant Image"/>
        <div className="plant-card__icons col-6 justify-content-between">
          <i className="bi bi-cart"></i>
          <i className="bi bi-heart"></i>
          <i className="bi bi-search"></i>
        </div>
      </div>
      <div className="plant-details mt-3">
        <p className="plant-name">{props.name}</p>
        <p className="plant-price green">{props.price}</p>
      </div>
    </div>
  )
}

export default PlantCard;