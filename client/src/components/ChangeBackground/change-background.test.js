import { shallow } from "enzyme";
import React from "react";
import ChangeBackground from "./change-background.component";
import { ChangeBackgroundOption as ChangeBackgroundOptionPure } from "./change-background-option.component";
import Root from "../../Root";

it("renders ChangeBackgroundOption component", () => {
  expect(
    shallow(<ChangeBackgroundOptionPure color="blue" />).debug()
  ).toMatchSnapshot();
});

it("renders ChangeBackground component", () => {
  expect(shallow(<ChangeBackground />).debug()).toMatchSnapshot();
});
