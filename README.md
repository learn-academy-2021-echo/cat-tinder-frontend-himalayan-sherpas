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
$ cd ..
$ cd pages
$ touch NotFound.css
```

# Testing with Jest and Enzyme

## Installing Enzyme

```Shell
$ yarn add -D enzyme react-test-renderer enzyme-adapter-react-16
$ yarn test
```

## Testing Imports and Empty Test Block

```Javascript
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
// remember to include any other dependencies from other components/files

Enzyme.configure({adapter: new Adapter()})

describe("", ()=>{
  it("", ()=>{
    expect().toEqual()
  })
})
```

## Created Home.test.js

```Javascript
// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import Home from './Home'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.

Enzyme.configure({adapter: new Adapter()})

describe("When Home renders", () => {
    it("displays a heading", () => {
      const home = shallow(<Home />)
      const homeHeading = home.find("h1").text()
      expect(homeHeading).toEqual("Home Component")
    })
  })

```

## Created App.test.js

```Javascript
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'


Enzyme.configure({ adapter: new Adapter() })

describe("When the app renders", () => {
  it("will display a header and footer", () => {
    const renderedApp = shallow(<App />)
    const renderedHeader = renderedApp.find("Header")
    const renderedFooter = renderedApp.find("Footer")
    expect(renderedHeader.length).toEqual(1)
    expect(renderedFooter.length).toEqual(1)
  })
})

```

## Created Header.test.js

```Javascript
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header'

Enzyme.configure({ adapter: new Adapter() })

describe("a header will load", () => {
    let header
    beforeEach(() => {
        header = shallow(<Header />)
    })
    it("will display working NavLinks", () => {
        const renderedNavlink = header.find("NavLink")
        expect(renderedNavlink.length).toEqual(5)
    })
})
```

## Created Footer.test.js

```Javascript
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from './Footer'

Enzyme.configure({ adapter: new Adapter() })

describe("a Footer will load", () => {
    let footer
    beforeEach(() => {
        footer = shallow(<Footer />)
    })
    it("will display working NavLinks", () => {
        // const renderedFooter = shallow(<Footer />)
        const renderedAnchorTags = footer.find("a")
        expect(renderedAnchorTags.length).toEqual(2)
    })
    it("all external links will open new window", () => {
        const renderedAnchorTags = footer.find('[target="_blank"]')
        expect(renderedAnchorTags.length).toEqual(2)
    })
})
```

## Created Home.test.js

```javascript
import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Home from "./Home";

Enzyme.configure({ adapter: new Adapter() });

describe("When Home renders", () => {
  let home;
  beforeEach(() => {
    home = shallow(<Home />);
  });
  it("displays a heading", () => {
    const renderedHomeHeading = home.find("h1").text();
    expect(renderedHomeHeading).toEqual("Home Component");
  });
});
```

# Read Functionality

## Stories

### As a developer, I can pass the cat mock data in state to my index component.

```javascript
constructor(props) {
    super(props);
    this.state = {
      cats: cats,
    };
  }
```

```javascript
<Route
  path="/catindex"
  render={() => <CatIndex cats={this.state.cats}></CatIndex>}
/>
```

### As a user, I can see a page that lists of all the cat names.

```javascript
# CatIndex.js
<ul>
  {this.props.cats.map((cat) => {
    return <li key={cat.id}>{cat.name}</li>;
  })}
</ul>
```

### As a developer, I have test coverage on my index component.
