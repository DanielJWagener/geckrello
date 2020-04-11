import axios from "axios";
import { ADD_LIST, ARCHIVE_LIST, RESTORE_LIST } from "../types";

export const addList = (title, boardId) => async dispatch => {
  // POST new list data
  const newList = await axios.post("/api/v1/lists", {
    title,
    boardHome: boardId
  });

  // Send data to reducers
  dispatch({
    type: ADD_LIST,
    payload: newList.data.data
  });
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
