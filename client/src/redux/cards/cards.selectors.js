import { createSelector } from "reselect";

const selectCards = state => state.cards;

export const selectCardById = cardId =>
  createSelector([selectCards], cards =>
    cards.find(card => card._id === cardId)
  );

export const selectCardDescription = cardId =>
  createSelector([selectCardById(cardId)], card => card.description);
