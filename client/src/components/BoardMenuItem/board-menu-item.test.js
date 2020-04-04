import { shallow } from "enzyme";
import React from "react";
import BoardMenuItem from "./board-menu-item.component";
import Root from "../../Root";

it("renders BoardMenuItem component", () => {
  expect(shallow(<BoardMenuItem />).debug()).toMatchSnapshot();
});
