import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import CourseAccordion from "./Browse/CourseAccordion";

export default class Browse extends Component {
  constructor(props) {
    //TODO:
    // Get data here from http://localhost:3000/api/models/courses using axios
    // assign as this.state.courses
  }
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
