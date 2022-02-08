import React, { Component } from "react";
import "../App.css";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <section className="Home">
        <div className="Home__Content">
          <h2 className="Intro">Welcome to</h2>
          <h1 className="Home__Name">Katnip!</h1>
          <p className="Intro__p">Find a cat for your cat to play with!</p>
          <p className="Intro__p2">
            <i>because we all know how cats love playing with each other</i>
          </p>
        </div>
      </section>
    );
  }
}
