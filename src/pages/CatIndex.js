import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import "./CatIndex.css";

export default class CatIndex extends Component {
  render() {
    const { cats } = this.props;
    return (
      <section>
        <h1>Meet Our Cats!</h1>
        <br />
        <div className="Index">
          {cats.map((cat) => {
            return (
              <NavLink
                to={`/catshow/${cat.id}`}
                key={cat.id}
                style={{ textDecoration: "none" }}
              >
                <div className="Index__Pic">
                  <img src={cat.image} alt={cat.name} key={cat.id} />
                  <p>{cat.name}</p>
                </div>
              </NavLink>
            );
          })}
        </div>
      </section>
    );
  }
}
