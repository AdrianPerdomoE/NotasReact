import React, { Component } from "react";
import "../Css/Testimony.css"
function Testimony(props) {
  return (
    <div className="container-testimony">
      <img src={require("../images/Caracter-" + props.img + ".jpg")} alt="Caracter" className="img-testimony" />
      <div className="container-text-testimony">
        <p className="name-testimony"> {props.name} </p>
        <p className="cargo-testimony">{props.cargo}</p>
        <p className="text-testimony">
          {props.text}
        </p>
      </div>
    </div>
  );
}

export default Testimony;