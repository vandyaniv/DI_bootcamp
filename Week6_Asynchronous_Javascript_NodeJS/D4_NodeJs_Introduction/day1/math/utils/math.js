export const multiply = (a, b) => {
  return a * b;
};

export const divide = (a, b) => {
  if (b === 0) {
    throw new Error("Division by zero not allowed");
  }
  return a / b;
};

export const add = (a, b) => {
  return a + b;
};

export const subtract = (a, b) => {
  return a - b;
};

export default add;

// module.exports = {
//   multiply,
//   divide,
//   add,
//   subtract,
// };

// export {
//     multiply,
//     divide,
//     add,
//     subtract,
// }
