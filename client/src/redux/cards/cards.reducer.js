import actionTypes from "../types";

export default (state = [], action) => {
  let currentCards = [...state];
  switch (action.type) {
    case actionTypes.FETCH_BOARD_DATA:
      return action.payload.cards;
    case actionTypes.ADD_CARD:
      // Return current state with new card appended
      return [...state, action.payload];
    case actionTypes.MOVE_CARD:
      // Locate coresponding card in store
      currentCards.forEach(card => {
        if (card._id === action.payload.cardId) {
          // Update listHome
          card.listHome = action.payload.newListHome;
        }
      });
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
