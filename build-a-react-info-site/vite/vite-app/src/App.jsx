import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div className="container">
      <NavBar />
      <Main />
    </div>
  );
}



export default App;
