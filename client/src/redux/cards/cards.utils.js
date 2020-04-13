export const normalizeCards = cardsArray => {
  let outputObj = {};

  cardsArray = cardsArray.map(card => {
    let checklistObj = {};
    card.checklist.forEach(item => (checklistObj[item._id] = item));
    return { ...card, checklist: checklistObj };
  });

  cardsArray.forEach(card => (outputObj[card._id] = card));
  return outputObj;
};

export const normalizeChecklist = checklistArray => {
  let outputObj = {};

  checklistArray.forEach(item => (outputObj[item._id] = item));
  return outputObj;
};
