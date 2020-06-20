import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CourseCard from "./Main/CourseCard";

export default class Main extends Component {
  render() {
    return (
      <>
        <Container fluid className="m-auto mb-5">
          <div className="h1 mb-5">BACK TO LEARNING</div>
          <Container fluid className="m-2">
            <Row>
              <Col>
                <CourseCard />
              </Col>
              <Col>
                <CourseCard />
              </Col>
              <Col>
                <CourseCard />
              </Col>
            </Row>
          </Container>
          <div className="h1 mb-5 mt-5">TOP STUDIED COURSE</div>
          <Container fluid className="m-2">
            <Row>
              <Col>
                <CourseCard />
              </Col>
              <Col>
                <CourseCard />
              </Col>
              <Col>
                <CourseCard />
              </Col>
            </Row>
          </Container>
        </Container>
      </>
    );
  }
}
