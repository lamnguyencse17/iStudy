import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

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
                <Row>
                  <Col xs={11}>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="bg-white "
                    >
                      {this.props.title}
                    </Accordion.Toggle>
                  </Col>
                  <Col>
                    <Nav.Link as={Link} to={`/course/${this.props._id}`}>
                      Visit
                    </Nav.Link>
                  </Col>
                </Row>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>{this.props.description}</Card.Body>
                </Accordion.Collapse>
              </Col>
            </Row>
          </Card>
        </Accordion>
      </>
    );
  }
}
