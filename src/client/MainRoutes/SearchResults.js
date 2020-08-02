import CourseAccordion from "./Browse/CourseAccordion";
import React, { Component } from "react";
import Container from "react-bootstrap/Container";

export default class SearchResults extends Component {
  componentDidMount() {
    console.log(this.props.location.state);
  }
  render() {
    return (
      <Container
        fluid
        className="p-3 background-gradient"
        style={{ height: "94%" }}
      >
        {this.props.location.state.courses ? (
          this.props.location.state.courses.map((course) => {
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
        ) : (
          <> </>
        )}
      </Container>
    );
  }
}
