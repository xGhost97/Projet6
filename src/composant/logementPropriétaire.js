import React from "react";
import "../style/logementPropriétaire.css";

function LogementPropriétaire(props) {
  return (
    <div className="logement-host">
      <span>{props.hostName}</span>
      <img src={props.hostPicture} alt={`portrait de ${props.hostName}`} />
    </div>
  );
}

export default LogementPropriétaire;