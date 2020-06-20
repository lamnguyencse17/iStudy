import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";

export default class CourseCard extends Component {
  render() {
    return (
      <>
        <Card style={{ width: "18rem" }} className="m-auto">
          <Card.Img variant="top" src="https://via.placeholder.com/200" />
          <Card.Body>
            <Card.Title>
              <Nav.Link href="/course" className="p-0">
                Card Title
              </Nav.Link>
            </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}
