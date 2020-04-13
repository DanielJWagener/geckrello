import axios from "axios";
import _ from "lodash";

import { normalizeChecklist } from "./cards.utils";

import {
  ADD_CARD,
  ADD_CARD_SUCCESS,
  ADD_CARD_FAILURE,
  ADD_CHECKLIST_ITEM,
  ADD_CHECKLIST_ITEM_SUCCESS,
  ADD_CHECKLIST_ITEM_FAILURE,
  ARCHIVE_CARD,
  ARCHIVE_CARD_SUCCESS,
  ARCHIVE_CARD_FAILURE,
  CHECK_OR_UNCHECK,
  CHECK_OR_UNCHECK_SUCCESS,
  CHECK_OR_UNCHECK_FAILURE,
  COPY_CARD,
  COPY_CARD_SUCCESS,
  COPY_CARD_FAILURE,
  DELETE_CHECKLIST_ITEM,
  DELETE_CHECKLIST_ITEM_SUCCESS,
  DELETE_CHECKLIST_ITEM_FAILURE,
  MOVE_CARD,
  MOVE_CARD_SUCCESS,
  MOVE_CARD_FAILURE,
  RESTORE_CARD,
  RESTORE_CARD_SUCCESS,
  RESTORE_CARD_FAILURE,
  UPDATE_CARD_DESCRIPTION,
  UPDATE_CARD_DESCRIPTION_SUCCESS,
  UPDATE_CARD_DESCRIPTION_FAILURE,
  UPDATE_CHECKLIST
} from "../types";

export const addCard = (title, listHome, boardHome) => async dispatch => {
  const tempId = _.uniqueId("zzzzz");

  const newCard = {
    _id: "",
    tempId,
    title,
    listHome,
    boardHome,
    description: "",
    checklist: [],
    archived: false
  };

  // Send new card to reducers
  dispatch({
    type: ADD_CARD,
    payload: newCard
  });

  // Persist new card in database
  try {
    const cardFromDatabase = await axios.post(`/api/v1/cards`, {
      title,
      listHome,
      boardHome
    });

    dispatch({
      type: ADD_CARD_SUCCESS,
      payload: { newId: cardFromDatabase.data.data._id, tempId }
    });
  } catch (error) {
    dispatch({
      type: ADD_CARD_FAILURE,
      error
    });
  }
};

export const moveCard = (cardId, newListHome) => async dispatch => {
  // Send arguments to reducers
  dispatch({
    type: MOVE_CARD,
    payload: {
      cardId,
      newListHome
    }
  });

  // Make PATCH request
  try {
    await axios.patch(`/api/v1/cards/${cardId}`, { listHome: newListHome });
    dispatch({
      type: MOVE_CARD_SUCCESS
    });
  } catch (error) {
    dispatch({
      type: MOVE_CARD_FAILURE
    });
  }
};

export const copyCard = (sourceCardId, newListHome) => async (
  dispatch,
  getState
) => {
  // STEP 1: Pure Redux
  const tempId = _.uniqueId("zzzzz");

  // Make temporary checklist item IDs for each checklist item in the source card
  const sourceCardChecklist = getState().cards[sourceCardId].checklist;
  let checklistTempIds = new Array(Object.keys(sourceCardChecklist).length);
  checklistTempIds = checklistTempIds.fill("").map(el => _.uniqueId("yyyy"));

  // Send arguments to reducer
  dispatch({
    type: COPY_CARD,
    payload: {
      tempId,
      sourceCardId,
      newListHome,
      checklistTempIds
    }
  });

  // STEP 2: MongoDB
  try {
    // GET card to be copied (source card)
    let card = (await axios.get(`/api/v1/cards/${sourceCardId}`)).data.data;

    // Change the list home of that card
    card.listHome = newListHome;

    // Destructure fields for POST request (all but original document ID)
    let { description, archived, title, boardHome, listHome, checklist } = card;

    // If the source card has a checklist, copy all values into new array so Mongo can create new IDs
    if (checklist) {
      checklist = checklist.map(({ checked, label }) => ({ checked, label }));
    }

    // Create card in database
    let newCard = await axios.post(`/api/v1/cards`, {
      description,
      archived,
      title,
      boardHome,
      listHome,
      checklist
    });

    // Get the relevant information (Not destructing! We'd pollute the namespace otherwise)
    let checklistFromDB = normalizeChecklist(newCard.data.data.checklist);
    const idFromDB = newCard.data.data._id;

    dispatch({
      type: COPY_CARD_SUCCESS,
      payload: {
        checklistFromDB,
        idFromDB,
        tempId
      }
    });
  } catch (error) {
    dispatch({
      type: COPY_CARD_FAILURE,
      payload: error.message
    });
  }
};

export const archiveCard = cardId => async dispatch => {
  // Send card ID to reducers
  dispatch({
    type: ARCHIVE_CARD,
    payload: cardId
  });

  // Make PATCH request
  try {
    await axios.patch(`/api/v1/cards/${cardId}`, { archived: true });
    dispatch({
      type: ARCHIVE_CARD_SUCCESS
    });
  } catch (error) {
    dispatch({
      type: ARCHIVE_CARD_FAILURE,
      payload: error.message
    });
  }
};

export const restoreCard = cardId => async dispatch => {
  // Send card ID to reducers
  dispatch({
    type: RESTORE_CARD,
    payload: cardId
  });

  try {
    await axios.patch(`/api/v1/cards/${cardId}`, { archived: false });
    dispatch({
      type: RESTORE_CARD_SUCCESS
    });
  } catch (error) {
    dispatch({
      type: RESTORE_CARD_FAILURE,
      payload: error.message
    });
  }
};

export const updateCardDescription = (
  cardId,
  descriptionInput
) => async dispatch => {
  // Send arguments to reducers
  dispatch({
    type: UPDATE_CARD_DESCRIPTION,
    payload: {
      cardId,
      descriptionInput
    }
  });

  // Make PATCH request
  try {
    await axios.patch(`/api/v1/cards/${cardId}`, {
      description: descriptionInput
    });

    dispatch({
      type: UPDATE_CARD_DESCRIPTION_SUCCESS
    });
  } catch (error) {
    dispatch({
      type: UPDATE_CARD_DESCRIPTION_FAILURE,
      payload: error.message
    });
  }
};

export const addChecklistItem = (cardId, label) => async dispatch => {
  // STEP 1: Pure Redux
  const tempId = _.uniqueId("yyyy");

  dispatch({
    type: ADD_CHECKLIST_ITEM,
    payload: {
      cardId,
      label,
      tempId
    }
  });

  // STEP 2: MongoDB
  try {
    // Push new checklist item to card
    const updatedCard = await axios.patch(`/api/v1/cards/${cardId}`, {
      $push: { checklist: { label } }
    });

    // Send new checklist from DB to reducers
    const checklistFromDB = updatedCard.data.data.checklist;

    dispatch({
      type: ADD_CHECKLIST_ITEM_SUCCESS,
      payload: {
        cardId,
        checklist: normalizeChecklist(checklistFromDB)
      }
    });
  } catch (error) {
    dispatch({
      type: ADD_CHECKLIST_ITEM_FAILURE,
      payload: error.message
    });
  }
};

export const checkOrUncheckChecklistItem = (
  cardId,
  checklistItemId,
  checkedStatus
) => async dispatch => {
  // STEP 1: Pure Redux
  dispatch({
    type: CHECK_OR_UNCHECK,
    payload: {
      cardId,
      checklistItemId,
      checked: !checkedStatus
    }
  });

  // STEP 2: MongoDB
  try {
    // Set checked field to false if currently true, and vice-versa
    const updateBody = { $set: { "checklist.$.checked": !checkedStatus } };

    // Update card and get updated checklist from it
    const updatedCard = await axios.patch(
      `/api/v1/cards/${cardId}/checklist/${checklistItemId}`,
      updateBody
    );
    const checklistFromDB = updatedCard.data.data.checklist;

    // Send updated checklist to reducers
    dispatch({
      type: CHECK_OR_UNCHECK_SUCCESS,
      payload: {
        cardId,
        checklist: normalizeChecklist(checklistFromDB)
      }
    });
  } catch (error) {
    dispatch({
      type: CHECK_OR_UNCHECK_FAILURE,
      payload: error.message
    });
  }
};

export const deleteChecklistItem = (
  cardId,
  checklistItemId
) => async dispatch => {
  // STEP 1: Pure Redux
  dispatch({
    type: DELETE_CHECKLIST_ITEM,
    payload: {
      cardId,
      checklistItemId
    }
  });
  // STEP 2: MongoDB
  try {
    // Make DELETE request (internally a findByIdAndUpdate method on the Card model)
    const updatedCard = await axios.delete(
      `/api/v1/cards/${cardId}/checklist/${checklistItemId}`
    );

    // Send updated checklist to reducers
    const checklistFromDB = updatedCard.data.data.checklist;

    dispatch({
      type: DELETE_CHECKLIST_ITEM_SUCCESS,
      payload: {
        cardId,
        checklist: normalizeChecklist(checklistFromDB)
      }
    });
  } catch (error) {
    dispatch({
      type: DELETE_CHECKLIST_ITEM_FAILURE,
      payload: error.message
    });
  }
};
