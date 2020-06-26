import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Common/Navbar";
import Main from "./Main";
import About from "./About";
import Browse from "./Browse";
import Course from "./Course";
import Lesson from "./Lesson";

export default class App extends Component {
  constructor() {
    super();
  }
  componentWillUnmount() {}
  render() {
    return (
      <>
        <Navbar {...this.props} />
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route path="/about" render={(props) => <About {...props} />} />
          <Route path="/home" render={(props) => <Main {...props} />} />
          <Route path="/browse" render={(props) => <Browse {...props} />} />
          <Route path="/lesson">
            <Route
              path="/lesson/:lessonId"
              render={(props) => <Lesson {...props} />}
            ></Route>
          </Route>
          <Route path="/course">
            <Route
              path="/course/:courseId"
              render={(props) => <Course {...props} />}
            />
          </Route>
        </Switch>
      </>
    );
  }
}
