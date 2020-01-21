import { ADD_BOARD } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_BOARD:
      return [...action.payload.boards];
    default:
      return state;
  }
};
