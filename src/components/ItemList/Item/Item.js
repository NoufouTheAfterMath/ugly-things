import React from "react";
import "./Item.css";

let Item = (props) => (
  <div className="item">
    <h3>{props.data.title}</h3>
    <img className="image" style={{backgroundImage:`url("${props.data.url}")`}} />
    <p>{props.data.description}</p>
    <button onClick={props.handleRemove}>Remove</button>
  </div>
)

export default Item;
