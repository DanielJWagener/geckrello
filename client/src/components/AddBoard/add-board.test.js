import { shallow } from "enzyme";
import React from "react";
import AddBoard from "./add-board.component";
import Root from "../../Root";

it("renders AddBoard component", () => {
  expect(
    shallow(
      <Root>
        <AddBoard />
      </Root>
    )
  ).toMatchSnapshot();
});
