// app/store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../src/features/counter/counterSlice'; // Note que nous ajustons le chemin ici

const appReducer = combineReducers({
  counter: counterReducer,
  // Tu peux ajouter d'autres reducers ici si nécessaire
});

const store = configureStore({
  reducer: appReducer,
});

export default store;
