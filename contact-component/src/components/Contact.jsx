import React from "react";
import App from "../App";

export default function Contact({img, name, phone, email}) { //destructuring way to receive props

  return (
    <div className="contact-card">
      <img src={img} />
      <h3>{name}</h3>
      <div className="info-group">
        <img src="./images/phone-icon.png" />
        <p>{phone}</p>
      </div>
      <div className="info-group">
        <img src="./images/mail-icon.png" />
        <p>{email}</p>
      </div>
    </div>
  );
}

// CAN USE BOTH WAY. 

// export default function Contact(props) { //function it has props receiving everything
//     console.log(props)
//   return (
//     <div className="contact-card">
//       <img src={props.img} />
//       <h3>{props.name}</h3>
//       <div className="info-group">
//         <img src="./images/phone-icon.png" />
//         <p>{props.phone}</p>
//       </div>
//       <div className="info-group">
//         <img src="./images/mail-icon.png" />
//         <p>{props.email}</p>
//       </div>
//     </div>
//   );
// }