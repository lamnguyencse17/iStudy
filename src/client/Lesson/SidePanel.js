import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Table from "./Table";
import NoteBoard from "./NoteBoard";

export default class SidePanel extends Component {
  render() {
    return (
      <Container>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Table Of Content">
            <Table />
          </Tab>
          <Tab eventKey="profile" title="Note">
            <NoteBoard />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
