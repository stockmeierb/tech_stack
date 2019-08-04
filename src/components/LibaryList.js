import React, { Component } from "react";
import { connect } from "react-redux";

class LibaryList extends Component {
  render() {
    return;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibaryList);
