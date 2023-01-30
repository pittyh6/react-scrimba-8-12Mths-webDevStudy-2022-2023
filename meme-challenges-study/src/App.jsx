import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header"
import Body from "./Body"
import AppBox from "./AppBox";

function App() {
  
  const [thingsArray,setThingsArray] = React.useState(["Thing 1", "Thing 2"]);
  const [user, setUser] = React.useState("Joe")

  function addItem() {
    setThingsArray(prevThingsArray => [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]);
    console.log(thingsArray);
  }

  const thingsElements = thingsArray.map((thing) => <p key={thing}>{thing}</p>);

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {thingsElements}
      <main>
            {/* <AppBox/> */}
            <Header user={user}/>
            <Body user={user}/>
        </main>
    </div>
    
  );
}
//ReactDOM.render(<App />, document.getElementById('root'));
export default App;
