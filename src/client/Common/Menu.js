import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";

export default class Menu extends Component {
  render() {
    return (
      <>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Menu
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/profile">My Profile</Dropdown.Item>
            <Dropdown.Item href="/notes">My Notes</Dropdown.Item>
            <Dropdown.Item href="/signout">Sign Out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </>
    );
  }
}
