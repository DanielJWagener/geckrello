import actionTypes from "../types";
import authReducer from "./auth.reducer";

describe("auth reducer", () => {
  it("should return initial state, null", () => {
    expect(authReducer(undefined, {})).toEqual(null);
  });

  it("should return false if payload is falsy", () => {
    expect(authReducer(null, { type: actionTypes.FETCH_USER })).toEqual(false);

    expect(
      authReducer(null, { type: actionTypes.FETCH_USER, payload: "" })
    ).toEqual(false);

    expect(
      authReducer(null, { type: actionTypes.FETCH_USER, payload: null })
    ).toEqual(false);

    expect(
      authReducer(null, { type: actionTypes.FETCH_USER, payload: false })
    ).toEqual(false);
  });

  it("should return the currently logged in user", () => {
    expect(
      authReducer(null, { type: actionTypes.FETCH_USER, payload: "user" })
    ).toEqual("user");
  });
});
