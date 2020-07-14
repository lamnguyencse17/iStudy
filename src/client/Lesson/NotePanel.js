import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


export default class NotePanel extends Component {
  render() {
    return (
    <div>
      <Container>
        <h1>

        </h1>
        <p>

        </p>
        <Button className= 'arrow-button'>
         <img src={require('./rightarrow.jpeg')} width="8" height="8" />
        </Button>
      </Container> 
      <Container>
        <Col>
          <h1>
            Table of Content
          </h1>
        </Col>
        <Col>
          <h1>
            Notes
          </h1>
        </Col>
      </Container>
    </div>
    );
  }
}
