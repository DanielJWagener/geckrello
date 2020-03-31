import actionTypes from "../types";

export default (state = null, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BOARD_DATA:
      return action.payload.board;
    case actionTypes.UNLOAD_BOARD:
      return null;
    case actionTypes.UPDATE_BOARD:
      return action.payload;
    default:
      return state;
  }
};
