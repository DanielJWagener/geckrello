import { shallow } from "enzyme";
import React from "react";
import Checklist from "./checklist.component";
import { Checklist as ChecklistPure } from "./checklist.component";
import { ChecklistItem as ChecklistItemPure } from "./checklist-item.component";
import Root from "../../Root";

it("renders ChecklistItem component", () => {
  expect(shallow(<ChecklistItemPure />).debug()).toMatchSnapshot();
});

it("renders Checklist component", () => {
  expect(
    shallow(<ChecklistPure card={{ checklist: [] }} />).debug()
  ).toMatchSnapshot();
});
