import { combineReducers } from "redux";
import listsReducer from "./listsReducer";
import cardsReducer from "./cardsReducer";
import authReducer from "./authReducer";

export default combineReducers({
  lists: listsReducer,
  cards: cardsReducer,
  auth: authReducer
});
