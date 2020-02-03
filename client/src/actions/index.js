import * as authActions from "./authActions";
import * as boardActions from "./boardActions";
import * as cardActions from "./cardActions";
import * as listActions from "./listActions";

export const { fetchUser } = authActions;
export const {
  fetchBoardData,
  addBoard,
  unloadBoard,
  updateBoard
} = boardActions;
export const {
  addCard,
  moveCard,
  copyCard,
  archiveCard,
  restoreCard,
  updateCardDescription,
  addChecklistItem,
  checkOrUncheckChecklistItem,
  deleteChecklistItem
} = cardActions;
export const { addList, archiveList, restoreList } = listActions;
