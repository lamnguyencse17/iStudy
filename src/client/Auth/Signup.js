import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

export default class Signup extends Component {
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
  handleSignUp = () => {
    axios
      .post("http://localhost:3000/api/auth/register", {
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
        type: 0,
      })
      .then((res, err) => {
        console.log("AHS");
        if (err) {
          console.log(err);
        } else {
          this.props.history.push("/login");
          console.log(res.data);
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
            <Form.Group controlId="formBasicName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={this.handleChange}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
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
            <Button variant="primary" onClick={this.handleSignUp}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
