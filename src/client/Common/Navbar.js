import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Menu from "./Menu";

class NavBar extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">iStudy</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/home">HOME</Nav.Link>
            <Nav.Link href="/browse">BROWSE</Nav.Link>
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
              <Nav.Link href="/home">START</Nav.Link>
            </Nav>
          ) : (
            <Nav className="mr-1">
              <Menu />
            </Nav>
          )}
        </Navbar>
      </>
    );
  }
}

export default NavBar;
