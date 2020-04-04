import { shallow } from "enzyme";
import React from "react";
import BoardLink from "./board-link.component";
import Root from "../../Root";

it("renders BoardLink component", () => {
  expect(shallow(<BoardLink background="blue" />).debug()).toMatchSnapshot();
});
