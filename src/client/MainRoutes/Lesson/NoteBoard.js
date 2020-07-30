import React, { Component } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
class NoteBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteContent: "",
    };
  }
  handleSaveNote = () => {
    console.log(this.props.lessonId);
    setAuthToken(this.props.token);
    axios.post("https://istudy-ttcnpm.herokuapp.com/api/models/notes", {
      lesson: this.props.lessonId,
      title: "Default Title",
      content: this.state.noteContent,
    });
  };
  handleChange = (e) => {
    this.setState({ noteContent: e.target.value });
  };
  render() {
    return (
      <>
        <Link to={"/notes"} className="h2 mb-5">
          View All Notes
        </Link>
        <Form>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows="3" onChange={this.handleChange} />
          </Form.Group>
        </Form>
        <Button variant="primary" onClick={this.handleSaveNote}>
          Save Note
        </Button>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.user.token,
  };
}

export default withRouter(connect(mapStateToProps, null)(NoteBoard));
