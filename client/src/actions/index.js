import axios from "axios";

import {
  FETCH_USER,
  FETCH_LISTS,
  ADD_LIST,
  ARCHIVE_LIST,
  RESTORE_LIST,
  ADD_CARD,
  MOVE_CARD,
  COPY_CARD,
  ARCHIVE_CARD,
  RESTORE_CARD,
  UPDATE_CARD_DESCRIPTION,
  ADD_CHECKLIST_ITEM,
  CHECK_CHECKLIST_ITEM,
  DELETE_CHECKLIST_ITEM,
  ADD_BOARD,
  FETCH_BOARD,
  UNLOAD_BOARD,
  UPDATE_BOARD
} from "./types";

// AUTH
export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/v1/users/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

// BOARDS
export const addBoard = title => async dispatch => {
  await axios.post("/api/v1/boards", { title });

  const user = await axios.get("/api/v1/users/current_user");

  dispatch({ type: FETCH_USER, payload: user.data });
};

export const fetchBoard = id => async dispatch => {
  const board = await axios.get(`/api/v1/boards/${id}`);

  dispatch({ type: FETCH_BOARD, payload: board.data.data });
};

export const unloadBoard = () => {
  return { type: UNLOAD_BOARD, payload: null };
};

export const updateBoard = (id, data) => async dispatch => {
  const board = await axios.patch(`/api/v1/boards/${id}`, data);

  dispatch({ type: UPDATE_BOARD, payload: board.data.data });
};

// LISTS

export const fetchLists = boardId => async dispatch => {
  const lists = await axios.get(`/api/v1/lists?boardHome=${boardId}`);

  dispatch({ type: FETCH_LISTS, payload: lists.data.data });
};

export const addList = (title, listId) => async dispatch => {
  const newList = await axios.post("/api/v1/lists", {
    title,
    boardHome: listId
  });

  dispatch({
    type: ADD_LIST,
    payload: newList
  });
};

export const archiveList = listId => {
  return {
    type: ARCHIVE_LIST,
    payload: listId
  };
};

export const restoreList = listId => {
  return {
    type: RESTORE_LIST,
    payload: listId
  };
};

// CARDS

export const addCard = (title, cardId, listHome) => {
  return {
    type: ADD_CARD,
    payload: {
      title,
      cardId,
      listHome
    }
  };
};

export const moveCard = (cardId, newListHome) => {
  return {
    type: MOVE_CARD,
    payload: {
      cardId,
      newListHome
    }
  };
};

export const copyCard = (sourceCardId, newCardId, newListHome) => {
  return {
    type: COPY_CARD,
    payload: {
      sourceCardId,
      newCardId,
      newListHome
    }
  };
};

export const archiveCard = cardId => {
  return {
    type: ARCHIVE_CARD,
    payload: cardId
  };
};

export const restoreCard = cardId => {
  return {
    type: RESTORE_CARD,
    payload: cardId
  };
};

export const updateCardDescription = (cardId, descriptionInput) => {
  return {
    type: UPDATE_CARD_DESCRIPTION,
    payload: {
      cardId,
      descriptionInput
    }
  };
};

export const addChecklistItem = (
  cardId,
  checklistItemTitle,
  checklistItemId,
  checked
) => {
  return {
    type: ADD_CHECKLIST_ITEM,
    payload: {
      cardId,
      checklistItemTitle,
      checklistItemId,
      checked
    }
  };
};

export const checklistCheck = (cardId, checklistItemId) => {
  return {
    type: CHECK_CHECKLIST_ITEM,
    payload: {
      cardId,
      checklistItemId
    }
  };
};

export const checklistDelete = (cardId, checklistItemId) => {
  return {
    type: DELETE_CHECKLIST_ITEM,
    payload: {
      cardId,
      checklistItemId
    }
  };
};
