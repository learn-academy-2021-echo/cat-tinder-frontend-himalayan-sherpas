import React, { Component } from "react";

export default class CatShow extends Component {
  render() {
    const { cat } = this.props;
    return (
      <>
        <h2>Meet {cat.name}!</h2>
        <p>Age: {cat.age}</p>
        <p>Enjoys: {cat.enjoys}</p>
        <img src={cat.image} alt={`${cat.name} Profile Pic`} width="500px" />
      </>
    );
  }
}
