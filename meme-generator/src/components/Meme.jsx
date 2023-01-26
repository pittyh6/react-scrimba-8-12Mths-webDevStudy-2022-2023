import React from "react";
import memesData from "../memesData";

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")
  const meme = {
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  }
  const allMemeImages = memesData

  function getMemeImg(){
    //const urlImg = memesData.data.memes[Math.floor(Math.random() * memesData.data.memes.length)].url
    const urlImg = allMemeImages
    console.log(allMemeImages)
    setMemeImage(urlImg)
  }

  return (
    <main className="meme-form">
      <div className="form">
        <input className="form-text form-top-text" type="text" placeholder=" Top Text" />
        <input className="form-text form-bottom-text" type="text" placeholder=" Bottom Text"/>
        <button className="form-btn" onClick={getMemeImg}>Get a new meme image 🖼️</button>
      </div>
      <img src={memeImage} alt="meme image random generated" className="meme-image"/>
    </main>
  );
}
