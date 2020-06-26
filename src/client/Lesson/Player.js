import React, { Component } from "react";
import ReactPlayer from "react-player";

export default class Player extends Component {
  render() {
    return (
      <div>
        <ReactPlayer
          url={`http://localhost:3000/api/models/files/${this.props.lessonId}`}
          controls={true}
        />
      </div>
    );
  }
}
