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

```javascript
describe("When CatIndex renders mock cats", () => {
  let catIndex;
  beforeEach(() => {
    catIndex = shallow(<CatIndex cats={cats} />);
  });
  it("see three names", () => {
    const renderedCatIndexArray = catIndex
      .find(".Cat-Name")
      .map((cat) => cat.text());
    expect(renderedCatIndexArray).toEqual(["Mittens", "Raisins", "Toast"]);
  });
});
```

### As a developer, I can refactor the show route to pass the param of id for one cat.

```javascript
import React, { Component } from "react";

export default class CatShow extends Component {
  render() {
    const { cat } = this.props;
    return (
      <>
        <h2>Meet {cat.name}!</h2>
        <p>Age: {cat.age}</p>
        <p>Enjoys: {cat.enjoys}</p>
        <img src={cat.image} alt={`${cat.name} Profile Pic`} width="500px" />
      </>
    );
  }
}
```

### As a user, I can see a page featuring all the information for one cat.

```javascript
<h2>Meet {cat.name}!</h2>
<p>Age: {cat.age}</p>
<p>Enjoys: {cat.enjoys}</p>
<img src={cat.image} alt={`${cat.name} Profile Pic`} width="500px" />
```

### As a user, I can click on a cat name and be taken to a page that shows me all the information about that cat.

```javascript
<ul>
  {cats.map((cat) => {
    return (
      <NavLink to={`/catshow/${cat.id}`} key={cat.id}>
        <li className="Cat-Name" key={cat.id}>
          {cat.name}
        </li>
      </NavLink>
    );
  })}
</ul>
```

### As a developer, I have test coverage on my show component.

```javascript
describe("When CatShow renders", () => {
  let catShow;
  beforeEach(() => {
    catShow = shallow(<CatShow cat={cat} />);
  });
  it("h2, name of cats, should be greater than 6", () => {
    const renderedCatShow = catShow.find("h2").text().split("").length;
    cat.map((value) =>
      expect(renderedCatShow + value.name.length).toBeGreaterThan(6)
    );
  });
});
```

# Create Functionality

## Create

### As a user, I can fill out a form to add a new cat.

```Javascript
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
          <Button name="submit" onClick={this.handleSubmit}>pet me</Button>
          {this.state.submitted && <Redirect to="/catindex" />}
        </Form>
```

### As a developer, I can store the cat object in state.

```Javascript
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
    }
  }
```

### As a developer, I can pass the cat object to App.js on submit and see the cat object logged in the console

```Javascript
// CatNew.js
  handleChange = (e) => {
    console.log(e.target.value)
    let { newCat } = this.state
    newCat[e.target.name] = e.target.value
    this.setState({ newCat: newCat })
  }

  handleSubmit = () => {
    this.props.createCat(this.state.newCat)
    this.setState({ submitted: true })
  }

// App.js

  createCat = (cat) => {
    console.log(cat)
  }

```

### As a user, I can be routed to the index page after I submit the new cat form.

```Javascript
{this.state.submitted && <Redirect to="/catindex" />}
```

### As a developer, I have test coverage on my new page.

```Javascript
import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CatNew from "./CatNew";
import cat from "../mockCats";

Enzyme.configure({ adapter: new Adapter() });

describe("When catNew renders", () => {
    let catNew;
    beforeEach(() => {
        catNew = shallow(<CatNew />);
    });
    it("will display a set of forms to take in name, age, enjoys, and img.", () => {
        const catNewInput = catNew.find("Input");
        expect(catNewInput.length).toEqual(4)
    });
});

```

# Fetch

## Fetch for Read

### As a developer, I can get the cats from the database and set the array in state.

### As a user, I can see all the cats.

### As a user, I can see the information for just one cat.

```javascript
componentDidMount() {
  this.readCat();
}

readCat = () => {
  fetch("http://localhost:3000/cats")
    .then((response) => response.json())
    .then((catsArray) => this.setState({ cats: catsArray }))
    .catch((errors) => console.log("Cat read errors:", errors));
};
```

## Fetch for Create

### As a developer, I can update the `createNewCat` method to post information to the database.

### As a user, I can create a new cat.

### As a user, I can see my new cat in the cat list.

```javascript
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
```

## Fetch for Update (STRETCH)

### As a developer, I can update the `updateCat` method to update information in the database.

### As a user, I can update an existing cat.

### As a user, I can see the information for my updated cat.

```javascript
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
```

## Fetch for Delete (STRETCH)

### As a developer, I can create a `deleteCat` method that will remove a cat from the database.

### As a developer, I can pass the method to the CatShow component.

### As a user, I can navigate to the page of one specific cat and see a delete button.

### As a user, I can click the button remove the cat.

### As a user, I can be rerouted to the CatIndex page after the cat is removed.

```javascript
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
```
