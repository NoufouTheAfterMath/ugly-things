import React from "react";
import Item from "./Item.js";
import {removeItem} from '../../../actions';
import {connect} from "react-redux"

class ItemContainer extends React.Component {
  constructor(props) {
    super(props);
this.handleRemove = this.handleRemove.bind(this);
  }
handleRemove(){
this.props.removeItem(this.props.index);
}
  render() {
    return (
      <Item {...this.props} {...this.state} handleChange={this.handleChange} handleRemove={this.handleRemove}/>
    )
  }
}

export default connect(null, {removeItem})(ItemContainer);
