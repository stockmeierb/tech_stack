import React, { Component } from "react";
import { connect } from "react-redux";
import { FlatList } from "react-native";

class LibaryList extends Component {
  renderItem(library) {}
  render() {
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={library => {
          return library.id;
        }}
      />
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibaryList);
