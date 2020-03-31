import { shallow } from "enzyme";
import React from "react";
import ChangeBackgroundOption from "./change-background-option.component";
import Root from "../../Root";

it("renders ChangeBackgroundOption component", () => {
  expect(
    shallow(
      <Root>
        <ChangeBackgroundOption />
      </Root>
    )
  ).toMatchSnapshot();
});
