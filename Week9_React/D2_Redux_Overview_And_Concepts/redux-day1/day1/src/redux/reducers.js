import { INCREMENT, DECREMENT } from "./actions";

const initialState = {
  count: 5,
  text: "abc",
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + action.payload };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};


