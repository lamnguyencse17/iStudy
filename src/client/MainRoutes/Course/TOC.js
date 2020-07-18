import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export default class TOC extends Component {
  render() {
    return (
      <>
        {this.props.lessons.map((lesson) => {
          return (
            <Nav.Link key={lesson._id} as={Link} to={`/lesson/${lesson._id}`}>
              {lesson.title}
            </Nav.Link>
          );
        })}
      </>
    );
  }
}
