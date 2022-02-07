import React, { Component } from "react";
import "./CatShow.css";
import "../App.css";
import { Button } from "reactstrap";
import { NavLink } from "react-router-dom";

export default class CatShow extends Component {
  render() {
    const { cat } = this.props;
    return (
      <section>
        <div className="cat-profile">
          <img
            className="profile-pic"
            src={cat.image}
            alt={`${cat.name} Profile Pic`}
          />
          <div className="buttons"></div>
          <div className="bio">
            <h2>Meet {cat.name}!</h2>
            <p>Age: {cat.age}</p>
            <p>Enjoys: {cat.enjoys}</p>
            <div className="Profile__Buttons">
              <NavLink to="/catindex">
                <Button>Back</Button>
              </NavLink>
              <NavLink to={`/catedit/${this.props.cat.id}`}>
                <Button>Edit Cat Profile</Button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
