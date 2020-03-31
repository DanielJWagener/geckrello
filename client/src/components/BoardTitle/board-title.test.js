import { shallow } from "enzyme";
import React from "react";
import BoardTitle from "./board-title.component";
import Root from "../../Root";

it("renders BoardTitle component", () => {
  expect(
    shallow(
      <Root>
        <BoardTitle />
      </Root>
    )
  ).toMatchSnapshot();
});
