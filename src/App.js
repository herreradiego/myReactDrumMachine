import React, {useEffect} from 'react';
import buttons from './buttons'
import './App.css';

//Importing Sounds
import KeyA from './sounds/clap.wav'
import KeyS from './sounds/hihat.wav'
import KeyD from './sounds/kick.wav'
import KeyF from './sounds/openhat.wav'
import KeyG from './sounds/boom.wav'
import KeyH from './sounds/ride.wav'
import KeyI from './sounds/snare.wav'
import KeyJ from './sounds/tom.wav'
import KeyK from './sounds/tink.wav'




function App() {



const sounds = {
  65:KeyA,
  83:KeyS,
  68:KeyF,
  70:KeyD,
  71:KeyG,
  72:KeyH,
  74:KeyI,
  75:KeyJ,
  76:KeyK
}

const handleClick = (keyPressed) =>{
  let theSound = new Audio(sounds[keyPressed])
  theSound.play()
}

useEffect(()=>{
  document.addEventListener('keydown',(event)=>{
    
    
    console.log("aprestaste: ",event.keyCode)
    let theKey =event.keyCode ;
    let theSound = new Audio(sounds[theKey])
    theSound.play()
  },false)
})



  return (
    <div className="main-container" >
      {buttons.map(button=>{
        return(
          <section className="button-container">
            <button className="buttons" onClick={(e)=>{handleClick(button.buttonValue)}} name={button.buttonName}>{button.buttonText}</button>
          </section>
          
        )
      })}


    </div>
  );
}

export default App;
