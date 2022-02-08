import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import "./CatNew.css";
import "../App.css";

export default class CatNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newCat: {
        name: "",
        age: "",
        enjoys: "",
        image: "",
      },
      submitted: false,
    };
  }

  handleChange = (e) => {
    const { newCat } = this.state;
    newCat[e.target.name] = e.target.value;
    this.setState({ newCat: newCat });
  };

  handleSubmit = () => {
    const { newCat } = this.state;
    const filledOut = Object.values(newCat).every((value) => {
      return value;
    });
    if (filledOut && newCat.age > 0 && newCat.enjoys.length >= 10) {
      this.props.createCat(newCat);
      this.setState({ submitted: true });
    } else if (newCat.age < 1) {
      alert("Age has to be 1 or older");
    } else if (newCat.enjoys.length < 10) {
      alert("Hobbies must be more than 10 or more characters");
    } else {
      alert("Please fill out all fields");
    }
  };

  render() {
    const { newCat, submitted } = this.state;
    return (
      <section>
        <h2>Create A New Cat Profile</h2>
        <br />
        <Form className="Form">
          <FormGroup>
            <Label for="name">Cat Name</Label>
            <Input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={newCat.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="age">Age</Label>
            <Input
              type="number"
              name="age"
              min="1"
              onChange={this.handleChange}
              value={newCat.age}
            />
          </FormGroup>
          <FormGroup>
            <Label for="enjoys">Hobbies</Label>
            <Input
              type="text"
              name="enjoys"
              onChange={this.handleChange}
              value={newCat.enjoys}
            />
          </FormGroup>
          <FormGroup>
            <Label for="image">Image Link</Label>
            <Input
              type="text"
              name="image"
              onChange={this.handleChange}
              value={newCat.image}
            />
          </FormGroup>
          <Button name="submit" onClick={this.handleSubmit}>
            pet me
          </Button>
          {submitted && <Redirect to="/catindex" />}
        </Form>
      </section>
    );
  }
}
