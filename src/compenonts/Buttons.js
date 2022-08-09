import { buttons } from "../cnonfiguration";
import React, { useState } from "react";

function Buttons() {
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

    // create table here to manage the clecked buttons instead of just a variable 
  const [clickedStyle,setClickedStyle] =  useState("Default")


  const showAccesories = Object.keys(buttons).map((key, index) => {
    console.log(key);
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
    var className = key===clickedStyle ? "btn  btn__style__active" : "btn "

    return (
      <button
        key={index}
        onClick={() => handelclickStyle(key)}
        className={className}
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
    setClickedStyle(key)
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
