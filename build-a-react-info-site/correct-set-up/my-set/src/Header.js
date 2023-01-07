import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.svg"

function Header() {
    return (
      <header>
        <nav className="nav-bar">
          <img src={logo} alt="react logo" className="logo-img"/>
          <ul className="nav-items">
            <li className="item">Pricing</li>
            <li className="item">About</li>
            <li className="item">Contact</li>
          </ul>
        </nav>
      </header>
    );
  }

  export default Header;