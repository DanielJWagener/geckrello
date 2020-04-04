import { shallow } from "enzyme";
import React from "react";

import { Landing as LandingPure } from "./landing.component";

it("renders Landing component", () => {
  expect(shallow(<LandingPure />).debug()).toMatchSnapshot();
});
