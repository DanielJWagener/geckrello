import _ from "lodash";

import {
  FETCH_BOARD_DATA,
  UNLOAD_BOARD,
  ADD_LIST,
  ADD_LIST_SUCCESS,
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
      // Create new key with tempId
      currentLists[action.payload.tempId] = action.payload;
      return currentLists;
    case ADD_LIST_SUCCESS:
      // Update target list's id key, then populate its _id field with id from database
      currentLists[action.payload.newId] = {
        ...currentLists[action.payload.tempId]
      };
      currentLists[action.payload.newId]._id = action.payload.newId;
      return _.omit(currentLists, action.payload.tempId);
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
