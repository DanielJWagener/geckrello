import { createSelector } from "reselect";

const selectLists = state => state.lists;

export const selectListsAsArray = createSelector([selectLists], lists =>
  Object.values(lists)
);

export const selectArchivedLists = createSelector([selectListsAsArray], lists =>
  lists.filter(list => list.archived)
);

export const selectUnarchivedLists = createSelector(
  [selectListsAsArray],
  lists => lists.filter(list => !list.archived)
);

export const selectListById = listId =>
  createSelector([selectLists], lists => lists[listId]);
