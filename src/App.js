import React, {useEffect} from 'react';
import buttons from './buttons'
import './App.css';

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

useEffect(()=>{
  document.addEventListener('keydown',(event)=>{
    
    
    console.log("aprestaste: ",event.keyCode)
    let theKey =event.keyCode ;
    let theSound = new Audio(sounds[theKey])
    theSound.play()
  },false)
})



  return (
    <div className="App" >
      {buttons.map(button=>{
        return(
          <button className="key-btn" name={button.buttonName}>{button.buttonText}</button>
        )
      })}


    </div>
  );
}

export default App;
