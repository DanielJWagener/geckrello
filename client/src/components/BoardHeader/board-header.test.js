import { shallow } from "enzyme";
import React from "react";
import BoardHeader from "./board-header.component";
import Root from "../../Root";

it("renders BoardHeader component", () => {
  expect(
    shallow(
      <Root>
        <BoardHeader />
      </Root>
    )
  ).toMatchSnapshot();
});
