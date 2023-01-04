import logo from './logo.svg';
import './App.css';
import React from "react"
import ReactDOM from "react-dom"


function App() {
  
  const navbar = (
      <nav>
          <h1>Bob's Bistro</h1>
          <ul>
              <li>Menu</li>
              <li>About</li>
              <li>Contact</li>
          </ul>
      </nav>
  )
  
  ReactDOM.render(navbar, document.getElementById("root"))

  return (
    <div className="App">
      
      <h1>oi</h1>
    </div>
  );
}

export default App;
