import React, { Component } from "react";
import Die from "./Die";
import "./Styles.css";
export default class Dicebox extends Component {
  render() {
    return (
      <div id="dicebox">
        <h1 id="header">Dice Box</h1>
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
      </div>
    );
  }
}
