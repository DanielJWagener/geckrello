import { UNLOAD_BOARD, UPDATE_BOARD, FETCH_BOARD_DATA } from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_BOARD_DATA:
      return action.payload.board;
    case UNLOAD_BOARD:
      return null;
    case UPDATE_BOARD:
      return action.payload;
    default:
      return state;
  }
};
