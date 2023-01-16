import React from "react";
import star from "/public/images/star.png"; 


export default function Card(props) {
  return (
    <div className="card container">
      <span className="card-status">SOLD OUT</span>
      <img className="card-img" src= {`../public/images/${props.img}`} />
      <div className="card-star-info">
        <img src={star} alt="card star image" className="card-img-star" />
        <p className="card-star-number">{props.rating}</p>
        <p className="card-qtd-number">{props.reviewCount}</p>
        <p className="card-location">
          <span className="card-dot"></span> {props.country}
        </p>
      </div>
      <p className="card-title">{props.titles}</p>
      <p className="card-price">
        <b>From ${props.price} </b>  / person
      </p>
    </div>
  );
}
