import { shallow } from "enzyme";
import React from "react";
import Checklist from "./checklist.component";
import Root from "../../Root";

it("renders Checklist component", () => {
  expect(
    shallow(
      <Root>
        <Checklist />
      </Root>
    )
  ).toMatchSnapshot();
});
