import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from './NotFound'
import kitty404 from '../assets/kitty404.svg'

Enzyme.configure({ adapter: new Adapter() })

describe("", () => {
    let notFound
    beforeEach(() => {
        notFound = shallow(<NotFound />)
    })
    it("verify that the image on NotFound is valid", () => {
        const renderedNotFound = notFound.find("img").prop("src")
        expect(renderedNotFound).toEqual(kitty404)
    })
})