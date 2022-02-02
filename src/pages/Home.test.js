import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './Home'


Enzyme.configure({ adapter: new Adapter() })

describe("When Home renders", () => {
  let home
  beforeEach(() => {
    home = shallow(<Home />)
  })
  it("displays a heading", () => {
    const renderedHomeHeading = home.find("h1").text()
    expect(renderedHomeHeading).toEqual("Welcome to KatNip!")
  })
  it("checks the properties of the first img tag", () => {
    const renderedHomeImageAlt = home.find("img").prop("alt")
    const renderedHomeImageSrc = home.find("img").prop("src")
    expect(renderedHomeImageAlt).not.toBe("")
    expect(renderedHomeImageSrc).not.toBe("")
  })
})