import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import axios from "axios";

export default class Course extends Component {
  constructor(props) {
    //TODO:
    // Get courseId (params somewhere in props)
    // Get data here from `http://localhost:3000/api/models/course/${courseId}` using axios
    // Destructured to this.state
    super(props);
  }
  componentDidMount() {
    axios
      .get(
        `http://localhost:3000/api/models/courses/${this.props.match.params.courseId}`
      )
      .then((res) => {
        this.setState = {
          ...res.data,
        };
      });
  }

  render() {
    return (
      <Container fluid>
        <Image
          fluid
          src="https://www.ox.ac.uk/sites/files/oxford/styles/ow_large_feature/public/field/field_image_main/Choosing%20what%20to%20study.jpg?itok=udCvmqt9"
          className="mx-auto d-block img-responsive m-auto"
        />
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="m-5"
        >
          <Tab eventKey="table" title="Table of contents" className="m-5">
            Placeholder
          </Tab>
          <Tab eventKey="description" title="Description" className="m-5">
            Placeholder
          </Tab>
          <Tab eventKey="discussion" title="Discussion" className="m-5">
            Placeholder
          </Tab>
          <Tab eventKey="related" title="Related courses" className="m-5">
            Placeholder
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
