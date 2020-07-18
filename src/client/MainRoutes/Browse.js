import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import CourseAccordion from "./Browse/CourseAccordion";
import axios from "axios";

export default class Browse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
    };
  }
  componentDidMount() {
    axios.get(`http://localhost:3000/api/models/courses`).then((res) => {
      this.setState({
        courses: [...res.data],
      });
    });
  }

  render() {
    return (
      <Container fluid className="m-auto p-3">
        {this.state.courses.length == 0 ? (
          <> </>
        ) : (
          this.state.courses.map((course) => {
            return (
              <CourseAccordion
                key={course._id}
                className="mb-5"
                description={course.description}
                _id={course._id}
                title={course.title}
              />
            );
          })
        )}
      </Container>
    );
  }
}
