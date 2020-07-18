import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

export default class Thread extends Component {
  render() {
    return (
      <>
        <Row>
          <Col xs={4} className="border m-0 p-0">
            <Link to={`/thread/${this.props._id}`} className="h4 text-center">
              {this.props.title}
            </Link>
          </Col>
          <Col xs={1} className="border m-0 p-0">
            <p className="h4 text-center">{this.props.replies.length}</p>
          </Col>
          <Col xs={2} className="border m-0 p-0">
            <p className="h4 text-center">{this.props.created}</p>
          </Col>
          <Col xs={5} className="border m-0 p-0">
            <p className="h4 text-left">
              {this.props.replies.length == 0 ? (
                <p>None yet!</p>
              ) : (
                this.props.replies[this.props.replies.length - 1]
              )}
            </p>
          </Col>
        </Row>
      </>
    );
  }
}
