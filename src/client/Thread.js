import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";

export default class Thread extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: "",
      created: "",
      poster: "",
      title: "",
      content: "",
      forum: "",
      replies: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        `http://localhost:3000/api/models/threads/${this.props.match.params.threadId}`
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
      <Container fluid>
        <div
          style={{
            margin: "3em",
          }}
        >
          <div className="h1">Discussions</div>
          <div className="h2">
            {this.state.forum.title == "" ? (
              <>ReactJS</>
            ) : (
              this.state.forum.title
            )}
          </div>
          <div
            style={{
              height: "100%",
              borderStyle: "ridge",
              borderLeft: "5px solid blue",
              borderRadius: "8px",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
              }}
            >
              <div
                style={{
                  width: "10%",
                }}
              >
                <h4>
                  {this.state.poster.name == "" ? (
                    <>TestUser</>
                  ) : (
                    this.state.poster.name
                  )}
                </h4>
              </div>
              <div
                style={{
                  width: "90%",
                  marginLeft: "3em",
                }}
              >
                <h4>
                  {this.state.title == "" ? <>Title</> : this.state.title}
                </h4>
                <p>
                  {this.state.created == "" ? (
                    <>Created at </>
                  ) : (
                    "Created at " + this.state.created
                  )}
                </p>
              </div>
            </div>
            <div>
              <hr />
              <div>
                <p>
                  {this.state.content == "" ? <>Content</> : this.state.content}
                </p>
              </div>

              <div
                style={{
                  borderStyle: "ridge",
                  float: "right",
                }}
              >
                <button
                  name="btnReply"
                  type="button"
                  style={{
                    borderRadius: "8px",
                    backgroundColor: "#4CAF50",
                  }}
                >
                  reply
                </button>

                <button
                  name="btnDelete"
                  type="button"
                  style={{
                    marginLeft: "1em",
                    borderRadius: "8px",
                    backgroundColor: "#4CAF50",
                  }}
                >
                  delete
                </button>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "3em" }}>
            {this.state.replies.length == 0 ? (
              <></>
            ) : (
              this.state.replies.map((reply) => {
                return (
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      borderLeft: "5px solid red",
                      borderRadius: "8px",
                      borderStyle: "ridge",
                      marginTop: "2em",
                    }}
                  >
                    <div style={{ width: "10%" }}>{reply.poster}</div>

                    <div style={{ width: "90%" }}>
                      <p>{reply.content}</p>
                      <hr />
                      <div style={{ float: "left" }}>
                        {"Created at " + reply.created}
                      </div>
                      <div style={{ float: "right" }}>
                        <button
                          name="btnReply"
                          type="button"
                          style={{
                            borderRadius: "8px",
                            backgroundColor: "#4CAF50",
                          }}
                        >
                          reply
                        </button>

                        <button
                          name="btnDelete"
                          type="button"
                          style={{
                            marginLeft: "1em",
                            borderRadius: "8px",
                            backgroundColor: "#4CAF50",
                          }}
                        >
                          delete
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </Container>
    );
  }
}
