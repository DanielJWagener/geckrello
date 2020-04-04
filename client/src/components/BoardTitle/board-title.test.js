import { shallow } from "enzyme";
import React from "react";
import BoardTitle from "./board-title.component";
import { BoardTitle as BoardTitlePure } from "./board-title.component";
import Root from "../../Root";

it("renders BoardTitle component", () => {
  expect(
    shallow(<BoardTitlePure board={{ title: "title" }} />).debug()
  ).toMatchSnapshot();
});
