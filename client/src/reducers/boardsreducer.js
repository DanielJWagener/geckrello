import { ADD_BOARD, FETCH_USER } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_USER:
      if (action.payload.boards) {
        return [...action.payload.boards];
      }
      return state;
    case ADD_BOARD:
      return [...action.payload.boards];
    default:
      return state;
  }
};
