import React, { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CatEdit from "./pages/CatEdit";
import CatIndex from "./pages/CatIndex";
import CatNew from "./pages/CatNew";
import CatShow from "./pages/CatShow";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
    };
  }

  componentDidMount() {
    this.readCat();
  }

  readCat = () => {
    fetch("http://localhost:3000/cats")
      .then((response) => response.json())
      .then((catsArray) => this.setState({ cats: catsArray.reverse() }))
      .catch((errors) => console.log("Cat read errors:", errors));
  };

  createCat = (newCat) => {
    fetch("http://localhost:3000/cats", {
      body: JSON.stringify(newCat),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then(() => this.readCat())
      .catch((errors) => console.log("Cat create errors:", errors));
  };

  updateCat = (updateCat, id) => {
    fetch(`http://localhost:3000/cats/${id}`, {
      body: JSON.stringify(updateCat),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
      .then((response) => response.json())
      .then(() => this.readCat())
      .catch((errors) => console.log("Cat update errors:", errors));
  };

  deleteCat = (id) => {
    fetch(`http://localhost:3000/cats/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => this.readCat())
      .catch((errors) => console.log("Cat update errors:", errors));
  };

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/catindex"
            render={() => <CatIndex cats={this.state.cats}></CatIndex>}
          />
          <Route
            path="/catshow/:id"
            render={(props) => {
              let id = +props.match.params.id;
              let cat = this.state.cats.find((cat) => cat.id === id);
              return <CatShow cat={cat} deleteCat={this.deleteCat} />;
            }}
          />
          <Route
            path="/catnew"
            render={() => <CatNew createCat={this.createCat} />}
          />
          <Route
            path="/catedit/:id"
            render={(props) => {
              let id = +props.match.params.id;
              let cat = this.state.cats.find((cat) => cat.id === id);
              return <CatEdit updateCat={this.updateCat} cat={cat} />;
            }}
          />
          <Route component={NotFound} />
          <h1>learn react</h1>
        </Switch>
        <Footer />
      </Router>
    );
  }
}
