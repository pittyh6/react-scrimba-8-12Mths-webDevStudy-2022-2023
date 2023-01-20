import React from "react";
import pin from "/public/images/pin.png";

export default function Main(props) {
  console.log(props);
  return (
    <div className="trip">
      <img
        className="img-trip"
        src={`../public/images/${props.imageUrl}`}
        alt="Image travel place"
      />
      <div className="infos">
        <div className="location">
          <img src={pin} alt="image pin location" />
          <h2>{props.location}</h2>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1>{props.title}</h1>
        <h3>
          {props.startDate} - {props.endDate}
        </h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
