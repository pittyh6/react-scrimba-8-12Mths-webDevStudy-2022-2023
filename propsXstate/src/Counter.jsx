import React from "react";

export default function Counter() {
  /**
   * Challenge: Set up state to track our count (initial value is 0)
   */
  const [countTrack, setCountTrack] = React.useState(0);
  function addCountTrack(event) {
    let ev = event.target.className
    console.log(ev)
    if(ev == "counter--minus"){
        setCountTrack(countTrack - 1)
    }else{
        setCountTrack(countTrack + 1)
    }
  
  }
  return (
    <div className="counter">
      <button className="counter--minus" onClick={addCountTrack}>
        –
      </button>
      <div className="counter--count">
        <h1>{countTrack}</h1>
      </div>
      <button className="counter--plus" onClick={addCountTrack}>
        +
      </button>
    </div>
  );
}
