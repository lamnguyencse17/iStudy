import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import axios from "axios";
import TOC from "./Course/TOC";
import DescriptionTab from "./Course/DescriptionTab";
import { Route } from "react-router-dom";
import NewCourse from "./Course/NewCourse";
import EditCourse from "./Course/EditCourse";

export default class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: "",
      title: "",
      description: "",
      lessons: [],
      forumId: "",
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
          console.log(res.data);
          this.setState({
            ...res.data,
          });
        }
      });
  }

  render() {
    return (
      <>
        <Route exact path={`${this.props.match.path}/`}>
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
              onSelect={(key) => {
                if (key == "discussion") {
                  this.props.history.push(`/forum/${this.state.forumId}`);
                }
              }}
            >
              <Tab eventKey="table" title="Table of contents" className="m-5">
                {this.state.lessons.length == 0 ? (
                  <> </>
                ) : (
                  <TOC lessons={this.state.lessons} />
                )}
              </Tab>
              <Tab eventKey="description" title="Description" className="m-5">
                {this.state.description == "" ? (
                  <></>
                ) : (
                  <DescriptionTab description={this.state.description} />
                )}
              </Tab>
              <Tab eventKey="discussion" title="Discussion" className="m-5" />
              <Tab eventKey="related" title="Related courses" className="m-5">
                Placeholder
              </Tab>
            </Tabs>
          </Container>
        </Route>
        <Route path={`${this.props.match.path}/new/`} component={NewCourse} />
        <Route path={`${this.props.match.path}/edit/`} component={EditCourse} />
      </>
    );
  }
}
