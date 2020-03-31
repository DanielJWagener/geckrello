import { shallow } from "enzyme";
import React from "react";
import BoardLink from "./board-link.component";
import Root from "../../Root";

it("renders BoardLink component", () => {
  expect(
    shallow(
      <Root>
        <BoardLink />
      </Root>
    )
  ).toMatchSnapshot();
});
