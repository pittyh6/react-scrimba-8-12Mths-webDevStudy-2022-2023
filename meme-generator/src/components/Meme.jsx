import React from "react";
import memesData from "../memesData";

export default function Meme() {
  console.log(memesData)
  function memeImg(){
    console.log(memesData.data.memes[Math.floor(Math.random()*99)].url)
  }
  return (
    <main className="meme-form">
      <div className="form">
        <input className="form-text form-top-text" type="text" placeholder=" Top Text" />
        <input className="form-text form-bottom-text" type="text" placeholder=" Bottom Text"/>
        <button className="form-btn" onClick={memeImg}>Get a new meme image 🖼️</button>
      </div>
    </main>
  );
}
