import React, { Component } from "react";
import Player from "./Lesson/Player";

export default class Lesson extends Component {
  render() {
    return (
      <>
        <Player lessonId={this.props.match.params.lessonId} />
      </>
    );
  }
}
