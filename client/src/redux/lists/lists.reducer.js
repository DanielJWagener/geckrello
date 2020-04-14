import {
  FETCH_BOARD_DATA,
  UNLOAD_BOARD,
  ADD_LIST,
  ARCHIVE_LIST,
  RESTORE_LIST
} from "../types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  let currentLists = { ...state };
  switch (action.type) {
    case FETCH_BOARD_DATA:
      return action.payload.lists;
    case UNLOAD_BOARD:
      return INITIAL_STATE;
    case ADD_LIST:
      return [...state, action.payload];
    case ARCHIVE_LIST:
      currentLists.forEach(list => {
        if (list._id === action.payload) {
          list.archived = true;
        }
      });
      return currentLists;
    case RESTORE_LIST:
      currentLists.forEach(list => {
        if (list._id === action.payload) {
          list.archived = false;
        }
      });
      return currentLists;
    default:
      return state;
  }
};
