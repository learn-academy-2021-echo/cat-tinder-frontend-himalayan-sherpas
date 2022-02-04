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
        img: "",
      },
      submitted: false,
    };
  }

  handleChange = (e) => {
    console.log(e.target.value);
    let { newCat } = this.state;
    newCat[e.target.name] = e.target.value;
    this.setState({ newCat: newCat });
  };

  handleSubmit = () => {
    this.props.createCat(this.state.newCat);
    this.setState({ submitted: true });
  };

  render() {
    return (
      <>
        <h2>Create A New Cat Profile</h2>
        <Form>
          <FormGroup>
            <Label for="name">Cat Name</Label>
            <Input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.newCat.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="age">Age</Label>
            <Input
              type="number"
              name="age"
              onChange={this.handleChange}
              value={this.state.newCat.age}
            />
          </FormGroup>
          <FormGroup>
            <Label for="enjoys">Hobbies</Label>
            <Input
              type="text"
              name="enjoys"
              onChange={this.handleChange}
              value={this.state.newCat.enjoys}
            />
          </FormGroup>
          <FormGroup>
            <Label for="img">Picture</Label>
            <Input
              type="text"
              name="img"
              onChange={this.handleChange}
              value={this.state.newCat.img}
            />
          </FormGroup>
          <Button name="submit" onClick={this.handleSubmit}>
            pet me
          </Button>
          {this.state.submitted && <Redirect to="/catindex" />}
        </Form>
      </>
    );
  }
}
