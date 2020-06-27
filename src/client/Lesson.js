import React, { Component } from "react";
import Player from "./Lesson/Player";
import axios from "axios";

export default class Lesson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: "",
      title: "",
      description: "",
      created: "",
      courseId: "",
      files: "",
    };
  }
  componentDidMount() {
    axios
      .get(
        `http://localhost:3000/api/models/lessons/${this.props.match.params.lessonId}`
      )
      .then((res, err) => {
        if (err) {
          console.log(err);
        } else {
          console.log(res.data);
          this.setState({
            ...res.data,
          });
        }
      });
  }
  render() {
    return (
      <>
        {this.state.files == "" ? (
          <> </>
        ) : (
          <>
            <div className="h1">{this.state.title}</div>
            <Player fileId={this.state.files} />
          </>
        )}
      </>
    );
  }
}
