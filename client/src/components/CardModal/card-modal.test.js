import { shallow } from "enzyme";
import React from "react";
import CardModal from "./card-modal.component";
import Root from "../../Root";

it("renders CardModal component", () => {
  expect(
    shallow(
      <Root>
        <CardModal />
      </Root>
    )
  ).toMatchSnapshot();
});
