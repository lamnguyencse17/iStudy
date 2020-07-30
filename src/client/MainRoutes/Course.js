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
        `https://istudy-ttcnpm.herokuapp.com/api/models/courses/${this.props.match.params.courseId}`
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
          <Container
            fluid
            className="background-gradient"
            style={{ height: "94%" }}
          >
            <Image
              fluid
              src="https://www.ox.ac.uk/sites/files/oxford/styles/ow_large_feature/public/field/field_image_main/Choosing%20what%20to%20study.jpg?itok=udCvmqt9"
              className="mx-auto d-block img-responsive m-auto"
            />
            <div className="h1 ml-5 mt-2">
              {this.state.title == "" ? <></> : this.state.title}
            </div>
            <Tabs
              style={{ backgroundColor: "white" }}
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="mt-5 ml-5 mr-5"
              onSelect={(key) => {
                if (key == "discussion") {
                  this.props.history.push(`/forum/${this.state.forumId}`);
                }
              }}
            >
              <Tab
                style={{ backgroundColor: "white" }}
                eventKey="table"
                title="Table of contents"
                className="ml-5 mr-5"
              >
                {this.state.lessons.length == 0 ? (
                  <> </>
                ) : (
                  <TOC lessons={this.state.lessons} />
                )}
              </Tab>
              <Tab
                style={{ backgroundColor: "white" }}
                eventKey="description"
                title="Description"
                className="ml-5 mr-5"
              >
                {this.state.description == "" ? (
                  <></>
                ) : (
                  <DescriptionTab description={this.state.description} />
                )}
              </Tab>
              <Tab
                style={{ backgroundColor: "white" }}
                eventKey="discussion"
                title="Discussion"
                className="ml-5 mr-5"
              />
              <Tab
                style={{ backgroundColor: "white" }}
                eventKey="related"
                title="Related courses"
                className="ml-5 mr-5"
              >
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
