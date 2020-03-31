import { shallow } from "enzyme";
import React from "react";
import ChangeBackground from "./change-background.component";
import Root from "../../Root";

it("renders ChangeBackground component", () => {
  expect(
    shallow(
      <Root>
        <ChangeBackground />
      </Root>
    )
  ).toMatchSnapshot();
});
