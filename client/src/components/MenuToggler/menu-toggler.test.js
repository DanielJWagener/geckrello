import { shallow } from "enzyme";
import React from "react";
import MenuToggler from "./menu-toggler.component";
import Root from "../../Root";

it("renders MenuToggler component", () => {
  expect(shallow(<MenuToggler />).debug()).toMatchSnapshot();
});
