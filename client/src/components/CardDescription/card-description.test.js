import { shallow } from "enzyme";
import React from "react";
import CardDescription from "./card-description.component";
import Root from "../../Root";

it("renders CardDescription component", () => {
  expect(
    shallow(
      <Root>
        <CardDescription />
      </Root>
    )
  ).toMatchSnapshot();
});
