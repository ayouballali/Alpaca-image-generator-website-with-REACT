import { useState } from 'react';
import './App.css';
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

  const clickedStyles = {clickedStyle,setClickedStyle}
  return (
    <div className="container">
    <Image clickedStyles = {clickedStyles} />
    <Buttons clickedStyles = {clickedStyles}/>
   
    
    </div>
  );
}

export default App;
