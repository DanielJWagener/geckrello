import { shallow } from "enzyme";
import React from "react";
import CardModal from "./card-modal.component";
import { CardModal as CardModalPure } from "./card-modal.component";
import Root from "../../Root";

it("renders CardModal component", () => {
  expect(
    shallow(<CardModal history={{ goBack: () => {} }} />).debug()
  ).toMatchSnapshot();
});
