import React, { Component } from "react";
import Player from "./Lesson/Player";
import SidePanel from "./Lesson/SidePanel";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken"
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Lesson extends Component {
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
    setAuthToken(this.props.token);
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
          <Container fluid className="p-3 background-gradient" style={{height: "94%"}}>
            <Row>
              <Col sm={9}>
                <div className="h1">{this.state.title}</div>
                <Player fileId={this.state.files} />
              </Col>
              <Col sm={3}>
                <SidePanel lessonId={this.props.match.params.lessonId} />
              </Col>
            </Row>
          </Container>
        )}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.user.token,
  };
}

export default withRouter(connect(mapStateToProps, null)(Lesson));