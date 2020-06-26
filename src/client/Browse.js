import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import CourseAccordion from "./Browse/CourseAccordion";
import axios from 'axios';

export default class Browse extends Component {
  constructor(props) {
    //TODO:
    // Get data here from http://localhost:3000/api/models/courses using axios
    // assign as this.state.courses
    super(props);
    console.log(props);
    this.state = { 
      value: null,
      results: [] 
    };
  }
  
  browse = async() => {
    const CancelToken = axios.CancelToken;
    try {
    const {data} = await axios.get(`http://localhost:3000/api/models/courses`, {
      canceltoken: new CancelToken(function executor(c) {this.cancelRequest = c;})
    });
    } catch (err) {
        if(axios.isCancel(thrown)) {
          console.log(thrown.message);
        }
        console.log(err.message)
      }
  }
  
  handleChange = e => {
    this.cancelRequest && this.cancelRequest();
    if(e.target.value !== "") {
        this.setState({ value: e.target.value }, async () => await this.search());
    }
  }
  
  render() {
    return (
      <Container fluid className="m-auto p-3">
        <CourseAccordion className="mb-5" />
        <CourseAccordion className="mb-5" />
        <CourseAccordion className="mb-5" />
      </Container>
    );
  }
}
