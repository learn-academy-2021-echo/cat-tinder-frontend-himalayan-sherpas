import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CatShow from "./CatShow";
import cat from "../mockCats";

Enzyme.configure({ adapter: new Adapter() });

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
