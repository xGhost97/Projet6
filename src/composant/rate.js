import React from "react";
import "../style/rate.css";

function Rate(props) {
  return <i className={`fa-solid fa-star rate ${props.color}`}></i>;
}

export default Rate;