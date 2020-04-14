import {
  FETCH_BOARD_DATA,
  PENDING_BOARD_BACKGROUND,
  UNLOAD_BOARD,
  UPDATE_BOARD_SUCCESS
} from "../types";

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_BOARD_DATA:
      return action.payload.board;
    case PENDING_BOARD_BACKGROUND:
      return action.payload;
    case UNLOAD_BOARD:
      return null;
    case UPDATE_BOARD_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
