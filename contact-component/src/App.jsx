import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Contact from "./components/Contact"

function App() {
  return (
    <div className="contacts">

      <Contact/>
      <Contact/>
      <Contact/>
      <Contact/>

      <div className="contact-card">
        <img src="./images/fluffykins.png" />
        <h3>Fluffykins</h3>
        <div className="info-group">
          <img src="./images/phone-icon.png" />
          <p>(212) 555-2345</p>
        </div>
        <div className="info-group">
          <img src="./images/mail-icon.png" />
          <p>fluff@me.com</p>
        </div>
      </div>

      <div className="contact-card">
        <img src="./images/felix.png" />
        <h3>Felix</h3>
        <div className="info-group">
          <img src="./images/phone-icon.png" />
          <p>(212) 555-4567</p>
        </div>
        <div className="info-group">
          <img src="./images/mail-icon.png" />
          <p>thecat@hotmail.com</p>
        </div>
      </div>

      <div className="contact-card">
        <img src="./images/pumpkin.png" />
        <h3>Pumpkin</h3>
        <div className="info-group">
          <img src="./images/phone-icon.png" />
          <p>(0800) CAT KING</p>
        </div>
        <div className="info-group">
          <img src="./images/mail-icon.png" />
          <p>pumpkin@scrimba.com</p>
        </div>
      </div>
    </div>
  );
}

export default App;
