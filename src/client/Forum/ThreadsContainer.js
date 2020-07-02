import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Thread from "./Thread";

export default class ThreadsContainer extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs={4} className="border m-0 p-0">
            <p className="h3 text-center">Thread Name</p>
          </Col>
          <Col xs={1} className="border m-0 p-0">
            <p className="h3 text-center">Replies</p>
          </Col>
          <Col xs={2} className="border m-0 p-0">
            <p className="h3 text-center">Created At</p>
          </Col>
          <Col xs={5} className="border m-0 p-0">
            <p className="h3 text-center">Latest Reply</p>
          </Col>
        </Row>
        <Thread />
      </Container>
    );
  }
}
