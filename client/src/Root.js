// Simply creates a Redux store and passes it in to a provider tag.
// This logic was originally in index.js, but we've movied it here to
// make our testing process easier.
import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(reduxThunk))
);

export default ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
