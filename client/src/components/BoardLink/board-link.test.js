import { shallow } from "enzyme";
import React from "react";
import BoardLink from "./board-link.component";
import { BoardLink as BoardLinkPure } from "./board-link.component";
import Root from "../../Root";

it("renders BoardLink component", () => {
  expect(
    shallow(<BoardLinkPure background="blue" />).debug()
  ).toMatchSnapshot();
});

it("renders title from props", () => {
  const mockProps = {
    background: "blue",
    title: "Board Title"
  };
  const wrapped = shallow(<BoardLinkPure {...mockProps} />);
  expect(wrapped.find(".board-link__link").text()).toEqual(mockProps.title);
});
