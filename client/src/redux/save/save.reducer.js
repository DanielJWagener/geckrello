import {
  ADD_CARD,
  ADD_CARD_SUCCESS,
  ADD_CARD_FAILURE,
  COPY_CARD,
  COPY_CARD_SUCCESS,
  COPY_CARD_FAILURE,
  MOVE_CARD,
  MOVE_CARD_SUCCESS,
  MOVE_CARD_FAILURE,
  ARCHIVE_CARD,
  ARCHIVE_CARD_SUCCESS,
  ARCHIVE_CARD_FAILURE,
  RESTORE_CARD,
  RESTORE_CARD_SUCCESS,
  RESTORE_CARD_FAILURE,
  UPDATE_CARD_DESCRIPTION,
  UPDATE_CARD_DESCRIPTION_SUCCESS,
  UPDATE_CARD_DESCRIPTION_FAILURE,
  ADD_CHECKLIST_ITEM,
  ADD_CHECKLIST_ITEM_FAILURE,
  ADD_CHECKLIST_ITEM_SUCCESS,
  CHECK_OR_UNCHECK,
  CHECK_OR_UNCHECK_SUCCESS,
  CHECK_OR_UNCHECK_FAILURE,
  DELETE_CHECKLIST_ITEM,
  DELETE_CHECKLIST_ITEM_SUCCESS,
  DELETE_CHECKLIST_ITEM_FAILURE,
  ADD_LIST,
  ADD_LIST_SUCCESS,
  ADD_LIST_FAILURE
} from "../types";

const INITIAL_STATE = { changes: null };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CARD:
    case MOVE_CARD:
    case ARCHIVE_CARD:
    case RESTORE_CARD:
    case UPDATE_CARD_DESCRIPTION:
    case COPY_CARD:
    case ADD_CHECKLIST_ITEM:
    case CHECK_OR_UNCHECK:
    case DELETE_CHECKLIST_ITEM:
    case ADD_LIST:
      return { changes: "Saving..." };
    case ADD_CARD_SUCCESS:
    case MOVE_CARD_SUCCESS:
    case ARCHIVE_CARD_SUCCESS:
    case RESTORE_CARD_SUCCESS:
    case UPDATE_CARD_DESCRIPTION_SUCCESS:
    case COPY_CARD_SUCCESS:
    case ADD_CHECKLIST_ITEM_SUCCESS:
    case CHECK_OR_UNCHECK_SUCCESS:
    case DELETE_CHECKLIST_ITEM_SUCCESS:
    case ADD_LIST_SUCCESS:
      return { changes: "Saved!" };
    case ADD_CARD_FAILURE:
    case MOVE_CARD_FAILURE:
    case ARCHIVE_CARD_FAILURE:
    case RESTORE_CARD_FAILURE:
    case UPDATE_CARD_DESCRIPTION_FAILURE:
    case COPY_CARD_FAILURE:
    case ADD_CHECKLIST_ITEM_FAILURE:
    case CHECK_OR_UNCHECK_FAILURE:
    case DELETE_CHECKLIST_ITEM_FAILURE:
      return { error: action.payload || "Error: Could not update card" };
    case ADD_LIST_FAILURE:
      return { error: action.payload || "Error: Could not update list" };
    default:
      return state;
  }
};
