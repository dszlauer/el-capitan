import React, { Component } from "react";
import { connect } from "react-redux";

class ViewItem extends Component {
  render() {
    console.log("ITEM", this.props);
    return (
      <div>
        <h1>Items</h1>
      </div>
    );
  }
}

const mapStateToProps = (state, itemDetails) => {
  let id = itemDetails.match.params.item_id;

  return {
    itemDeets: state.itemDetaisls.find()
  };
};

export default connect(mapStateToProps)(ViewItem);
