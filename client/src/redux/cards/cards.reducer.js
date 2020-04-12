import _ from "lodash";

import {
  FETCH_BOARD_DATA,
  UNLOAD_BOARD,
  ADD_CARD,
  ADD_CARD_SUCCESS,
  ADD_CARD_FAILURE,
  MOVE_CARD,
  MOVE_CARD_SUCCESS,
  MOVE_CARD_FAILURE,
  ARCHIVE_CARD,
  ARCHIVE_CARD_SUCCESS,
  ARCHIVE_CARD_FAILURE,
  RESTORE_CARD,
  UPDATE_CARD_DESCRIPTION,
  UPDATE_CHECKLIST,
  COPY_CARD
} from "../types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  let currentCards = { ...state };
  switch (action.type) {
    case FETCH_BOARD_DATA:
      return action.payload.cards;
    case UNLOAD_BOARD:
      return INITIAL_STATE;
    case ADD_CARD:
      // Create new key with tempId
      currentCards[action.payload.tempId] = action.payload;
      return currentCards;
    case ADD_CARD_SUCCESS: {
      // Update target card's id key, then populate its _id field with id from database
      currentCards[action.payload.newId] = {
        ...currentCards[action.payload.tempId]
      };
      currentCards[action.payload.newId]._id = action.payload.newId;
      return _.omit(currentCards, action.payload.tempId);
    }
    case MOVE_CARD:
      currentCards[action.payload.cardId].listHome = action.payload.newListHome;
      return currentCards;
    case COPY_CARD:
      // Copy checklist, add tempIds for each item
      let sourceCardChecklist = {
        ...currentCards[action.payload.sourceCardId].checklist
      };
      let checklistCopyArray = Object.values(sourceCardChecklist);
      let copiedChecklist = {};
      checklistCopyArray
        .map((item, index) => {
          let copyOfItem = { ...item };
          copyOfItem._id = "";
          copyOfItem.tempId = action.payload.checklistTempIds[index];
          return copyOfItem;
        })
        .forEach((item, index) => {
          copiedChecklist[action.payload.checklistTempIds[index]] = item;
        });

      // Copy all card information into new key of tempId, remove _id, add tempId, and copied checklist
      currentCards[action.payload.tempId] = {
        ...currentCards[action.payload.sourceCardId],
        listHome: action.payload.newListHome,
        tempId: action.payload.tempId,
        _id: "",
        checklist: copiedChecklist
      };

      return currentCards;
    case ARCHIVE_CARD:
      currentCards[action.payload].archived = true;
      return currentCards;
    case RESTORE_CARD:
      currentCards[action.payload].archived = false;
      return currentCards;
    case UPDATE_CARD_DESCRIPTION:
      currentCards[action.payload.cardId].description =
        action.payload.descriptionInput;
      return currentCards;
    case UPDATE_CHECKLIST:
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
