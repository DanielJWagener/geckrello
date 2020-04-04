import { shallow } from "enzyme";
import React from "react";
import List from "./list.component";
import { List as ListPure } from "./list.component";
import Root from "../../Root";

it("renders List component", () => {
  expect(shallow(<ListPure cards={[]} />).debug()).toMatchSnapshot();
});
