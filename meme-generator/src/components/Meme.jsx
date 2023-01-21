import React from "react";

export default function Meme() {
  return (
    <main className="meme-form">
      <form className="form" action="">
        <input className="form-text form-top-text" type="text" placeholder=" Top Text" />
        <input className="form-text form-bottom-text" type="text" placeholder=" Bottom Text"/>
        <button className="form-btn">Get a new meme image 🖼️</button>
      </form>
    </main>
  );
}
