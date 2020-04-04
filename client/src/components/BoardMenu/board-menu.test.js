import { shallow } from "enzyme";
import React from "react";
import BoardMenu from "./board-menu.component";
import Root from "../../Root";

it("renders BoardMenu component", () => {
  expect(shallow(<BoardMenu />).debug()).toMatchSnapshot();
});
