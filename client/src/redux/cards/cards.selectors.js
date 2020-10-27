import { createSelector } from 'reselect';

const selectCards = state => state.cards;

export const selectCardsAsArray = createSelector([selectCards], cards =>
  Object.values(cards)
);

export const selectArchivedCards = createSelector([selectCardsAsArray], cards =>
  cards.filter(card => card.archived)
);

export const selectCardsByListHome = listId =>
  createSelector([selectCardsAsArray], cards =>
    cards.filter(card => card.listHome === listId && !card.archived)
  );

export const selectCardById = cardId =>
  createSelector([selectCards], cards => cards[cardId]);

export const selectCardDescription = cardId =>
  createSelector([selectCardById(cardId)], card => card.description);

export const selectListHomebyCardId = cardId =>
  createSelector([selectCardById(cardId)], card => card.listHome);

export const selectChecklistByCardId = cardId =>
  createSelector([selectCardById(cardId)], card => card.checklist);
