import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import CourseAccordion from "./Browse/CourseAccordion";
import axios from "axios";

export default class Browse extends Component {
  constructor(props) {
    //TODO:
    // Get data here from http://localhost:3000/api/models/courses using axios
    // assign as this.state.courses
    super(props);
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/api/models/courses`).then((res) => {
      console.log(res.data);
      this.state = {
        courses: [...res.data],
      };
    });
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
