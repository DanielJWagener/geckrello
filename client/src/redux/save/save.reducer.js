import {
  ADD_CARD,
  ADD_CARD_SUCCESS,
  ADD_CARD_FAILURE,
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
  UPDATE_CARD_DESCRIPTION_FAILURE
} from "../types";

const INITIAL_STATE = { changes: null };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CARD:
    case MOVE_CARD:
    case ARCHIVE_CARD:
    case RESTORE_CARD:
    case UPDATE_CARD_DESCRIPTION:
      return { changes: "Saving..." };
    case ADD_CARD_SUCCESS:
    case MOVE_CARD_SUCCESS:
    case ARCHIVE_CARD_SUCCESS:
    case RESTORE_CARD_SUCCESS:
    case UPDATE_CARD_DESCRIPTION_SUCCESS:
      return { changes: "Saved!" };
    case ADD_CARD_FAILURE:
    case MOVE_CARD_FAILURE:
    case ARCHIVE_CARD_FAILURE:
    case RESTORE_CARD_FAILURE:
    case UPDATE_CARD_DESCRIPTION_FAILURE:
      return { error: action.payload || "Error: Could not update card" };
    default:
      return state;
  }
};
