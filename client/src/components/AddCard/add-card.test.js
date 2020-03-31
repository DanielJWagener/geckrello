import { shallow } from "enzyme";
import React from "react";
import AddCard from "./add-card.component";
import Root from "../../Root";

it("renders AddCard component", () => {
  expect(
    shallow(
      <Root>
        <AddCard />
      </Root>
    )
  ).toMatchSnapshot();
});
