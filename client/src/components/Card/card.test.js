import { shallow } from "enzyme";
import React from "react";
import Card from "./card.component";
import Root from "../../Root";

it("renders Card component", () => {
  expect(
    shallow(
      <Root>
        <Card />
      </Root>
    )
  ).toMatchSnapshot();
});
