import { ADD_BOARD, FETCH_USER, FETCH_BOARD } from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_BOARD:
      return action.payload;
    default:
      return state;
  }
};
