import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import ThreadsContainer from "./Forum/ThreadsContainer";
import Button from "react-bootstrap/Button";

export default class Forum extends Component {
  render() {
    return (
      <Container fluid>
        <div className="h1 mt-5 pl-5">Discussions</div>
        <p className="h2 text-center">Course Name</p>
        <Button variant="primary" className="float-right mr-5">
          Primary
        </Button>
        <Container fluid className="p-5 mt-5">
          <ThreadsContainer />
        </Container>
      </Container>
    );
  }
}
