import React from "react";
import "../style/logementTitre.css";

function LogementTitre(props) {
  return (
    <div className="logement-title">
      <h1>{props.title}</h1>
      <p>{props.location}</p>
    </div>
  );
}

export default LogementTitre;