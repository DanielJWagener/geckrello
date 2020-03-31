import { shallow } from "enzyme";
import React from "react";
import ArchiveItem from "./archive-item.component";
import Root from "../../Root";

it("renders ArchiveItem component", () => {
  expect(
    shallow(
      <Root>
        <ArchiveItem />
      </Root>
    )
  ).toMatchSnapshot();
});
