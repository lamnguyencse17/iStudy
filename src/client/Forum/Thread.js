import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Thread extends Component {
  render() {
    return (
      <>
        <Row>
          <Col xs={4} className="border m-0 p-0">
            <p className="h4 text-center">Getting Started</p>
          </Col>
          <Col xs={1} className="border m-0 p-0">
            <p className="h4 text-center">0</p>
          </Col>
          <Col xs={2} className="border m-0 p-0">
            <p className="h4 text-center">9PM - 02/07/2020</p>
          </Col>
          <Col xs={5} className="border m-0 p-0">
            <p className="h4 text-left">A placeholder text</p>
          </Col>
        </Row>
      </>
    );
  }
}
