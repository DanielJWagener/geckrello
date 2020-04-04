import { shallow } from "enzyme";
import React from "react";
import ArchiveItem from "./archive-item.component";
import { ArchiveItem as ArchiveItemPure } from "./archive-item.component";
import Root from "../../Root";

it("renders ArchiveItem component", () => {
  expect(shallow(<ArchiveItemPure />).debug()).toMatchSnapshot();
});
