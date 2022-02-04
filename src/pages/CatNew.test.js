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
