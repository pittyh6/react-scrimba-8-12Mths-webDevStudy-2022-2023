import React from "react";

export default function Star(props) {
const starIcon = props.isFilled ? "wink.png" : "hearts.png";
  return (
    <img
      src={`../public/${starIcon}`}
      className="card--favorite"
      onClick={props.handleClick}
    />
  );
}
