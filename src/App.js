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
import cats from "./mockCats";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: cats,
    };
  }

  createCat = (cat) => {
    console.log(cat)
  }

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
              return <CatShow cat={cat} />;
            }}
          />
          <Route path="/catnew"
            render={() => <CatNew createCat={this.createCat} />} />
          <Route path="/catedit" component={CatEdit} />
          <Route component={NotFound} />
          <h1>learn react</h1>
        </Switch>
        <Footer />
      </Router>
    );
  }
}
