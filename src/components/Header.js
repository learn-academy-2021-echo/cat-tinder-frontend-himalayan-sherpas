import React, { Component } from "react";
import "./Header.css";
import "../App.css";

export default class Header extends Component {
  render() {
    return (
      <nav className="NavBar">
        <h1>Purrfect</h1>
        <div className="NavBar__Links">
          <h4>Link 1</h4>
          <h4>Link 2</h4>
          <h4>Link 3</h4>
          <h4>Link 4</h4>
        </div>
      </nav>
    );
  }
}
