import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import CourseAccordion from "./Browse/CourseAccordion";

export default class Browse extends Component {
  render() {
    return (
      <Container fluid className="m-auto p-3">
        <CourseAccordion className="mb-5" />
        <CourseAccordion className="mb-5" />
        <CourseAccordion className="mb-5" />
      </Container>
    );
  }
}
