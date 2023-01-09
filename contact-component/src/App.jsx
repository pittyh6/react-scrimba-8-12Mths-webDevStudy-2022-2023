import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="contacts">
      <Contact
        img="../src/assets/one.png"
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact
        img="../src/assets/two.png"
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contact
        img="../src/assets/three.png"
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <Contact
        img="../src/assets/four.png"
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      />
    </div>
  );
}

export default App;

// <div className="contact-card">
//         <img src="./images/fluffykins.png" />
//         <h3>Fluffykins</h3>
//         <div className="info-group">
//           <img src="./images/phone-icon.png" />
//           <p>(212) 555-2345</p>
//         </div>
//         <div className="info-group">
//           <img src="./images/mail-icon.png" />
//           <p>fluff@me.com</p>
//         </div>
//       </div>

//       <div className="contact-card">
//         <img src="./images/felix.png" />
//         <h3>Felix</h3>
//         <div className="info-group">
//           <img src="./images/phone-icon.png" />
//           <p>(212) 555-4567</p>
//         </div>
//         <div className="info-group">
//           <img src="./images/mail-icon.png" />
//           <p>thecat@hotmail.com</p>
//         </div>
//       </div>

//       <div className="contact-card">
//         <img src="./images/pumpkin.png" />
//         <h3>Pumpkin</h3>
//         <div className="info-group">
//           <img src="./images/phone-icon.png" />
//           <p>(0800) CAT KING</p>
//         </div>
//         <div className="info-group">
//           <img src="./images/mail-icon.png" />
//           <p>pumpkin@scrimba.com</p>
//         </div>
//       </div>
