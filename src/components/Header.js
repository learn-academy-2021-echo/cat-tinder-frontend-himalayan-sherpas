import React, { Component } from "react";
import "./Header.css";
import "../App.css";
import katnip from "../assets/katnip.svg";
import { NavLink } from "react-router-dom";

const style = { textDecoration: "none", color: "#333333" };
export default class Header extends Component {
  render() {
    return (
      <nav className="NavBar">
        <NavLink to="/" style={style}>
          <div className="NavBar__Logo">
            <img src={katnip} alt="katnip logo" height="75px" />
            <h2 className="NavBar__Logo__Text">KatNip</h2>
          </div>
        </NavLink>
        <div className="NavBar__Links">
          <NavLink to="/catindex" style={style}>
            <h5>Our Cats</h5>
          </NavLink>
          <NavLink to="/catnew" style={style}>
            <h5>Add A Cat</h5>
          </NavLink>
        </div>
      </nav>
    );
  }
}
