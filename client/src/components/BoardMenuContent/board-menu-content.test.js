import { shallow } from "enzyme";
import React from "react";
import BoardMenuContent from "./board-menu-content.component";
import Root from "../../Root";

it("renders BoardMenuContent component", () => {
  expect(
    shallow(
      <Root>
        <BoardMenuContent />
      </Root>
    )
  ).toMatchSnapshot();
});
