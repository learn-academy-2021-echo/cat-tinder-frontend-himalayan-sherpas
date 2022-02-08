import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import "./CatEdit.css";
import "../App.css";

export default class CatEdit extends Component {
  constructor(props) {
    super(props);
    let { name, age, enjoys, image } = this.props.cat;
    this.state = {
      updateCat: {
        name: name ? name : "",
        age: age ? age : "",
        enjoys: enjoys ? enjoys : "",
        image: image ? image : "",
      },
      submitted: false,
    };
  }

  handleChange = (e) => {
    const { updateCat } = this.state;
    updateCat[e.target.name] = e.target.value;
    this.setState({ updateCat: updateCat });
  };

  handleSubmit = () => {
    const { updateCat } = this.state;
    const filledOut = Object.values(updateCat).every((value) => {
      return value;
    });
    if (filledOut && updateCat.age > 0 && updateCat.enjoys.length >= 10) {
      this.props.updateCat(updateCat, this.props.cat.id);
      this.setState({ submitted: true });
    } else if (updateCat.age < 1) {
      alert("Age has to be 1 or older");
    } else if (updateCat.enjoys.length < 10) {
      alert("Hobbies must be more than 10 or more characters");
    } else {
      alert("Please fill out all fields");
    }
  };

  handleBack = () => {
    this.setState({ submitted: true });
  };

  render() {
    const { cat } = this.props;
    const { updateCat, submitted } = this.state;
    return (
      <section>
        <h2>Edit Cat Profile</h2>
        <br />
        <Form>
          <FormGroup>
            <Label for="name">Cat Name</Label>
            <Input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={updateCat.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="age">Age</Label>
            <Input
              type="number"
              name="age"
              min="1"
              onChange={this.handleChange}
              value={updateCat.age}
            />
          </FormGroup>
          <FormGroup>
            <Label for="enjoys">Hobbies</Label>
            <Input
              type="text"
              name="enjoys"
              onChange={this.handleChange}
              value={updateCat.enjoys}
            />
          </FormGroup>
          <FormGroup>
            <Label for="image">Image Link</Label>
            <Input
              type="text"
              name="image"
              onChange={this.handleChange}
              value={updateCat.image}
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
        {submitted && <Redirect to={`/catshow/${cat.id}`} />}
      </section>
    );
  }
}
