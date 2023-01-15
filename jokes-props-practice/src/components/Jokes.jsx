import React from "react";
import App from "../App"

export default function Jokes(props) {
    console.log(props.comments)
  return (
    
    <div>
      {props.setup && <h1>{props.setup}</h1>}
      <h3>{props.punchline}</h3>
    </div>
  );
}
