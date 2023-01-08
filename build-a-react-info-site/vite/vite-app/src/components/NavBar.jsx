import React from "react";
import ReactDOM from "react-dom/client";
import logo from "/src/assets/react.svg";

function NavBar() {
  return (
    <div className="navbar">
      <div className="brand">
        <img src={logo} alt="image logo react" className="nav-logo"/>
        <h3 className="nav-name-brand">ReactFacts</h3>
      </div>
        <h4 className="nav-title">React Course - Project 1</h4>
    </div>
  );
}

export default NavBar;
