import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class NavBar extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">iStudy</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#browse">BROWSE</Nav.Link>
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
          <Nav className="mr-1">
            <Nav.Link href="#start">START</Nav.Link>
          </Nav>
        </Navbar>
      </>
    );
  }
}

export default NavBar;
