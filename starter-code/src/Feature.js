import React from "react";

const Feature = (props) => (
  <div className="card text-center">
    <img className="card-img-top" src={props.img}/>
    <h4>{props.title}</h4>
    <p className="text-muted">{props.description}</p>
  </div>
)


export default Feature;