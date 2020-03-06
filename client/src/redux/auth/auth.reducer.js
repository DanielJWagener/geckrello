import authActionTypes from "./auth.types";

export default (state = null, action) => {
  switch (action.type) {
    case authActionTypes.FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
};
