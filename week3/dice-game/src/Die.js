import React, { Component } from "react";
import "./Styles.css";
export default class Die extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      num: 0,
    };
  }
  handleClick = () => {
    if (this.state.count <= 2) {
      this.setState((prevState) => ({
        count: prevState.count + 1,
        num: Math.floor(Math.random() * 6 + 1),
      }));
    } else {
      this.setState({
        count: 0,
        num: 0,
      });
    }
  };
  render() {
    return (
      <div id="dicebox">
        <div id="num">
          {this.state.num}
          <button id="roll" onClick={this.handleClick}>
            Roll
          </button>
        </div>
      </div>
    );
  }
}
