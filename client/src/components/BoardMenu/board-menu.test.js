import { shallow } from "enzyme";
import React from "react";
import BoardMenuContent from "./board-menu.component";
import BoardMenuItem from "./board-menu-item.component";
import Root from "../../Root";

it("renders BoardMenuContent component", () => {
  expect(shallow(<BoardMenuContent />).debug()).toMatchSnapshot();
});

it("renders BoardMenuItem component", () => {
  expect(shallow(<BoardMenuItem />).debug()).toMatchSnapshot();
});

it("shows two menu items: 'Show Archive' and 'Change Background", () => {
  const wrapped = shallow(<BoardMenuContent />);
  const labels = wrapped
    .find(BoardMenuItem)
    .map((menuItem) => menuItem.render()["0"].children[0].data);

  expect(labels.length).toEqual(2);
  expect(labels).toContain("Show Archive");
  expect(labels).toContain("Change Background");
});
