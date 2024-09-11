/** Module System */
/**
 * 1. core libraries - http, fs, path
 * 2. modules - creted by you
 * 3. NPM (YARN) modules
 */

// const { add } = require('../math/utils/math.js')

const hello = (name) => {
  return `Hello, ${name}, welcome to NodeJS`;
};

const getName = (name) => {
  return `My name is ${name}`;
};
// console.log(hello("aaaa"));
// console.log(hello("Dan"));
module.exports = {
  hello,
  getName,
};
