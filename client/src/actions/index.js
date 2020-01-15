export const addList = (title, listId) => {
  return {
    type: "ADD_LIST",
    payload: {
      title,
      listId
    }
  };
};

export const archiveList = listId => {
  return {
    type: "ARCHIVE_LIST",
    payload: listId
  };
};

export const restoreList = listId => {
  return {
    type: "RESTORE_LIST",
    payload: listId
  };
};

export const addCard = (title, cardId, listHome) => {
  return {
    type: "ADD_CARD",
    payload: {
      title,
      cardId,
      listHome
    }
  };
};

export const moveCard = (cardId, newListHome) => {
  return {
    type: "MOVE_CARD",
    payload: {
      cardId,
      newListHome
    }
  };
};

export const copyCard = (sourceCardId, newCardId, newListHome) => {
  return {
    type: "COPY_CARD",
    payload: {
      sourceCardId,
      newCardId,
      newListHome
    }
  };
};

export const archiveCard = cardId => {
  return {
    type: "ARCHIVE_CARD",
    payload: cardId
  };
};

export const restoreCard = cardId => {
  return {
    type: "RESTORE_CARD",
    payload: cardId
  };
};

export const updateCardDescription = (cardId, descriptionInput) => {
  return {
    type: "UPDATE_CARD_DESCRIPTION",
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
    type: "ADD_CHECKLIST_ITEM",
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
    type: "CHECKLIST_CHECK",
    payload: {
      cardId,
      checklistItemId
    }
  };
};

export const checklistDelete = (cardId, checklistItemId) => {
  return {
    type: "CHECKLIST_DELETE",
    payload: {
      cardId,
      checklistItemId
    }
  };
};
