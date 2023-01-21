import React from "react";
import trollFace from "/public/images/trollFace.png";

export default function Header() {
  return (
    <header className="header">
      <img className="imgTroll" src={trollFace} alt="Troll Face image meme" />
      <h1>MemeGenerator</h1>
      <p>React Course - Project 3</p>
    </header>
  );
}
