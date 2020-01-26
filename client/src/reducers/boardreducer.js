import {
  ADD_BOARD,
  FETCH_USER,
  FETCH_BOARD,
  UNLOAD_BOARD
} from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_BOARD:
      return action.payload;
    case UNLOAD_BOARD:
      return null;
    default:
      return state;
  }
};
