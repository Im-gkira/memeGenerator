import React from "react";

const imgURL = "https://freesvg.org/img/Trollface.png"

export default function Header(){
    
    return (
        <section className="header">
            <div className="header--left">
                <img src={imgURL}/>
                <h1>Meme Generator</h1>
            </div>
            
            <h3>React Course - Project 3</h3>
        </section>
    )
}