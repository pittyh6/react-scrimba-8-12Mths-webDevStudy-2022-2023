import { useState } from "react";
import reactLogo from "./assets/react.svg";
import React from "react";
import "./App.css";

function App() {
  const [isImportant,func] = React.useState("Yes")
  console.log(isImportant);
  return (
    <div className="state">
      <h1 className="state--title">Is state important to know?</h1>
      <div className="state--value">
        <h1>{isImportant}</h1>
      </div>
    </div>
  );
}

export default App;
