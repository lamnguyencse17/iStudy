import React, { Component } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class NoteBoard extends Component {
  render() {
    return (
      <>
        <Link to={"/notes"} className="h2 mb-5">
          View All Notes
        </Link>
        <Form>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
        </Form>
        <Button variant="primary">Save Note</Button>
      </>
    );
  }
}
