import React from "react";
import "./Header.css";


let Header = (props) => (
  <div className="header">
    <h3>{props.title}</h3>
    <h5>{props.subTitle}</h5>
  </div>
)

export default Header;
