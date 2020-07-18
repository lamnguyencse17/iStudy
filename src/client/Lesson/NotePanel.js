import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default class NotePanel extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div className="h4">Table of Content</div>
          </Col>
          <Col>
            <div className="h4">Notes</div>
          </Col>
        </Row>
      </Container>
    );
  }
}
