import { shallow } from "enzyme";
import React from "react";
import CardDescription from "./card-description.component";
import { CardDescription as CardDescriptionPure } from "./card-description.component";
import Root from "../../Root";

it("renders CardDescription component", () => {
  expect(
    shallow(<CardDescriptionPure card={{ description: "" }} />).debug()
  ).toMatchSnapshot();
});

const inputText = "test";

it("displays an Edit button only if a description exists", () => {
  const wrapper = shallow(<CardDescriptionPure card={{ description: "" }} />);

  expect(wrapper.find(".widget-heading__button").length).toEqual(0);

  wrapper.setState({ descriptionInput: "\n" });
  wrapper.update();

  expect(wrapper.find(".widget-heading__button").length).toEqual(0);

  wrapper.setState({ descriptionInput: inputText });
  wrapper.update();

  expect(wrapper.find(".widget-heading__button").length).toEqual(1);
});

it("has a text area users can type into", () => {
  const wrapper = shallow(<CardDescriptionPure card={{ description: "" }} />);

  wrapper.find(".description__prompt").simulate("click");

  wrapper.find("textarea").simulate("change", {
    target: { value: inputText },
  });
  wrapper.update();

  expect(wrapper.find("textarea").prop("value")).toEqual(inputText);
});
