import React from "react";
import star from "../assets/star.png";
import zaferes from "../assets/zaferes.png";
/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card() {
  return (
    <main className="card container">
      <span className="card-status">SOLD OUT</span>
      <img src={zaferes} alt="card big image" className="card-img" />
      <div className="card-star-info">
        <img src={star} alt="card star image" className="card-img-star" />
        <p className="card-star-number">5.0</p>
        <p className="card-qtd-number">(6)</p>
        <p className="card-location">
          <span className="card-dot"></span> USA
        </p>
      </div>
      <p className="card-title">Life lessons with Katie Zaferes</p>
      <p className="card-price">
        <b>From $136 </b>  / person
      </p>
    </main>
  );
}
