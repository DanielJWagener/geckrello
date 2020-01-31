import axios from "axios";

import {
  FETCH_BOARD_DATA,
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

export const fetchBoardData = boardId => async dispatch => {
  const boardEndpoint = `/api/v1/boards/${boardId}`;
  const listsEndpoint = `/api/v1/lists?boardHome=${boardId}`;
  const cardsEndpoint = `/api/v1/cards?boardHome=${boardId}`;

  const endpoints = [boardEndpoint, listsEndpoint, cardsEndpoint];

  const boardDataPromises = endpoints.map(
    async endpoint => await axios.get(endpoint)
  );

  const [board, lists, cards] = await Promise.all(boardDataPromises);

  const payload = {
    board: board.data.data,
    lists: lists.data.data,
    cards: cards.data.data
  };

  dispatch({ type: FETCH_BOARD_DATA, payload });
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

export const addList = (title, boardId) => async dispatch => {
  const newList = await axios.post("/api/v1/lists", {
    title,
    boardHome: boardId
  });

  dispatch({
    type: ADD_LIST,
    payload: newList.data.data
  });
};

export const archiveList = listId => async dispatch => {
  const list = await axios.patch(`/api/v1/lists/${listId}`, { archived: true });

  dispatch({
    type: ARCHIVE_LIST,
    payload: list._id
  });
};

export const restoreList = listId => async dispatch => {
  const list = await axios.patch(`/api/v1/lists/${listId}`, {
    archived: false
  });
  dispatch({
    type: RESTORE_LIST,
    payload: list._id
  });
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
