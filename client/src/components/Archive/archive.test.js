import { shallow } from "enzyme";
import React from "react";
import Archive from "./archive.component";
import Root from "../../Root";

it("renders Archive component", () => {
  expect(
    shallow(
      <Root>
        <Archive />
      </Root>
    )
  ).toMatchSnapshot();
});
