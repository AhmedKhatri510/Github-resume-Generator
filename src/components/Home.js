import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import history from "../history";
import { fetchUserData } from "../actions";
import logo from "../assets/femalecodertocat.png";

class Home extends React.Component {
  state = { userName: "" };

  onGenerateResume = () => {
    if (!this.state.userName) return;
    console.log(this.state.userName);
    this.props.fetchUserData(this.state.userName);
  };

  render() {
    return (
      <div className="container-home overflow-container">
        <div className="left-container">
          <div className="content">
            <h1 className="gitzilla">GitZilla</h1>
            <p className="about">A resume builder for your GitHub profile.</p>
            <ul className="lists">
              <li>Fetch your skills</li>
              <li>Fetch your details</li>
              <li>Links to your repositories</li>
            </ul>
            <div class="input-container">
              <label for="Username" class="input-label">
                Enter your GitHub Username
              </label>
              <input
                name="Username"
                value={this.state.userName}
                onChange={(e) => this.setState({ userName: e.target.value })}
                className="input-username"
              />
              <a onClick={this.onGenerateResume} className="btn">
                Generate Resume
              </a>
            </div>
          </div>
        </div>
        <div className="right-container">
          <img src={logo} className="logo" />
        </div>
        <div class="mobile-top">
          <h1 className="gitzilla margin-topbot-medium">GitZilla</h1>
          <p>A resume builder for your GitHub profile</p>
          <img class="logo" src={logo} alt="resume builder" />
        </div>
        <div className="mobile-bottom">
          <div class="input-container">
            <label for="Username" class="input-label">
              Enter your GitHub Username
            </label>
            <input
              name="Username"
              value={this.state.userName}
              onChange={(e) => this.setState({ userName: e.target.value })}
              className="input-username"
            />
            <a onClick={this.onGenerateResume} className="btn">
              Generate Resume
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { userData: state.userData };
};

export default connect(mapStateToProps, { fetchUserData })(Home);
