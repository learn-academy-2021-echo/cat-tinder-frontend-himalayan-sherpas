import React, { Component } from "react";
import "./CatShow.css";
import "../App.css";
import { Button } from "reactstrap";
import { Redirect } from "react-router-dom";

export default class CatShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: "false",
    };
  }

  handleSubmit = () => {
    if (
      window.confirm("Are you sure you want to delete this profile?") === true
    ) {
      this.props.deleteCat(this.props.cat.id);
      this.setState({ submitted: "true" });
    } else {
      this.setState({ submitted: "false" });
    }
  };

  handleBackSubmit = () => {
    this.setState({ submitted: "back" });
  };

  handleEditSubmit = () => {
    this.setState({ submitted: "edit" });
  };

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
              <Button onClick={this.handleEditSubmit}>Edit Profile</Button>
              <Button onClick={this.handleSubmit}>Delete Profile</Button>
              <Button onClick={this.handleBackSubmit}>Back</Button>
            </div>
          </div>
        </div>
        {this.state.submitted === "edit" && (
          <Redirect to={`/catedit/${cat.id}`} />
        )}
        {this.state.submitted === "back" && <Redirect to={`/catindex`} />}
        {this.state.submitted === "true" && <Redirect to={`/catindex`} />}
      </section>
    );
  }
}
