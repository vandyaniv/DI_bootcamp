export const CHANGE_TEXT = "change_text";

export const changeTitle = (val) => {
  return {
    type: CHANGE_TEXT,
    text: val,
  };
};
