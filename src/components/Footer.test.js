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