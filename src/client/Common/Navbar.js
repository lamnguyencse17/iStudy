import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Menu from "./Menu";
import { Link } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
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
              console.log(e.target.value);
            }}
          >
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2 w-100"
            />
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
