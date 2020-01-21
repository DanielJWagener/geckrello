import { combineReducers } from "redux";
import listsReducer from "./listsReducer";
import cardsReducer from "./cardsReducer";
import authReducer from "./authReducer";
import boardsreducer from "./boardsreducer";

export default combineReducers({
  boards: boardsreducer,
  lists: listsReducer,
  cards: cardsReducer,
  auth: authReducer
});
