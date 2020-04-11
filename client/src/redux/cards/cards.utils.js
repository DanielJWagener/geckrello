export const normalizeCards = cardsArray => {
  let outputObj = {};
  cardsArray.forEach(card => (outputObj[card._id] = card));
  return outputObj;
};
