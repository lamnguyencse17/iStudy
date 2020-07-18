import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import ThreadsContainer from "./Forum/ThreadsContainer";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class Forum extends Component {
  constructor() {
    super();
    this.state = {
      _id: "",
      title: "",
      threads: [],
      users: [],
    };
  }
  componentDidMount() {
    axios
      .get(
        `http://localhost:3000/api/models/forums/${this.props.match.params.forumId}`
      )
      .then((res, err) => {
        if (err) {
          console.log(err);
        } else {
          console.log(res.data.threads[0].replies);
          this.setState({
            ...res.data,
          });
        }
      });
  }
  render() {
    return this.state._id == "" ? (
      <></>
    ) : (
      <Container fluid>
        <div className="h1 mt-5 pl-5">Discussions</div>
        <p className="h2 text-center">{this.state.title}</p>
        <Button variant="primary" className="float-right mr-5">
          New Thread
        </Button>
        <Container fluid className="p-5 mt-5">
          <ThreadsContainer threads={this.state.threads} />
        </Container>
      </Container>
    );
  }
}
