import React, { Component } from "react";
import ReactPlayer from "react-player";
import "./responsive-player"
import Container from 'react-bootstrap/Container'

export default class Player extends Component {
  render() {
    return (
          <div>
            <Container className='player-header'>
                  <h1></h1>
            </Container>
            <Container className='player-wrapper'>
              <ReactPlayer
                className='react-player'
                url={`http://localhost:3000/api/models/files/${this.props.fileId}`}
                width="100%"
                height="100%"
                controls={true}
              />
            </Container>
          </div>
    );
  }
}
