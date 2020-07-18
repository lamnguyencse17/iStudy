import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import axios from "axios";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export default class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: "",
      title: "",
      description: "",
      lessons: [],
    };
  }
  componentDidMount() {
    axios
      .get(
        `http://localhost:3000/api/models/courses/${this.props.match.params.courseId}`
      )
      .then((res, err) => {
        if (err) {
          console.log(err);
        } else {
          this.setState({
            ...res.data,
          });
        }
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
        <div className="h1 ml-5 mt-2">
          {this.state.title == "" ? <></> : this.state.title}
        </div>
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="m-5"
          onSelect={(key) => console.log(key)}
        >
          <Tab eventKey="table" title="Table of contents" className="m-5">
            {this.state.lessons.length == 0 ? (
              <> </>
            ) : (
              this.state.lessons.map((lesson) => {
                return (
                  <Nav.Link
                    key={lesson._id}
                    as={Link}
                    to={`/lesson/${lesson._id}`}
                  >
                    {lesson.title}
                  </Nav.Link>
                );
              })
            )}
          </Tab>
          <Tab eventKey="description" title="Description" className="m-5">
            {this.state.description == "" ? <></> : this.state.description}
          </Tab>
          <Tab eventKey="discussion" title="Discussion" className="m-5">
            A link will be here instead
          </Tab>
          <Tab eventKey="related" title="Related courses" className="m-5">
            Placeholder
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
