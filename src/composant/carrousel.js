import React from "react";
import "../style/carrousel.css";

function Carrousel(props) {
  return (
    <img className={props.className} src={props.imgSrc} alt={props.title} />
    
  );
}

export default Carrousel;