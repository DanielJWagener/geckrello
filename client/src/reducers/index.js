import { combineReducers } from "redux";
import listsReducer from "./listsReducer";
import cardsReducer from "./cardsReducer";
import authReducer from "./authReducer";
import boardreducer from "./boardreducer";

export default combineReducers({
  board: boardreducer,
  lists: listsReducer,
  cards: cardsReducer,
  auth: authReducer
});
