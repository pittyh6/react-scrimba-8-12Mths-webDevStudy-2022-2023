import React from "react";
import App from "../App";

export default function Jokes(props) {
  function toggleShown() {
    setIsShown((prevShown) => !prevShown);
  }
  return (
    <div>
      {props.setup && <h3>{props.setup}</h3>}
      {isShown && <p>{props.punchline}</p>}
      <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} Punchline</button>
      <hr />
    </div>
  );
}
