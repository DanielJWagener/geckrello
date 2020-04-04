import { shallow } from "enzyme";
import React from "react";
import Navbar from "./navbar.component";
import { Navbar as NavbarPure } from "./navbar.component";
import Root from "../../Root";

it("renders Navbar component", () => {
  expect(shallow(<NavbarPure />).debug()).toMatchSnapshot();
});
