import React, { Component } from "react";
import ReactPlayer from "react-player";
import Container from "react-bootstrap/Container";

export default class Player extends Component {
  render() {
    return (
      <Container fluid>
        <ReactPlayer
          url={`https://istudy-backend.herokuapp.com/api/models/files/${this.props.fileId}`}
          width="100%"
          height="100%"
          controls={true}
        />
      </Container>
    );
  }
}
