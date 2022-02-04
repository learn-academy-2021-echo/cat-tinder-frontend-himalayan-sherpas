import React, { Component } from "react";
import './CatShow.css';
import '../App.css';

export default class CatShow extends Component {
  render() {
    const { cat } = this.props;
    return (
      <section>
        <div className="cat-profile" >
          <img className="profile-pic" src={cat.image} alt={`${cat.name} Profile Pic`} />
          <div className="buttons"></div>
          <div className="bio">
            <h2>Meet {cat.name}!</h2>
            <p>Age: {cat.age}</p>
            <p>Enjoys: {cat.enjoys}</p>
          </div>
        </div>
      </section>
    );
  }
}
