import React, { Component } from "react";
import Player from "./Lesson/Player";
import NotePanel from "./Lesson/NotePanel";
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col'
import axios from "axios";

export default class Lesson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: "",
      title: "",
      description: "",
      created: "",
      courseId: "",
      files: "",
    };
  }
  componentDidMount() {
    axios
      .get(
        `http://localhost:3000/api/models/lessons/${this.props.match.params.lessonId}`
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
        {this.state.files == "" ? (
          <> </>
        ) : (
          <Container fluid>
            <Col sm={8} md = {12}>
              <div className="h1">{this.state.title}</div>
              <Player fileId={this.state.files} />
            </Col>
            <Col sm={4} md = {6}>
              <NotePanel />
            </Col>
          </Container>
        )}
      </>
    );
  }
}
