import { useState } from "react";
import reactLogo from "./assets/react.svg";
import React from "react";
import "./App.css";

function App() {
  const [isImportant, setIsImportant] = React.useState("Yes")
  /**
   * Challenge: 
   * 1. Create a function called `handleClick` that runs
   *    setIsImportant("No")
   * 2. add a click event listener to the div.state--value
   *    that runs `handleClick` when the div is clicked.
   */
  
  function handleClick() {
      return (
        setIsImportant("No")
      )
  }
  
  return (
      <div className="state">
          <h1 className="state--title">Is state important to know?</h1>
          <div className="state--value" onClick={handleClick}>
              <h1>{isImportant}</h1>
          </div>
      </div>
  )
}

export default App;
