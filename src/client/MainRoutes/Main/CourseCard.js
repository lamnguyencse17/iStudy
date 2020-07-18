import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export default class CourseCard extends Component {
  render() {
    return (
      <>
        <Card style={{ width: "18rem" }} className="m-auto">
          <Card.Img variant="top" src="https://via.placeholder.com/200" />
          <Card.Body>
            <Card.Title>
              <Nav.Link
                as={Link}
                to={`/course/${this.props._id}`}
                className="p-0"
              >
                {this.props.title}
              </Nav.Link>
            </Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}
