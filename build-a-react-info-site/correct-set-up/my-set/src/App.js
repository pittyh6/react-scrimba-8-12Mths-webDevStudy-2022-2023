import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"

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
  //root.render(navbar);

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
  //document.getElementById("challenge12").append(challenge12);
  //challange 12.1 fixe the render from the above code to the bellow code
  const chal12 = ReactDOM.createRoot(document.getElementById("challenge12"));
  //chal12.render(challenge12);

  //----------------------------
  //challenge 13
  /*Challenge: Starting from scratch, build and render the 
    HTML for our section project. Check the Google slide for 
    what you're trying to build.*/
  const challenge13 = (
    <div>
      <img src={logo} alt="logo react" width="40px" />
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
  const chall13 = ReactDOM.createRoot(document.getElementById("challenge13"));
  //chall13.render(challenge13); Just to no show in t he browser

  //----------------------------
  //quiz 1 - lesson 14
  /*
    1. Why do we need to `import React from "react"` in our files?
    we need the dependencies React and React-dom
    also, npm and node installed
    * JSX syntax is defines in react

    2. If I were to console.log(page) in index.js, what would show up?
    a javaScript object

    3. What's wrong with this code:
    ```
    const page = (
        <h1>Hello</h1>
        <p>This is my website!</p>
    )
    ```
    You neet to wrap everything in ONE html element. You only can render ONE element.

    4. What does it mean for something to be "declarative" instead of "imperative"?
    imperative is when you have to give all the steps for the computer understand what it need to do. 
    Declarative is when you tell just what you want and the computer/compiler knows what to do.


    5. What does it mean for something to be "composable"?
    We have small pieces that we can put together to make something
    larger/greater than the individual pieces.
    */
}

//----------------------------
//lesson 15
/*
- The component needs to start with a uppercase letter
- when you render the component you need to wrap in < ComponentName />
*/
function ComponentName() {
  return (
    <div>
      <img src={logo} alt="logo react" width="40px" />
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}
const lesson15 = ReactDOM.createRoot(document.getElementById("lesson15"));
//lesson15.render(<ComponentName/>)

//----------------------------
//lesson 15 challenge 15
/**
  Challenge: 
  Part 1: Create a page of your own using a custom Page component
  It should return an ordered list with the reasons why you're
  excited to be learning React :)
  Render your list to the page
*/
function Challenge15() {
  return (
    <div>
      <ol>
        <li>Get Back to work with IT</li>
        <li>Start my journey in Development</li>
        <li>Do what I am in love with</li>
      </ol>
    </div>
  );
}
const chall15 = ReactDOM.createRoot(document.getElementById("challenge15"));
//chall15.render(<Challenge15 />);

//----------------------------
//lesson 16 - challange 15 part 2
/*
  Part 2: 
  - Add a `header` element with a nested `nav` element. Inside the `nav`,
    include a `img` element with the image of the React logo inside
    (src="./react-logo.png") and make sure to set the width to something
    more manageable so it doesn't take up the whole screen
  - Add an `h1` with some text describing the page. (E.g. "Reasons
    I'm excited to learn React"). Place it above the ordered list.
  - Add a `footer` after the list that says: 
      "© 20xx <last name here> development. All rights reserved."
*/

function Challenge15P2() {
  return (
    <div>
      <header>
        <nav>
          <img src={logo} alt="react logo" width="100px" />
        </nav>
      </header>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>Get Back to work with IT</li>
        <li>Start my journey in Development</li>
        <li>Do what I am in love with</li>
      </ol>
      <footer>
        <small>© 2023 Priscila development. All rights reserved.</small>
      </footer>
    </div>
  );
}
const chall15p2 = ReactDOM.createRoot(document.getElementById("challenge15"));
//chall15p2.render(<Challenge15P2 />);

//----------------------------
//quiz 2 - lesson 17
/*
    Quiz!

  1. What is a React component?
  A function that returns React elements. (UI)

  2. What's wrong with this code?
  ```
  function MyComponent() {
      return (
          <small>I'm tiny text!</small>
      )
  }
  ```

  3. What's wrong with this code?
  ```
  function Header() {
      return (
          <header>
              <nav>
                  <img src="./react-logo.png" width="40px" />
              </nav>
          </header>
      )
  }

  ReactDOM.render(<Header />, document.getElementById("root"))
  ```
*/

//----------------------------
//lesson 18 - challange
/*
  Mini Challenge: 1
  Move the `header` element from Page into 
  its own component called "Header"

Challenge: 2

- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
*/
function Header1() {
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
function MainContent1() {
  return (
    <div>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>Get Back to work with IT</li>
        <li>Start my journey in Development</li>
        <li>Do what I am in love with</li>
      </ol>
    </div>
  );
}
function Footer1() {
  return (
    <footer>
      <small>© 2023 Priscila development. All rights reserved.</small>
    </footer>
  );
}
function Challenge18() {
  return (
    <div>
      <Header1 />
      <MainContent1 />
      <Footer1 />
    </div>
  );
}
const chall18 = ReactDOM.createRoot(document.getElementById("challenge18"));
//chall18.render(<Challenge18 />);


//----------------------------
//lesson 20 - 
// create file for each module.

function Lesson20(){
  return(
    <div>
      <Header /> 
      <MainContent/>
      <Footer/>
    </div>
  )
}
const lesson20 = ReactDOM.createRoot(document.getElementById("lesson20"))
lesson20.render(<Lesson20 />);
export default App;
