import React from "react";
import trollFace from "/public/images/trollFace.png";

export default function Header() {
  return (
    <header className="header">
      <img className="header-imgTroll" src={trollFace} alt="Troll Face image meme" />
      <h2 className="header-project">MemeGenerator</h2>
      <h4 className="header-title">React Course - Project 3</h4>
    </header>
  );
}
