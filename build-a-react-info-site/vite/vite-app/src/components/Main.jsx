import React from "react";
import ReactDOM from "react-dom/client";

function Main() {
  return (
    <main className="main-content">
      <h1 className="main-content-title">Fun facts about React</h1>
      <ul className="items">
        <li className="item">Was first released in 2013</li>
        <li className="item">Was originally created by Jordan Walke</li>
        <li className="item">Has well over 100k stars on GitHub</li>
        <li className="item">Is maintained by Facebook</li>
        <li className="item">Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  );
}
export default Main;
