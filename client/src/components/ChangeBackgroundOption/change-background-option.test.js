import { shallow } from "enzyme";
import React from "react";
import ChangeBackgroundOption from "./change-background-option.component";
import { ChangeBackgroundOption as ChangeBackgroundOptionPure } from "./change-background-option.component";
import Root from "../../Root";

it("renders ChangeBackgroundOption component", () => {
  expect(
    shallow(<ChangeBackgroundOptionPure color="blue" />).debug()
  ).toMatchSnapshot();
});
