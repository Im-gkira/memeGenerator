import React from "react";
import { useState } from "react";


export default function Meme() {
  const [allMemeData, setMemeData] = useState([]);
   $.ajax("https://api.imgflip.com/get_memes").done(function (data) {setMemeData(data);});

   function getImage(){
    const allMemeImages = allMemeData.data.memes
    const randomInt = Math.floor(Math.random()* (allMemeImages.length-1))
    setImgURL(allMemeImages[randomInt].url);
   }

   const [imgURL,setImgURL] = useState("")



  return (
    <form className="form">
      <div className="input--box">
        <input />
        <input />
      </div>

      <div onClick={getImage} className="btn" href="">
        Get a new meme image 🖼
      </div>

      <div className="meme--img">
        {imgURL && <img src={imgURL}></img>}
      </div>
    </form>
  );
}
