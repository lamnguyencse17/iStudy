import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CourseCard from "./Main/CourseCard";
import axios from "axios";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
    };
  }
  componentDidMount() {
    axios.get(`http://localhost:3000/api/models/courses`).then((res) => {
      let originalData = res.data;
      this.setState({
        courses: [...originalData.slice(0, 3)],
      });
    });
  }
  render() {
    return (
      <>
        <Container fluid className="m-auto mb-5 background-gradient">
          <div className="h1 mb-5">BACK TO LEARNING</div>
          <Container fluid className="m-2">
            <Row>
              {this.state.courses.length == 0 ? (
                <></>
              ) : (
                this.state.courses.map((course) => {
                  return (
                    <Col key={course._id}>
                      <CourseCard
                        _id={course._id}
                        title={course.title}
                        description={course.description}
                      />
                    </Col>
                  );
                })
              )}
            </Row>
          </Container>
          <div className="h1 mb-5 mt-5">TOP STUDIED COURSE</div>
          <Container fluid className="m-2">
            <Row>
              {this.state.courses.length == 0 ? (
                <></>
              ) : (
                this.state.courses.map((course) => {
                  return (
                    <Col key={course._id}>
                      <CourseCard
                        _id={course._id}
                        title={course.title}
                        description={course.description}
                      />
                    </Col>
                  );
                })
              )}
            </Row>
          </Container>
        </Container>
      </>
    );
  }
}
