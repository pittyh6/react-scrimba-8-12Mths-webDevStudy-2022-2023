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
        setCountTrack(function(prevCountTrack){
            return prevCountTrack -1
        })
    }else{
        setCountTrack(prevCountTrack => prevCountTrack + 1)
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



/*
1. You have 2 options for what you can pass in to a
   state setter function (e.g. `setCount`). What are they?
   
a. New value of state (setCount(42))
b. Callback function - whatever the callback function 
   returns === new value of state


2. When would you want to pass the first option (from answer
   above) to the state setter function?
Whenever you don't need the previous value of state to determine
what the new value of state should be.


3. When would you want to pass the second option (from answer
   above) to the state setter function?
Whenever you DO need the previous value to determine the new value

*/