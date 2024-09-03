/**
 * function - review
 * hoisting
 */
// let a = 6;

// sayHello();
function sayHello() {
  //   console.log("hello");
  return "hello";
}
// const hi = sayHello()
// console.log(sayHello());

// ES6
// x()
const x = function () {
  return "hi";
};
// console.log(x());
// console.log(a);
// let a =5

// arrow function
const sum = (a = 4, b = 6) => a + b;
// console.log(sum());

/** Array methods */

/** loop */
// let users = ["John", "Marry", "Dan", "Anne"];
/**  */
// const len = users.length
// for (let i = users.length-1; i >= 0; i--) {
//   console.log(users[i]);
// }

// let indx = 0;
// while (indx < users.length) {
//   console.log(users[indx]);
//   indx++;
// }
// let indx = 0;
// do {
//   console.log(users[indx]);
//   indx++;
// } while (indx < users.length);

/** loop an Object */
// for (const x in users) {
//   //   console.log(x, users[x]);
// }
// let obj = {
//   name: "John",
//   age: 25,
// };

// const y = "age";
// console.log(obj[y]);
// obj.name;
// obj["name"];
// for (const a in obj) {
//   //   console.log(a, obj[a]);
// }

// for (let i = 1; i < users.length - 1; i = i + 2) {
//   //   console.log(users[i]);
// }

// for (const x of users) {
//   //   console.log(x);
// }

/** Create an array of users's emails */
// const users = ["John", "Marry", "Dan", "Anne"];
/**
 * ["John@gmail.com", "Marry@gmail.com", "Dan@gmail.com", "Anne@gmail.com"];
 */

// let arr = [];
// for (const x in users) {
//   arr.push(users[x] + "@gmail.com");
// }
// console.log(arr);

/** forEach */
// let arr = [];
/**
 * @param
 * item - mandatory
 * indx - optional
 * arr - optional
 */
// users.forEach((item, indx, arr) => {
//   //   console.log(item, indx);
//   //   arr.push(item + "@gamil.com");
//   arr[indx] = item + "@gamil.com";
// });
// console.log(users);

// const users = ["John", "Marry", "Dan", "Anne"];
/** some
 * @returns true/false
 */
// let result = users.some((item) => {
//   return item === "Dan";
// });
// console.log(result);

/**
 * every
 * @returns true/false
 */
// let result2 = users.every((item) => {
//   return item !== "abc";
// });
// console.log(result2);

/** Exercise
 * Create an function that get an array of Numbers as input
 * and return a new array with all numbers multiply by 2
 * For example:
 * Give this array [1,2,3,4]
 * result [2,4,6,8]
 */
// function map(arr) {
//   let arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr2.push(arr[i] * 2);
//   }
//   return arr2;
// }
// console.log(map([1, 2, 3, 4]));

/** map
 * @returns a new array
 *
 */
let arr = [1, 2, 3, 4];

let result = arr.map((item, indx) => {
  //   if (indx > 2) {
  //     return item * 2;
  //   }
  return 1;
});
// console.log(result);

// let users = [
//   { id: 1, name: "John", email: "John@gmail.com" },
//   { id: 2, name: "Marry", email: "Marry@gmail.com" },
//   { id: 3, name: "Anne", email: "Anne@gmail.com" },
//   { id: 4, name: "Or", email: "Or@gmail.com" },
// ];

/** Exercise: Use a method to render the users on the html page */

// let html = users.map((item) => {
//   return `<div>${item.id}<h2 class="a">${item.name}</h2><p>${item.email}</p></div>`;
// });
// console.log(html.join(""));
// document.getElementById("root").innerHTML = html.join("");

/** Exercise
 * Create an function that get an array of Numbers as input
 * and return a new array with all numbers greater than 3
 * For example:
 * Give this array [0,1,1,2,3,5,8]
 * result [5,8]
 */

const filter = (arr) => {
  let arr2 = [];
  arr.forEach((element) => {
    if (element > 3) {
      arr2.push(element);
    }
  });
  return arr2;
};
// console.log(filter([0, 1, 1, 2, 3, 5, 8]));

/**
 * filter
 * @returns an filtered array
 */
let arr3 = [0, 1, 1, 2, 3, 5, 8];

let filteredArr = arr3.filter((item) => {
  return item > 3;
});

// console.log("filteredArr=>", filteredArr);

// let users = [
//   { id: 1, name: "John", email: "John@gmail.com" },
//   { id: 2, name: "Marry", email: "Marry@gmail.com" },
//   { id: 3, name: "Anne", email: "Anne@gmail.com" },
//   { id: 4, name: "Or", email: "Or@gmail.com" },
// ];

/** Exercice: name of users includes 'a' case insesitive */

// let aUsers = users.filter((item) => {
//   return item.name.includes("a") && item.email.toLowerCase().startsWith("a");
// });

// console.log(aUsers);

/** Exercise
 * Create an function that get an array of Numbers as input
 * and return the sum of all numbers
 * For example:
 * Give this array [2, 5, 10,100]
 * result 117
 */

const reduce = (arr, num = 0) => {
  let sum = num;
  arr.forEach((item) => {
    sum += item;
  });
  return sum;
};

// console.log(reduce([2, 5, 10, 100], 100));

/** reduce */
// let nums = [2, 5, 10, 100];

// let sum2 = nums.reduce((total, item) => total + item);

// console.log("sum=>", sum2);

let users = [
  { id: 1, name: "John", email: "John@gmail.com" },
  { id: 2, name: "Marry", email: "Marry@gmail.com" },
  { id: 3, name: "Anne", email: "Anne@gmail.com" },
  { id: 4, name: "Or", email: "Or@gmail.com" },
];

/** find the first item that mactch a condition */

/** find / findIndex */

const user = users.findIndex((item) => {
  return item.id === 3;
});
// console.log(user);

/** array destructuring */

let array = [1, 2, 3, 4, 5, 6];
// let a = array[0];
// let b = array[1];
// let c = array[2];

/** rest parameter */
let [a, b, c, ...rest] = array;
// console.log(a, b, c, rest);

/** spread operator */
let num1 = 1;
let num2 = [2, 6];
let num3 = [3, 4, 5];

let num4 = [...num2, num1];

console.log(num4);