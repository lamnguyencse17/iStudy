import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setUser } from "../actions/user";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
    };
  }
  handleChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };
  handleLogin = () => {
    axios
      .post("https://istudy-ttcnpm.herokuapp.com/api/auth/login", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((res, err) => {
        if (err) {
          console.log(err);
        } else {
          this.props.setUser(res.data.token);
          this.props.history.push("/home");
        }
      });
  };
  render() {
    return (
      <div className="background-gradient" style={{ height: "94%" }}>
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            position: "absolute",
            top: "30%",
            left: "50%",
            marginTtop: "-11rem",
            marginLeft: "-40rem",
            width: "80rem",
            height: "22rem",
          }}
        >
          <Form className="m-3">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button variant="primary" onClick={this.handleLogin}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setUser }, dispatch);
}

export default withRouter(connect(null, mapDispatchToProps)(Signup));
