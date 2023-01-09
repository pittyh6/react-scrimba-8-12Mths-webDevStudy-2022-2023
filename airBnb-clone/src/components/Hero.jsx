import React from "react";
import hero from "../assets/hero.png";

export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero-img-parent">
        <img src={hero} alt="hero img" className="hero-img" />
      </div>
      <div className="hero-text">
        <h1 className="hero-heading">Online Experiences</h1>
        <p className="hero-paragraph">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
}
