import { buttons } from "../cnonfiguration";
import React, { useState } from "react";

function Buttons(props) {
  const [style, setStyle] = useState([
    "Default",
    "bang",
    "curls",
    "elegant",
    "fancy",
    "quiff",
    "short",
  ]);
  const [clickedAcces,setClickedAcces] =  useState("haire")

    // get state from props 
const clickedStyle = props.clickedStyles.clickedStyle;
const setClickedStyle = props.clickedStyles.setClickedStyle


  const showAccesories = Object.keys(buttons).map((key, index) => {
    var className = key===clickedAcces ? "btn btn-accessorize accessorize__active" : "btn btn-accessorize "
    return (
      <button
        key={index}
        onClick={() => handelclick(key)}
        className={className }
      >
        {key}
      </button>
    );
  });

  const showStyles = style.map((key, index) => {
   
    var className1 = key===clickedStyle[clickedAcces] ? "btn  btn__style__active" : "btn "

    return (
      <button
        key={index}
        onClick={() => handelclickStyle(key)}
        className={className1}
      >
        {key}
      </button>
    );
  });

  function handelclick(key) {
    setStyle(buttons[key]);
    setClickedAcces(key)
  }

  function handelclickStyle(key) {
    
    // there was a problem called async opration but i solved it by this prevState ...

    setClickedStyle(prevState => {
      let clickedStyles = Object.assign({}, prevState);  
      clickedStyles[clickedAcces] = key;                              
      return  clickedStyles ;                                 
    })
   
  }

  return (
    <div className="manipulation__section">
      <h2>ACCESSORIZE THE ALPACA'S</h2>
      <div className="accessorize__div">
        <div className="accessorize__buttons__div">{showAccesories}</div>
      </div>
      <div className="style__div">
        <h2>STYLE</h2>
        {showStyles}
      </div>
    </div>
  );
}

export default Buttons;
