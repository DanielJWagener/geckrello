import listsActionTypes from "./list.types";
import boardsActionTypes from "../boards/boards.types";

export default (state = [], action) => {
  let currentLists = [...state];
  switch (action.type) {
    case boardsActionTypes.FETCH_BOARD_DATA:
      return action.payload.lists;
    case listsActionTypes.ADD_LIST:
      return [...state, action.payload];
    case listsActionTypes.ARCHIVE_LIST:
      currentLists.forEach(list => {
        if (list._id === action.payload) {
          list.archived = true;
        }
      });
      return currentLists;
    case listsActionTypes.RESTORE_LIST:
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
