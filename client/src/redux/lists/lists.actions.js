import axios from "axios";
import _ from "lodash";

import {
  ADD_LIST,
  ADD_LIST_SUCCESS,
  ADD_LIST_FAILURE,
  ARCHIVE_LIST,
  RESTORE_LIST,
  ADD_CARD_FAILURE
} from "../types";

export const addList = (title, boardId) => async dispatch => {
  // STEP 1: Pure Redux
  const tempId = _.uniqueId("xxx");

  const newList = {
    _id: "",
    tempId,
    title,
    boardHome: boardId,
    archived: false
  };

  dispatch({
    type: ADD_LIST,
    payload: newList
  });

  // STEP 2: MongoDB
  try {
    // POST new list data
    const newListFromDB = await axios.post("/api/v1/lists", {
      title,
      boardHome: boardId
    });

    // Send data to reducers
    dispatch({
      type: ADD_LIST_SUCCESS,
      payload: {
        newId: newListFromDB.data.data._id,
        tempId
      }
    });
  } catch (error) {
    dispatch({
      type: ADD_LIST_FAILURE,
      payload: error.message
    });
  }
};

export const archiveList = listId => async dispatch => {
  // PATCH new list data
  await axios.patch(`/api/v1/lists/${listId}`, { archived: true });

  // Send list ID to redcuers
  dispatch({
    type: ARCHIVE_LIST,
    payload: listId
  });
};

export const restoreList = listId => async dispatch => {
  // PATCH new list data
  await axios.patch(`/api/v1/lists/${listId}`, {
    archived: false
  });

  // Send list ID to reducers
  dispatch({
    type: RESTORE_LIST,
    payload: listId
  });
};
