import { shallow } from "enzyme";
import React from "react";
import BoardHeader from "./board-header.component";

it("renders BoardHeader component", () => {
  expect(shallow(<BoardHeader />)).toMatchSnapshot();
});

it("renders with the board menu hidden", () => {
  const wrapped = shallow(<BoardHeader />);

  expect(wrapped.state().menuHidden).toEqual(true);
});
