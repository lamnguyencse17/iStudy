import React, { Component } from "react";
import Button from "react-bootstrap/Button";

export default class DescriptionTab extends Component {
  render() {
    return (
      <>
        {this.props.description}
        <Button>Edit</Button>
      </>
    );
  }
}
