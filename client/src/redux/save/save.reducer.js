import actionTypes from "../types";

const INITIAL_STATE = { changes: null };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_CARD:
      return { changes: "Saving..." };
    case actionTypes.ADD_CARD_SUCCESS:
      return { changes: "Saved!" };
    case actionTypes.ADD_CARD_FAILURE:
      return { error: "Error: Could not update card" };
    default:
      return state;
  }
};
