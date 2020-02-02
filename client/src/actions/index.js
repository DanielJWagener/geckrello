import axios from "axios";

import {
  FETCH_BOARD_DATA,
  FETCH_USER,
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
  UNLOAD_BOARD,
  UPDATE_BOARD
} from "./types";

// AUTH
export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/v1/users/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

// BOARDS
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

export const addBoard = title => async dispatch => {
  await axios.post("/api/v1/boards", { title });

  const user = await axios.get("/api/v1/users/current_user");

  dispatch({ type: FETCH_USER, payload: user.data });
};

export const unloadBoard = () => {
  return { type: UNLOAD_BOARD, payload: null };
};

export const updateBoard = (id, data) => async dispatch => {
  const board = await axios.patch(`/api/v1/boards/${id}`, data);

  dispatch({ type: UPDATE_BOARD, payload: board.data.data });
};

// LISTS
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
    payload: list.data.data._id
  });
};

export const restoreList = listId => async dispatch => {
  const list = await axios.patch(`/api/v1/lists/${listId}`, {
    archived: false
  });
  dispatch({
    type: RESTORE_LIST,
    payload: list.data.data._id
  });
};

// CARDS

export const addCard = (title, listHome, boardHome) => async dispatch => {
  const newCard = await axios.post(`/api/v1/cards`, {
    title,
    listHome,
    boardHome
  });

  dispatch({
    type: ADD_CARD,
    payload: newCard.data.data
  });
};

export const moveCard = (cardId, newListHome) => async dispatch => {
  await axios.patch(`/api/v1/cards/${cardId}`, { listHome: newListHome });
  dispatch({
    type: MOVE_CARD,
    payload: {
      cardId,
      newListHome
    }
  });
};

export const copyCard = (sourceCardId, newListHome) => async dispatch => {
  // Find card to be copied (source card) in database
  let card = (await axios.get(`/api/v1/cards/${sourceCardId}`)).data.data;

  // Change the list home of that card
  card.listHome = newListHome;

  // Destructure fields for POST request (all but original document ID)
  const { description, archived, title, boardHome, listHome, checklist } = card;

  // Create card in database
  let newCard = await axios.post(`/api/v1/cards`, {
    description,
    archived,
    title,
    boardHome,
    listHome,
    checklist
  });

  // Send to re
  dispatch({
    type: COPY_CARD,
    payload: {
      sourceCardId,
      newCardId: newCard.data.data._id,
      newListHome
    }
  });
};

export const archiveCard = cardId => async dispatch => {
  await axios.patch(`/api/v1/cards/${cardId}`, { archived: true });

  dispatch({
    type: ARCHIVE_CARD,
    payload: cardId
  });
};

export const restoreCard = cardId => async dispatch => {
  await axios.patch(`/api/v1/cards/${cardId}`, {
    archived: false
  });

  dispatch({
    type: RESTORE_CARD,
    payload: cardId
  });
};

export const updateCardDescription = (
  cardId,
  descriptionInput
) => async dispatch => {
  await axios.patch(`/api/v1/cards/${cardId}`, {
    description: descriptionInput
  });

  dispatch({
    type: UPDATE_CARD_DESCRIPTION,
    payload: {
      cardId,
      descriptionInput
    }
  });
};

export const addChecklistItem = (cardId, label) => async dispatch => {
  // Push new checklist item to card
  const updatedCard = await axios.patch(`/api/v1/cards/${cardId}`, {
    $push: { checklist: { label } }
  });

  const { checklist } = updatedCard.data.data;

  dispatch({
    type: ADD_CHECKLIST_ITEM,
    payload: {
      cardId,
      checklist
    }
  });
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
