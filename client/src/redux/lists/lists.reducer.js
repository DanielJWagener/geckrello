import actionTypes from "../types";

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  let currentLists = [...state];
  switch (action.type) {
    case actionTypes.FETCH_BOARD_DATA:
      return action.payload.lists;
    case actionTypes.UNLOAD_BOARD:
      return INITIAL_STATE;
    case actionTypes.ADD_LIST:
      return [...state, action.payload];
    case actionTypes.ARCHIVE_LIST:
      currentLists.forEach(list => {
        if (list._id === action.payload) {
          list.archived = true;
        }
      });
      return currentLists;
    case actionTypes.RESTORE_LIST:
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
