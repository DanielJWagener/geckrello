import _ from "lodash";

import actionTypes from "../types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  let currentCards = { ...state };
  switch (action.type) {
    case actionTypes.FETCH_BOARD_DATA:
      return action.payload.cards;
    case actionTypes.UNLOAD_BOARD:
      return INITIAL_STATE;
    case actionTypes.ADD_CARD:
      currentCards[action.payload.tempId] = action.payload;
      return currentCards;
    case actionTypes.ADD_CARD_SUCCESS: {
      currentCards[action.payload.newId] = {
        ...currentCards[action.payload.tempId]
      };
      currentCards[action.payload.newId]._id = action.payload.newId;
      return _.omit(currentCards, action.payload.tempId);
    }
    case actionTypes.MOVE_CARD:
      // Locate coresponding card in store
      currentCards[action.payload.cardId].listHome = action.payload.newListHome;
      return currentCards;
    case actionTypes.ARCHIVE_CARD:
      // Find card in store, update archived property
      currentCards.forEach(card => {
        if (card._id === action.payload) {
          card.archived = true;
        }
      });
      return currentCards;
    case actionTypes.RESTORE_CARD:
      // Find card in store, update archived property
      currentCards.forEach(card => {
        if (card._id === action.payload) {
          card.archived = false;
        }
      });
      return currentCards;
    case actionTypes.UPDATE_CARD_DESCRIPTION:
      // Locate coresponding card in store
      currentCards.forEach(card => {
        if (card._id === action.payload.cardId) {
          // Update description
          card.description = action.payload.descriptionInput;
        }
      });
      return currentCards;
    case actionTypes.UPDATE_CHECKLIST:
      // Locate corresponding card in store
      currentCards.forEach(card => {
        if (card._id === action.payload.cardId) {
          // Set checklist in state equal to checklist retrieved from database after update
          card.checklist = action.payload.checklist;
        }
      });
      return currentCards;
    default:
      return state;
  }
};
