import boardActionTypes from "./boards.types";

export default (state = null, action) => {
  switch (action.type) {
    case boardActionTypes.FETCH_BOARD_DATA:
      return action.payload.board;
    case boardActionTypes.UNLOAD_BOARD:
      return null;
    case boardActionTypes.UPDATE_BOARD:
      return action.payload;
    default:
      return state;
  }
};
