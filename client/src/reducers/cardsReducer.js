export default (state = [], action) => {
  let currentCards = [...state];
  switch (action.type) {
    case "ADD_CARD":
      // Return current state with new card appendded
      return [
        ...state,
        {
          title: action.payload.title,
          cardId: action.payload.cardId,
          listHome: action.payload.listHome,
          archived: false,
          checklist: [],
          description: ""
        }
      ];
    case "MOVE_CARD":
      // Locate coresponding card in store
      currentCards.forEach(card => {
        if (card.cardId === action.payload.cardId) {
          // Update listHome
          card.listHome = action.payload.newListHome;
        }
      });
      return currentCards;
    case "COPY_CARD":
      const source = currentCards.find(
        card => (card.cardId = action.payload.sourceCardId)
      );
      const newCard = {};
      Object.assign(newCard, source);
      newCard.listHome = action.payload.newListHome;
      newCard.cardId = action.payload.newCardId;
      return [...currentCards, newCard];
    case "ARCHIVE_CARD":
      currentCards.forEach(card => {
        if (card.cardId === action.payload) {
          card.archived = true;
        }
      });
      return currentCards;
    case "RESTORE_CARD":
      currentCards.forEach(card => {
        if (card.cardId === action.payload) {
          card.archived = false;
        }
      });
      return currentCards;
    case "UPDATE_CARD_DESCRIPTION":
      // Locate coresponding card in store
      currentCards.forEach(card => {
        if (card.cardId === action.payload.cardId) {
          // Update description
          card.description = action.payload.descriptionInput;
        }
      });
      return currentCards;
    case "ADD_CHECKLIST_ITEM":
      const { checklistItemTitle, checklistItemId, checked } = action.payload;
      const newItem = { checklistItemTitle, checklistItemId, checked };
      // Locate corresponding card in store
      currentCards.forEach(card => {
        if (card.cardId === action.payload.cardId) {
          // Add newItem to that card's checklist
          card.checklist.push(newItem);
        }
      });
      return currentCards;
    case "CHECKLIST_CHECK":
      // Locate corresponding card in store
      currentCards.forEach(card => {
        if (card.cardId === action.payload.cardId) {
          // Locate corresponding checklist item inside that card's checklist
          card.checklist.forEach(item => {
            if (item.checklistItemId === action.payload.checklistItemId) {
              // Check or uncheck
              item.checked = !item.checked;
            }
          });
        }
      });
      return currentCards;
    case "CHECKLIST_DELETE":
      // Locate corresponding card in store
      currentCards.forEach(card => {
        if (card.cardId === action.payload.cardId) {
          // Locate corresponding checklist item inside, filter out item with payload's id
          card.checklist = card.checklist.filter(
            item => item.checklistItemId !== action.payload.checklistItemId
          );
        }
      });
      return currentCards;
    default:
      return state;
  }
};
