import axios from "axios";

import {
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
  DELETE_CHECKLIST_ITEM
} from "./types";

// AUTH
export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

// LISTS

export const addList = (title, listId) => {
  return {
    type: ADD_LIST,
    payload: {
      title,
      listId
    }
  };
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
