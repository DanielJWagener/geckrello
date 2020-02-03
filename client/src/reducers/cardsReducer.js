import {
  FETCH_BOARD_DATA,
  ADD_CARD,
  MOVE_CARD,
  ARCHIVE_CARD,
  RESTORE_CARD,
  UPDATE_CARD_DESCRIPTION,
  UPDATE_CHECKLIST
} from "../actions/types";

export default (state = [], action) => {
  let currentCards = [...state];
  switch (action.type) {
    case FETCH_BOARD_DATA:
      return action.payload.cards;
    case ADD_CARD:
      // Return current state with new card appended
      return [...state, action.payload];
    case MOVE_CARD:
      // Locate coresponding card in store
      currentCards.forEach(card => {
        if (card._id === action.payload.cardId) {
          // Update listHome
          card.listHome = action.payload.newListHome;
        }
      });
      return currentCards;
    case ARCHIVE_CARD:
      // Find card in store, update archived property
      currentCards.forEach(card => {
        if (card._id === action.payload) {
          card.archived = true;
        }
      });
      return currentCards;
    case RESTORE_CARD:
      // Find card in store, update archived property
      currentCards.forEach(card => {
        if (card._id === action.payload) {
          card.archived = false;
        }
      });
      return currentCards;
    case UPDATE_CARD_DESCRIPTION:
      // Locate coresponding card in store
      currentCards.forEach(card => {
        if (card._id === action.payload.cardId) {
          // Update description
          card.description = action.payload.descriptionInput;
        }
      });
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
