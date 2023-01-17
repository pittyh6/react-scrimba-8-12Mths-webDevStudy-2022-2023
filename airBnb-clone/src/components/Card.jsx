import React from "react";
import star from "/public/images/star.png"; 


export default function Card(props) {
  console.log(props)
  let badgeText 
  if(props.item.openSpots === 0){
    badgeText = "SOLD OUT"
  }else if(props.item.location !== ""){
    badgeText = props.item.location
  }
  return (
    <div className="card container">
      {badgeText && <span className="card-status">{badgeText}</span>}
      <img className="card-img" src= {`../public/images/${props.item.coverImg}`} />
      <div className="card-star-info">
        <img src={star} alt="card star image" className="card-img-star" />
        <p className="card-star-number">{props.item.stats.rating}</p>
        <p className="card-qtd-number">({props.item.stats.reviewCount})</p>
        <p className="card-location">
          <span className="card-dot"></span> {props.item.location}
        </p>
      </div>
      <p className="card-title">{props.item.title}</p>
      <p className="card-price">
        <b>From ${props.item.price} </b>  / person
      </p>
    </div>
  );
}
