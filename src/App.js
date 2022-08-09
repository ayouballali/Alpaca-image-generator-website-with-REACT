import { useState } from 'react';
import './App.css';
import { buttons } from './cnonfiguration';
import Buttons from './compenonts/Buttons';
import Image from './compenonts/Image';

function App() {

  const [clickedStyle,setClickedStyle] =  useState({
    haire: "Default", 
    ears: "Default", 
    eyes: "Default", 
    mouth: "Default",  
    neck: "Default",   
    leg: "Default",
    accessories: "Default",
    backgrounds: "Default"
      
  })


  function handelClickRand (){

    setClickedStyle(prevState => {
      let clickedStyles = Object.assign({}, prevState);  

      Object.keys(buttons).forEach((key)=>{
        clickedStyles[key] =buttons[key][Math.floor(Math.random() * buttons[key].length)]
      }) 
     
                                  
      return  clickedStyles ;                                 
    })
    
  }

  const clickedStyles = {clickedStyle,setClickedStyle}
  return (
    <div className="container">
    <Image handelClik={handelClickRand} clickedStyles = {clickedStyles} />
    <Buttons clickedStyles = {clickedStyles}/>    
    </div>
  );
}

export default App;
