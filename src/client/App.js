import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
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
import Notes from "./Profile/Notes";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";
import Signout from "./Auth/Signout";

class App extends Component {
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
              render={(props) =>
                this.props.user.token == null ? (
                  <Redirect
                    to={{
                      pathname: "/login",
                      state: { from: props.locations },
                    }}
                  />
                ) : (
                  <Lesson {...props} />
                )
              }
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
              render={(props) =>
                this.props.user.token == null ? (
                  <Redirect
                    to={{
                      pathname: "/login",
                      state: { from: props.locations },
                    }}
                  />
                ) : (
                  <Forum {...props} />
                )
              }
            />
          </Route>
          <Route path="/thread">
            <Route
              path="/thread/:threadId"
              render={(props) =>
                this.props.user.token == null ? (
                  <Redirect
                    to={{
                      pathname: "/login",
                      state: { from: props.locations },
                    }}
                  />
                ) : (
                  <Thread {...props} />
                )
              }
            />
          </Route>
          <Route
            path="/profile"
            render={(props) =>
              this.props.user.token == null ? (
                <Redirect
                  to={{ pathname: "/login", state: { from: props.locations } }}
                />
              ) : (
                <Profile {...props} />
              )
            }
          />
          <Route path="/signup" render={(props) => <Signup {...props} />} />
          <Route path="/login" render={(props) => <Login {...props} />} />
          <Route
            path="/signout"
            render={(props) =>
              this.props.user.token == null ? (
                <Redirect
                  to={{ pathname: "/login", state: { from: props.locations } }}
                />
              ) : (
                <Signout {...props} />
              )
            }
          />
          <Route
            path="/notes"
            render={(props) =>
              this.props.user.token == null ? (
                <Redirect
                  to={{ pathname: "/login", state: { from: props.locations } }}
                />
              ) : (
                <Notes {...props} />
              )
            }
          />
          <Route
            path="/edit"
            render={(props) =>
              this.props.user.token == null ? (
                <Redirect
                  to={{ pathname: "/login", state: { from: props.locations } }}
                />
              ) : (
                <Edit {...props} />
              )
            }
          />
        </Switch>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default withRouter(connect(mapStateToProps, null)(App));
