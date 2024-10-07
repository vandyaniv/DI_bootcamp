import { configureStore } from 'react-redux';
// import { ageReducer } from 'ageSlice'

const store = configureStore({
  reducer: {
    age: ageReducer,
  },
});

export default store;
