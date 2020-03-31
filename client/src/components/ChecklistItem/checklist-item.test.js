import { shallow } from "enzyme";
import React from "react";
import ChecklistItem from "./checklist-item.component";
import Root from "../../Root";

it("renders ChecklistItem component", () => {
  expect(
    shallow(
      <Root>
        <ChecklistItem />
      </Root>
    )
  ).toMatchSnapshot();
});
