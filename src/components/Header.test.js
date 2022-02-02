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
    it("will check for classNames under HTML elements", () => {
        const renderedNavLink = header.find("nav")
        // renderedNavLink searches for <nav> element
        // <nav> element must contain a class and must not have an empty string for className
        expect(renderedNavLink.hasClass("")).toEqual(false)
    })
})