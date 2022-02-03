import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CatIndex from "./CatIndex";
import cats from "../mockCats";

Enzyme.configure({ adapter: new Adapter() });

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
