import React, { Component } from "react";
import Search from "../components/search";
import { connect } from "react-redux";
//import { searchVideo } from "../../actions";
import * as actions from "../../actions";
import { bindActionCreators } from "redux";

class SearchContainer extends Component {
  state = {
    value: "Luis Fonsi"
  };
  handleSubmit = event => {
    event.preventDefault();
    //console.log(this.input.value, "submit");
    // this.props.dispatch({
    //   type: "SEARCH_VIDEO",
    //   payload: {
    //     query: this.input.value
    //   }
    // });
    this.props.actions.searchVideo(this.input.value);
  };
  setInputRef = element => {
    this.input = element;
  };
  handleInputChange = event => {
    this.setState({
      value: event.target.value.replace(" ", "-")
    });
  };
  render() {
    return (
      <Search
        setRef={this.setInputRef}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleInputChange}
        value={this.state.value}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchContainer);
