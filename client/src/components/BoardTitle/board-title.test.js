import { shallow, mount } from "enzyme";
import React from "react";
import BoardTitle from "./board-title.component";
import { BoardTitle as BoardTitlePure } from "./board-title.component";
import Root from "../../Root";

const mockProps = {
  board: {
    title: "title",
  },
};

it("renders BoardTitle component", () => {
  expect(shallow(<BoardTitlePure {...mockProps} />).debug()).toMatchSnapshot();
});

it("has an input users can type into", () => {
  const wrapper = mount(<BoardTitlePure {...mockProps} />);
  wrapper.find("input").simulate("change", {
    target: { value: "new title" },
  });
  wrapper.update();
  expect(wrapper.find("input").prop("value")).toEqual("new title");
});
