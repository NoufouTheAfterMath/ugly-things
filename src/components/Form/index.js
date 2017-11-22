import React from "react";
import Form from "./Form.js";
import {connect} from "react-redux";
import {addItem} from "../../actions"

class FormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      title:"",
      description:"",
      url:""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handdleSubmit = this.handdleSubmit.bind(this);
  }
  handleChange(e) {
    e.persist();
    this.setState((prevstate) => ({
      [e.target.name]: e.target.value
    }))
  }
  handdleSubmit(e){
    e.preventDefault()
    this.props.addItem(this.state.title, this.state.url, this.state.description)
  }
  render() {
    return (
      <div>
        <Form {...this.state} handleChange={this.handleChange} handdleSubmit={this.handdleSubmit}/>
      </div>
    )
  }
}
export default connect(null, {addItem})(FormContainer);
