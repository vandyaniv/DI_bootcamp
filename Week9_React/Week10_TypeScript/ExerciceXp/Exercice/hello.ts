console.log(' hello world ! ');

let text: string = 'hello World !';

console.log(text);
//tsc hello.ts
// node hello.js
// 2 - node + name of file js

// //D #2 { variable age of type number  } /- and a -/  {variable name of type string, and log them to the console. }
// let age: number = 23;
// let firstText: string = 'this is a string ';
// console.log(age, firstText);

// // 🌟 Exercise 3: Union Types
// //Use union - types to declare a =variable id that can be either a string or a number.

// let id: string | number;

// id = 34;
// console.log(id);

// //  Exercise 5:

// function getDetails(name: string, age: number): [string, number, string] {
//   const greeting = `hello, ${name} ! you ${age} years old.`;
//   return [name, age, greeting];
// }
// console.log(getDetails());

// const details = getDetails('Alice', 25);
// console.log(details);

// type person = {}

type Person = { name: string; age: number };

const person: Person = {
  name: 'Jean',
  age: 30,
};

// console.log(person);

const createPerson = (name: string, age: number): Person => {
  return {
    name,
    age,
  };
};

// 🌟 Exercise 9:

function greet(names: string) {
  console.log(`Hello ${names}`);
}

greet('Marco');

// Dayli Challenge ::

function processInput(input: number | string): number | string {
  if (typeof input === 'number') {
    return input ** 2;
  } else if (typeof input === 'string') {
    return input.toUpperCase();
  }
}

console.log(processInput(5));
console.log(processInput('hello'));
