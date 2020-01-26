import {
  ADD_BOARD,
  FETCH_USER,
  FETCH_BOARD,
  UNLOAD_BOARD,
  UPDATE_BOARD
} from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_BOARD:
      return action.payload;
    case UNLOAD_BOARD:
      return null;
    case UPDATE_BOARD:
      return action.payload;
    default:
      return state;
  }
};
