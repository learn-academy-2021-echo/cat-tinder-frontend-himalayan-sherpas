import React, { Component } from "react";

export default class CatIndex extends Component {
  render() {
    const { cats } = this.props;
    return (
      <>
        <h1>List of Cats who use this service!</h1>
        <ul>
          {cats.map((cat) => {
            return (
              <li className="Cat-Name" key={cat.id}>
                {cat.name}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
