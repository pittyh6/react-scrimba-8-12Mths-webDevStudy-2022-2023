import React from "react";
import memesData from "../memesData";

export default function Meme() {
  //const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })
  const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  function getMemeImg(){
    const urlImg = allMemeImages.data.memes[Math.floor(Math.random() * allMemeImages.data.memes.length)].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: urlImg
    }))
  }

  return (
    <main className="meme-form">
      <div className="form">
        <input className="form-text form-top-text" type="text" placeholder=" Top Text" />
        <input className="form-text form-bottom-text" type="text" placeholder=" Bottom Text"/>
        <button className="form-btn" onClick={getMemeImg}>Get a new meme image 🖼️</button>
      </div>
      <img src={meme.randomImage} alt="meme image random generated" className="meme-image"/>
    </main>
  );
}
