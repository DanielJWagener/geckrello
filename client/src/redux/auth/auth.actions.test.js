import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

import actionTypes from "../types";
import * as authActions from "./auth.actions";

const mockStore = configureMockStore([thunkMiddleware]);

describe("auth actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("should fetch the user", done => {
    // // expect.assertions(1);
    // const store = mockStore();
    // fetchMock.mock("http://localhost:3000/api/v1/users/current_user", {
    //   data: { name: "Daniel" }
    // });
    // const expectedAction = {
    //   type: actionTypes.FETCH_USER,
    //   payload: { name: "Daniel" }
    // };
    // store.dispatch(authActions.fetchUser()).then(() => {
    //   expect(store.getActions()[1]).toEqual(expectedAction);
    //   done();
    // });
  });
});
