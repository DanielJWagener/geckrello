import { shallow } from "enzyme";
import React from "react";

import { Board as BoardPure } from "./board.component";

it("renders Board component", () => {
  const mockProps = {
    match: { params: { id: 1 } },
    fetchBoardData: () => {},
  };

  expect(shallow(<BoardPure {...mockProps} />).debug()).toMatchSnapshot();
});
