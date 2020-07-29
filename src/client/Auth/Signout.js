import React, { Component } from "react";
import { logoutUser } from "../actions/user";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Signout extends Component {
  componentDidMount() {
    console.log("CHECK");
    this.props.logoutUser();
    this.props.histore.push("/");
  }
  render() {
    return <div></div>;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logoutUser }, dispatch);
}

export default withRouter(connect(null, mapDispatchToProps)(Signout));
