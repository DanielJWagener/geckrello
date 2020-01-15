import { combineReducers } from "redux";
import listsReducer from "./listsReducer";
import cardsReducer from "./cardsReducer";

export default combineReducers({
  lists: listsReducer,
  cards: cardsReducer
});
