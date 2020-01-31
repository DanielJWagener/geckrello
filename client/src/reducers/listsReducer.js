import {
  ADD_LIST,
  ARCHIVE_LIST,
  RESTORE_LIST,
  FETCH_BOARD_DATA
} from "../actions/types";

export default (state = [], action) => {
  let currentLists = [...state];
  switch (action.type) {
    case FETCH_BOARD_DATA:
      return action.payload.lists;
    case ADD_LIST:
      return [...state, action.payload];
    case ARCHIVE_LIST:
      currentLists.forEach(list => {
        if (list.listId === action.payload) {
          list.archived = true;
        }
      });
      return currentLists;
    case RESTORE_LIST:
      currentLists.forEach(list => {
        if (list.listId === action.payload) {
          list.archived = false;
        }
      });
      return currentLists;
    default:
      return state;
  }
};
