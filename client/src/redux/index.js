import { combineReducers } from "redux";
import listsReducer from "./lists/lists.reducer";
import cardsReducer from "./cards/cards.reducer";
import authReducer from "./auth/auth.reducer";
import boardreducer from "./lists/lists.reducer";

export default combineReducers({
  board: boardreducer,
  lists: listsReducer,
  cards: cardsReducer,
  auth: authReducer
});
