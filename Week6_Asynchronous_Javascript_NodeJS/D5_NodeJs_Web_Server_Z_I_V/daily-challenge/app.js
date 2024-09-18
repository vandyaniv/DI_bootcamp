import { greet } from "./greeting.cjs";
import {
  displayColorMessage,
  displayErrorMessage,
} from "./colorful-message.js";
import { read_file } from "./read-file.js";

console.log(displayColorMessage(greet("Lily")));
console.log(displayErrorMessage(greet("Dan")));

try {
  let data = await read_file("./files/file-data.tx");
  console.log(displayColorMessage(data));
} catch (error) {
  console.log(displayErrorMessage(error.message));
}
