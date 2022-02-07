import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CatEdit from "./CatEdit";
import cats from "../mockCats";

Enzyme.configure({ adapter: new Adapter() });

describe("When catEdit renders", () => {
  let catEdit;
  beforeEach(() => {
    catEdit = shallow(<CatEdit />);
  });
  it("will display a set of forms to take in name, age, enjoys, and img.", () => {
    const catEditInput = catEdit.find("Input");
    expect(catEditInput.length).toEqual(4);
  });
});
