import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./components/data";

/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

export default function App() {
  const cards = data.map((item) => {
    return (
      <Card
      key={item.id}
      {...item}
        // img={item.coverImg}
        // rating={item.stats.rating}
        // reviewCount={item.stats.reviewCount}
        // country={item.location}
        // titles={item.title}
        // price={item.price}
        // openSpots = {item.openSpots}
        // location = {item.location}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="card-list">{cards}</section>
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
