// import { createStore, combineReducers } from "redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { counterReducer } from "./reducers";
import { textReducer } from "./textReducer";

const appReducer = combineReducers({
  counterReducer,

  textReducer,
});

// const store = createStore(reducer);

const store = configureStore({
  reducer: appReducer,
});
export default store;
