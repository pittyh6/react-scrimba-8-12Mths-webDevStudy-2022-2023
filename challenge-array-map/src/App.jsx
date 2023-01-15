import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

/*
Challenge: turn the strings in the array into <h3> elements instead
*/

export default function App() {
  const colors = [
    "Red",
    "Orange",
    "Yellow",
    "Green",
    "Blue",
    "Indigo",
    "Violet",
  ];
  return (
    <div>
      {colors.map((color) => (
        <h3>{color}</h3>
      ))}
    </div>
  );
}
