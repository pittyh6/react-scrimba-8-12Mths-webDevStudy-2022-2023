import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import eu from "./assets/eu.jpg";
import gitHub from "./assets/GitHub.png";
import instagram from "./assets/Instagram.png";
import twitter from "./assets/Twitter.png";
import { FaMailBulk } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Profile() {
  return (
    <div className="profile">
      <div className="profile-text">
        <img src={eu} alt="" className="profile-img"/>
        <h1>Priscila F. Pitty</h1>
        <h2>Frontend Developer</h2>
        <a href="https://github.com/pittyh6" className="profile-github-link">github/pittyh6</a>
      </div>
      <div className="contact-btn">
        <a href="https://github.com/pittyh6" target="_blank" className="contact contact-email"> <FaMailBulk/> Email</a>
        <a className="contact contact-linkedin" href="https://www.linkedin.com/in/priscila-bezerra-32181923/?locale=en_US" target="_"><FaLinkedin/>  LinkedIn</a>
      </div>
    </div>
  );
}

function Infos() {
  return (
    <div className="infos">
      <div className="about">
        <h3>About</h3>
        <p>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
      </div>
      <div className="interests">
        <h3>Interests</h3>
        <p>
          Photograph. Food. Music. Reader. Internet. Travel the world. Pop
          culture. Korean music and movies.
        </p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/pittyh6" target="_blank">
        <img src={gitHub} alt="GitHub icon" />
      </a>
      <a href="https://www.instagram.com/pittyh6/" target="_blank">
        <img src={instagram} alt="instagram icon" />
      </a>
      <a href="https://twitter.com/pitty76355606" target="_blank">
        <img src={twitter} alt="twitter icon" />
      </a>
    </div>
  );
}

function App() {
  return (
    <div>
      <Profile />
      <Infos />
      <Footer />
    </div>
  );
}
const everything = ReactDOM.createRoot(document.getElementById("root"));
everything.render(<App />);



export default App;
