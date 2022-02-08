import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Form, FormGroup, Input, Label, Button, NavLink } from "reactstrap";
import "./CatEdit.css";
import "../App.css";

export default class CatEdit extends Component {
  constructor(props) {
    super(props);
    let { name, age, enjoys, image } = this.props.cat;
    this.state = {
      updateCat: {
        name: name ? name : undefined,
        age: age ? age : undefined,
        enjoys: enjoys ? enjoys : undefined,
        image: image ? image : undefined,
      },
      submitted: false,
    };
  }

  handleChange = (e) => {
    let { updateCat } = this.state;
    updateCat[e.target.name] = e.target.value;
    this.setState({ updateCat: updateCat });
  };

  handleSubmit = () => {
    this.props.updateCat(this.state.updateCat, this.props.cat.id);
    this.setState({ submitted: true });
  };

  handleBack = () => {
    this.setState({ submitted: true });
  };

  render() {
    const { cat } = this.props;
    return (
      <section>
        <h2>Edit Cat Profile</h2>
        <Form>
          <FormGroup>
            <Label for="name">Cat Name</Label>
            <Input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.updateCat.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="age">Age</Label>
            <Input
              type="number"
              name="age"
              onChange={this.handleChange}
              value={this.state.updateCat.age}
            />
          </FormGroup>
          <FormGroup>
            <Label for="enjoys">Hobbies</Label>
            <Input
              type="text"
              name="enjoys"
              onChange={this.handleChange}
              value={this.state.updateCat.enjoys}
            />
          </FormGroup>
          <FormGroup>
            <Label for="image">Picture</Label>
            <Input
              type="text"
              name="image"
              onChange={this.handleChange}
              value={this.state.updateCat.image}
            />
          </FormGroup>
        </Form>
        <div className="edit-buttons">
          <Button name="submit" onClick={this.handleSubmit}>
            Update Profile
          </Button>
          <Button name="submit" onClick={this.handleBack}>
            Back
          </Button>
        </div>
        {this.state.submitted && <Redirect to={`/catshow/${cat.id}`} />}
      </section>
    );
  }
}
