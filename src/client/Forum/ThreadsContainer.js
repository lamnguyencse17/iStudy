import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Thread from "./Thread";

export default class ThreadsContainer extends Component {
  render() {
    return (
      <Container fluid>
        {this.props.threads.map((thread) => {
          return <Thread key={thread._id} {...thread} />;
        })}
      </Container>
    );
  }
}
