import { shallow } from "enzyme";
import React from "react";
import BoardMenu from "./board-menu.component";
import BoardMenuItem from "./board-menu-item.component";
import Root from "../../Root";
import BoardMenuPanel from "./board-menu-panel.component";

it("renders BoardMenuPanel component", () => {
  expect(shallow(<BoardMenuPanel />).debug()).toMatchSnapshot();
});

it("renders BoardMenu component", () => {
  expect(shallow(<BoardMenu />).debug()).toMatchSnapshot();
});

it("renders BoardMenuItem component", () => {
  expect(shallow(<BoardMenuItem />).debug()).toMatchSnapshot();
});

it("shows two menu items: 'Show Archive' and 'Change Background", () => {
  const wrapped = shallow(<BoardMenu />);
  const labels = wrapped
    .find(BoardMenuItem)
    .map(menuItem => menuItem.render()["0"].children[0].data);

  expect(labels.length).toEqual(2);
  expect(labels).toContain("Show Archive");
  expect(labels).toContain("Change Background");
});
