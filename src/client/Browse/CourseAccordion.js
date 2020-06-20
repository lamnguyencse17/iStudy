import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

export default class CourseAccordion extends Component {
  render() {
    return (
      <>
        <Accordion>
          <Card>
            <Row>
              <Col xs={1}>
                <Image src="https://via.placeholder.com/160" rounded />
              </Col>
              <Col xs={11}>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="0"
                  className="bg-white "
                >
                  Click me!
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
              </Col>
            </Row>
          </Card>
        </Accordion>
      </>
    );
  }
}
