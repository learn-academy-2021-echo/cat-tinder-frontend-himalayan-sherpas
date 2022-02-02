import React, { Component } from "react";
import "./NotFound.css";
import kitty404 from "../assets/kitty404.svg";

export default class NotFound extends Component {
  render() {
    return (
      <div className="Not_Found">
        <h1>Meow you've gone and done it!</h1>
        <img src={kitty404} alt="404 Error" />
      </div>
    );
  }
}
