import actionTypes from "../types";

import cardsReducer from "./cards.reducer";

it("should return initial state", () => {
  const initialState = [];

  expect(cardsReducer(undefined, {})).toEqual(initialState);
});
