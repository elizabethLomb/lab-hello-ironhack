import React from "react";

const Feature = (props) => (
  <div>
    <h4>{props.title}</h4>
    <img src="{props.img}"/>
    <p>{props.description}</p>
  </div>
)


export default Feature;