import { shallow } from "enzyme";
import React from "react";
import CardUtilties from "./card-utilities.component";
import Root from "../../Root";

it("renders CardUtilties component", () => {
  expect(
    shallow(
      <Root>
        <CardUtilties />
      </Root>
    )
  ).toMatchSnapshot();
});
