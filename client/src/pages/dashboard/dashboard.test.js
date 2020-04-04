import { shallow } from "enzyme";
import React from "react";

import { Dashboard as DashboardPure } from "./dashboard.component";
const mockProps = {
  auth: {
    givenName: "",
    boards: [],
  },
  fetchUser: () => {},
};

it("renders Dashboard component", () => {
  expect(shallow(<DashboardPure {...mockProps} />).debug()).toMatchSnapshot();
});
