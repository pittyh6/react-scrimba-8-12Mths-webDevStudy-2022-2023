import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import data from "./components/data";

function App() {
  const items = data.map((item) => {
    return <Main key={item.id} {...item} />;
  });
  return (
    <div>
      <Header />
      <section className="main">{items}</section>
    </div>
  );
}

export default App;
