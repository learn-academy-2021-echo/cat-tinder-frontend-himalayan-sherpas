import React, { Component } from "react";
import "./Header.css";
import "../App.css";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <nav className="NavBar">
        <NavLink to="/">
          <h2>KatNip</h2>
        </NavLink>
        <div className="NavBar__Links">
          <NavLink to="/catindex">
            <h6>Matched Cats</h6>
          </NavLink>
          <NavLink to="/catnew">
            <h6>Add A Cat</h6>
          </NavLink>
          <NavLink to="/">
            <h6>Link 3</h6>
          </NavLink>
          <NavLink to="/">
            <h6>Link 4</h6>
          </NavLink>
        </div>
      </nav>
    );
  }
}
