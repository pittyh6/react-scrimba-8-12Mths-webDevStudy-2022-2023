import React from "react";
import star from "/public/images/star.png"; 


export default function Card(props) {
  console.log(props)
  let badgeText 
  if(props.openSpots === 0){
    badgeText = "SOLD OUT"
  }else if(props.location !== ""){
    badgeText = props.location
  }
  return (
    <div className="card container">
      {badgeText && <span className="card-status">{badgeText}</span>}
      <img className="card-img" src= {`../public/images/${props.coverImg}`} />
      <div className="card-star-info">
        <img src={star} alt="card star image" className="card-img-star" />
        <p className="card-star-number">{props.stats.rating}</p>
        <p className="card-qtd-number">({props.stats.reviewCount})</p>
        <p className="card-location">
          <span className="card-dot"></span> {props.location}
        </p>
      </div>
      <p className="card-title">{props.title}</p>
      <p className="card-price">
        <b>From ${props.price} </b>  / person
      </p>
    </div>
  );
}
