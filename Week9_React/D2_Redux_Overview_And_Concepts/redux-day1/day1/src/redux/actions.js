export const INCREMENT = "add";
export const DECREMENT = "minus";

export const add = (val) => {
  return {
    type: INCREMENT,
    payload: val
  };
};

export const minus = () => {
  return {
    type: DECREMENT,
  };
};
