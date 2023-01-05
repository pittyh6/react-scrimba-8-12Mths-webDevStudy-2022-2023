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

  //----------------------------
  //leson 11
  // change the way you render from (ReactDOM.render(navbar, document.getElementById("root"));)
  // to(ReactDOM.createRoot(document.getElementById("root")).render(navbar);)
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(navbar);

  //----------------------------
  //challenge 12
  /**
    Challenge: find out what happens if we try to append JSX
    to our div#root using .append() instead of ReactDOM

    1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
    2. Select the div with the ID of "root" and use `.append()` to append
      your JSX
    3. See if you can guess what will show up in the browser before running
      the code
    4. See if you can explain what actually shows up in the browser
  */
  const challenge12 = (
    <div id="Twelve">
      <h1>Challenge 12</h1>
      <p>using React</p>
      <h3>I want to be a developer as soon as possible</h3>
      <h5>I am doing my best</h5>
      <p>react is awesome</p>
    </div>
  );
  document.getElementById("challenge12").append(challenge12);
  //challange 12.1 fixe the render from the above code to the bellow code
  const chal12 = ReactDOM.createRoot(document.getElementById("challenge12"));
  chal12.render(challenge12);

  //----------------------------
  //challenge 13
  /*Challenge: Starting from scratch, build and render the 
    HTML for our section project. Check the Google slide for 
    what you're trying to build.*/
  const challenge13 = (
    <div>
      <img src={logo} alt="logo react" width="40px"/>
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  )
  const chall13 = ReactDOM.createRoot(document.getElementById('challenge13'))
  chall13.render(challenge13)
}

export default App;
