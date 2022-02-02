# Create React App

```Shell
$ yarn create react-app cat-tinder-frontend
$ cd cat-tinder-frontend
$ git remote add origin https://github.com/learn-academy-2021-echo/cat-tinder-frontend-himalayan-sherpas.git
### for some reason, this was NOT necessary on my machine
$ git checkout -b main
$ git status
$ git add .
$ git commit -m 'initial commit'
$ git push origin main
###
$ yarn start
```

# Frontend Structure

## Create Directories

```Shell
$ git checkout -b frontend-structure
# created components, pages, assets directories
$ cd src
$ mkdir components pages assets
```

## Create Component Files

```Shell
$ cd components
$ touch Header.js Footer.js
```

## Create Pages Files

```Shell
$ cd ..
$ cd pages
$ touch Home.js CatIndex.js CatShow.js CatNew.js CatEdit.js NotFound.js
```

```JavaScript
import React, { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CatEdit from "./pages/CatEdit";
import CatIndex from "./pages/CatIndex";
import CatNew from "./pages/CatNew";
import CatShow from "./pages/CatShow";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Home />
        <CatIndex />
        <CatShow />
        <CatNew />
        <CatEdit />
        <NotFound />
        <Footer />
      </>
    );
  }
}

```

## Installs

```Shell
$ yarn add bootstrap
$ yarn add reactstrap
```

```JavaScript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css' // <== added new import

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

## Routes

```Shell
$ yarn add react-router-dom@5.3.0
```

```JavaScript
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
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/catindex" component={CatIndex} />
          <Route path="/catshow" component={CatShow} />
          <Route path="/catnew" component={CatNew} />
          <Route path="/catedit" component={CatEdit} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

```

## Create Mock Cats

```Shell
$ cd ..
$ touch mockCats.js
```

```JavaScript
let cats = [
  {
    id: 1,
    name: "Mittens",
    age: 5,
    enjoys: "sunshine and warm spots",
    image:
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 2,
    name: "Raisins",
    age: 4,
    enjoys: "being queen of the dogs",
    image:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80",
  },
  {
    id: 3,
    name: "Toast",
    age: 1,
    enjoys: "getting all the attention",
    image:
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
];
export default cats;
```

```JavaScript
// App.js
import cats from "./mockCats";
```

## Add UI Features

```Shell
$ cd components
$ touch Header.css Footer.css
```
