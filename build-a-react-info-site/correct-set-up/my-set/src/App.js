import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  //lesson 10
  const navbar = (
    <nav>
      <h1>Pitty</h1>
      <ul>
        <li>Menu</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
  //ReactDOM.render(navbar, document.getElementById("root"));

  //leson 11
  // change the way you render from (ReactDOM.render(navbar, document.getElementById("root"));)
  // to(ReactDOM.createRoot(document.getElementById("root")).render(navbar);)
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(navbar);
}

export default App;
