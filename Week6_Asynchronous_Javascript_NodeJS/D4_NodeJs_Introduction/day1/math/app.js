// const { add, subtract, multiply, divide } = require("./utils/math.js");
import { add, subtract, multiply, divide } from "./utils/math.js";
import myadd from './utils/math.js'

try {
  console.log(multiply(2, 5));
  console.log(divide(2, 5));
  console.log(myadd(2, 5));
  console.log(add(2, 5));
  console.log(subtract(2, 5));
  console.log(divide(2, 0));
} catch (error) {
  //   console.log("Error:", error);
}
