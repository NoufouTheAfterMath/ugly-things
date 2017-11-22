import React from "react";
import "./Form.css";


let Form = (props) => (
  <div className="form">
    <form onSubmit={props.handdleSubmit}>
      <input placeholder="Title" name="title" value={props.title} onChange={props.handleChange}/>
      <input placeholder="Image URL" name="url" value={props.url} onChange={props.handleChange}/>
      <input placeholder="Description" name="description" value={props.description} onChange={props.handleChange}/>
      <div className="btn">
        <button type="submit">Search</button>
      </div>
    </form>
  </div>
)

export default Form;
