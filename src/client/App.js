import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./MainRoutes/Home";
import Navbar from "./Common/Navbar";
import Main from "./MainRoutes/Main";
import About from "./MainRoutes/About";
import Browse from "./MainRoutes/Browse";
import Course from "./MainRoutes/Course";
import Lesson from "./MainRoutes/Lesson";
import Forum from "./MainRoutes/Forum";
import Thread from "./MainRoutes/Thread";
import Profile from "./Profile/Profile";
import Edit from "./MainRoutes/Edit";

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
          <Route path="/forum">
            <Route
              path="/forum/:forumId"
              render={(props) => <Forum {...props} />}
            />
          </Route>
          <Route path="/thread">
            <Route
              path="/thread/:threadId"
              render={(props) => <Thread {...props} />}
            />
          </Route>
          <Route path="/profile" render={(props) => <Profile {...props} />} />
          <Route path="/edit" render={(props) => <Edit {...props} />} />
        </Switch>
      </>
    );
  }
}
