import React, { Component } from "react";
import { Spring } from "react-spring/renderprops.cjs";

class Home extends Component {
  render() {
    return (
      <>
        <div className="home-container">
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: 1000, duration: 3000 }}
          >
            {(props) => (
              <div style={props}>
                <div className="impressive-message">
                  IMPROVE YOUR SKILL WITH US NOW
                  <br />
                  ANYWHERE. ANYTIME.
                  <br />
                  <button
                    onClick={() => {
                      console.log("redirect");
                    }}
                  >
                    START NOW
                  </button>
                </div>
              </div>
            )}
          </Spring>
        </div>
      </>
    );
  }
}

export default Home;
