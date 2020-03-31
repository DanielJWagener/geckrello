import { shallow } from "enzyme";
import React from "react";
import AddList from "./add-list.component";
import Root from "../../Root";

it("renders AddList component", () => {
  expect(
    shallow(
      <Root>
        <AddList />
      </Root>
    )
  ).toMatchSnapshot();
});
