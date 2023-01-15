import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import zaferes from "../src/assets/zaferes.png";


export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card
        img= "zaferes.png"
        rating="5.0"
        reviewCount= {6}
        country="USA"
        titles="Life lessons with Katie Zaferes"
        price={136}
      />
    </div>
  );
}


/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/