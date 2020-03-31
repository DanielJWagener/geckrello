import { shallow } from "enzyme";
import React from "react";
import List from "./list.component";
import Root from "../../Root";

it("renders List component", () => {
  expect(
    shallow(
      <Root>
        <List />
      </Root>
    )
  ).toMatchSnapshot();
});
