import React from "react";
import logo from "/public/images/logo.png";

export default function Navbar() {
  return (
    <nav className="nav">
      <img src={logo} alt="AirBnb logo Image" className="nav-logo" />
    </nav>
  );
}
