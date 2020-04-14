import axios from "axios";

import {
  FETCH_BOARD_DATA,
  PENDING_BOARD_BACKGROUND,
  UNLOAD_BOARD,
  UPDATE_BOARD,
  FETCH_USER
} from "../types";
import { normalizeCards } from "../cards/cards.utils";
import { normalizeLists } from "../lists/lists.utils";

export const fetchBoardData = boardId => async dispatch => {
  // Endpoints to GET a board, its lists, and its cards
  const boardEndpoint = `/api/v1/boards/${boardId}`;
  const listsEndpoint = `/api/v1/lists?boardHome=${boardId}`;
  const cardsEndpoint = `/api/v1/cards?boardHome=${boardId}`;

  // Run all GET requests concurrently with Promise.all()
  const endpoints = [boardEndpoint, listsEndpoint, cardsEndpoint];

  const boardDataPromises = endpoints.map(
    async endpoint => await axios.get(endpoint)
  );

  const [board, lists, cards] = await Promise.all(boardDataPromises);

  board.data.data.isPending = false;

  const cardsObj = normalizeCards(cards.data.data);
  const listsObj = normalizeLists(lists.data.data);

  // Send board data to reducers
  const payload = {
    board: board.data.data,
    lists: listsObj,
    cards: cardsObj
  };

  dispatch({ type: FETCH_BOARD_DATA, payload });
};

export const changeBackgroundForBoardPending = color => ({
  type: PENDING_BOARD_BACKGROUND,
  payload: {
    isPending: true,
    background: color
  }
});

export const addBoard = title => async dispatch => {
  // POST new board
  await axios.post("/api/v1/boards", { title });

  // Get user data, as it will now reference the new board
  const user = await axios.get("/api/v1/users/current_user");

  // Send user to reducers
  dispatch({ type: FETCH_USER, payload: user.data });
};

// Unload board data from Redux when user navigates back to dashboard, etc.
export const unloadBoard = () => {
  return { type: UNLOAD_BOARD };
};

export const updateBoard = (id, data) => async dispatch => {
  // Send PATCH request
  const board = await axios.patch(`/api/v1/boards/${id}`, data);

  // Send data to reducers
  dispatch({ type: UPDATE_BOARD, payload: board.data.data });
};
