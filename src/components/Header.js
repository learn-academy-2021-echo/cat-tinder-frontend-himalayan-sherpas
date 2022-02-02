import React, { Component } from "react";
import "./Header.css";
import "../App.css";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <nav className="NavBar">
        <NavLink to="/"><h1>KatNip</h1></NavLink>
        <div className="NavBar__Links">
          <NavLink to="/"><h6>Link 1</h6></NavLink>
          <NavLink to="/"><h6>Link 2</h6></NavLink>
          <NavLink to="/"><h6>Link 3</h6></NavLink>
          <NavLink to="/"><h6>Link 4</h6></NavLink>
        </div>
      </nav>
    );
  }
}

