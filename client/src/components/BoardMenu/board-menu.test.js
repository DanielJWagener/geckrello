import { shallow } from "enzyme";
import React from "react";
import BoardMenu from "./board-menu.component";
import Root from "../../Root";

it("renders BoardMenu component", () => {
  expect(shallow(<BoardMenu menuHidden />).debug()).toMatchSnapshot();
});

it("is hidden on mount", () => {
  const wrapper = shallow(<BoardMenu menuHidden />);

  expect(wrapper.find(".sidebar--hidden").length).toEqual(1);
});
