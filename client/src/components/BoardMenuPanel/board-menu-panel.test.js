import { shallow } from "enzyme";
import React from "react";
import BoardMenuPanel from "./board-menu-panel.component";
import Root from "../../Root";

it("renders BoardMenuPanel component", () => {
  expect(
    shallow(
      <Root>
        <BoardMenuPanel />
      </Root>
    )
  ).toMatchSnapshot();
});
