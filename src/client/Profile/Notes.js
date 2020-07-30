import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { ListGroup } from "react-bootstrap";

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
  }
  componentDidMount() {
    setAuthToken(this.props.token);
    axios
      .get("https://istudy-ttcnpm.herokuapp.com/api/models/users/notes")
      .then((res, err) => {
        if (err) {
          console.log(err);
        } else {
          this.setState({ notes: res.data });
        }
      });
  }
  render() {
    return (
      <Container
        fluid
        className="p-3 background-gradient"
        style={{ height: "94%" }}
      >
        <div className="h1">Notes</div>
        {this.state.notes.length == 0 ? (
          <></>
        ) : (
          <>
            <div className="h2 mt-5">
              There is a total of {this.state.notes.length} notes
              <ListGroup className="mt-5">
                {this.state.notes.map((note) => (
                  <ListGroup.Item key={note._id}>
                    <div className="h3">{note.title}</div>
                    <div className="h4">{note.content}</div>
                    <div className="h4">
                      <Link to={`/lesson/${note.lesson}`}>Lesson URL</Link>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          </>
        )}
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.user.token,
  };
}

export default withRouter(connect(mapStateToProps, null)(Notes));
