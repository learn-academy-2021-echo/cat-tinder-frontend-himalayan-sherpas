import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class CatIndex extends Component {
  render() {
    const { cats } = this.props;
    return (
      <>
        <h1>Matched Cats!</h1>
        <ul>
          {cats.map((cat) => {
            return (
              <NavLink to={`/catshow/${cat.id}`} key={cat.id}>
                <li className="Cat-Name" key={cat.id}>
                  {cat.name}
                </li>
              </NavLink>
            );
          })}
        </ul>
      </>
    );
  }
}
