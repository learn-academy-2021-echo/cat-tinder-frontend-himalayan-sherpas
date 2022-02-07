import React, { Component } from "react";
import "../App.css";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <section className="Home">
        <div className="Home__Content">
          <h1 className="Intro">Welcome to KatNip!</h1>
          <p className="Intro__p">Find a cat for your cat to play with!</p>
          <p className="Intro__p2">
            (because we all know how cats love playing with each other)
          </p>
        </div>
      </section>
    );
  }
}
