import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }
  handleSearch = () => {
    axios
      .post("http://localhost:3000/api/models/courses/search", {
        term: this.state.term,
      })
      .then((res, err) => {
        if (err) {
          console.log(err);
        } else {
          this.props.history.push("/results", { courses: res.data });
        }
      });
  };
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand as={Link} to="/">
            iStudy
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/home">
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to="/browse">
              BROWSE
            </Nav.Link>
          </Nav>
          <Form
            inline
            className="mr-auto w-50"
            onChange={(e) => {
              this.setState({ term: e.target.value });
            }}
          >
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              style={{ width: "75%" }}
            />
            <Button variant="primary" onClick={this.handleSearch}>
              Search
            </Button>
          </Form>
          {this.props.location.pathname == "/" ? (
            <Nav className="mr-1">
              {this.props.user.token == null ? (
                <Nav.Link as={Link} to="/login">
                  START
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/home">
                  START
                </Nav.Link>
              )}
            </Nav>
          ) : (
            <Nav className="mr-5">
              <Menu />
            </Nav>
          )}
        </Navbar>
      </>
    );
  }
}

export default NavBar;
