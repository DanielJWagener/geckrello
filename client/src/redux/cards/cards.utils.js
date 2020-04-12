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
